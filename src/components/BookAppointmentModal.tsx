import React, { useState, useEffect } from "react";
import {
  doctorSchedules as defaultSchedules,
  getScheduleByName,
  allOpdDays,
  isValidOpdDate,
  availableTimeSlotsForDate,
  type DoctorSchedule,
} from "../constants/doctorSchedules";

interface BookAppointmentModalProps {
  open: boolean;
  onClose: () => void;
  /** Pass the full schedule list. Defaults to all doctors if omitted. */
  doctorSchedules?: DoctorSchedule[];
  /** Pre-select a specific doctor by name */
  defaultDoctor?: string;
  /** @deprecated — use doctorSchedules instead */
  doctorList?: string[];
}

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyuoePUcdmJa_oCMVwmpSMG43bZZMnOGMc2lIWCjgIXv-mCWE8ZR1glmGZuJSQb72rbaQ/exec";

const DAY_LABELS: Record<string, string> = {
  Mon: "Mon", Tue: "Tue", Wed: "Wed",
  Thu: "Thu", Fri: "Fri", Sat: "Sat", Sun: "Sun",
};

const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  open,
  onClose,
  doctorSchedules: schedulesProp,
  defaultDoctor,
  doctorList,
}) => {
  const schedules: DoctorSchedule[] = schedulesProp ?? (() => {
    if (doctorList && doctorList.length > 0) {
      return doctorList
        .map((n) => getScheduleByName(n))
        .filter((s): s is DoctorSchedule => !!s);
    }
    return defaultSchedules;
  })();

  const resolveDoctorName = (raw?: string): string => {
    if (!raw) return schedules[0]?.name || "";
    const matched = getScheduleByName(raw);
    if (matched && schedules.some((s) => s.name === matched.name)) return matched.name;
    if (schedules.some((s) => s.name === raw)) return raw;
    return schedules[0]?.name || "";
  };

  const firstDoctor = resolveDoctorName(defaultDoctor);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [doctorName, setDoctorName] = useState(firstDoctor);
  const [date, setDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [dateError, setDateError] = useState("");

  useEffect(() => {
    if (open) {
      setDoctorName(resolveDoctorName(defaultDoctor));
      setDate("");
      setSelectedSlot("");
      setDateError("");
      setSuccess("");
      setError("");
    }
  }, [open, defaultDoctor]);

  if (!open) return null;

  const selectedSchedule =
    schedules.find((s) => s.name === doctorName) ?? getScheduleByName(doctorName);
  const validDays = selectedSchedule ? allOpdDays(selectedSchedule) : [];
  const timeSlots =
    selectedSchedule && date && !dateError
      ? availableTimeSlotsForDate(selectedSchedule, date)
      : [];

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDoctorName(e.target.value);
    setDate("");
    setSelectedSlot("");
    setDateError("");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setDate(val);
    setSelectedSlot("");
    if (val && selectedSchedule && !selectedSchedule.oncall) {
      const d = new Date(val + "T00:00:00");
      if (!isValidOpdDate(selectedSchedule, d)) {
        setDateError(
          `${doctorName} is available on: ${validDays.join(", ")}. Please choose a valid day.`
        );
      } else {
        setDateError("");
        const slots = availableTimeSlotsForDate(selectedSchedule, val);
        if (slots.length === 1) setSelectedSlot(slots[0]);
      }
    } else {
      setDateError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (dateError) return;

    if (selectedSchedule && !selectedSchedule.oncall) {
      if (!date) {
        setDateError("Please select a preferred date.");
        return;
      }
      const d = new Date(date + "T00:00:00");
      if (!isValidOpdDate(selectedSchedule, d)) {
        setDateError(
          `${doctorName} is not available on that day. Available: ${validDays.join(", ")}.`
        );
        return;
      }
      if (!selectedSlot) {
        setError("Please select an available time slot.");
        return;
      }
    }

    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name,
          phone,
          doctorName,
          date: selectedSchedule?.oncall ? "On Call" : date,
          time: selectedSchedule?.oncall ? "On Call" : selectedSlot,
          slot: selectedSchedule?.oncall ? "On Call" : selectedSlot,
          department: selectedSchedule?.department ?? "",
          fee: selectedSchedule?.fee ? `₹${selectedSchedule.fee}` : "N/A",
        }),
      });
      if (res.ok) {
        setSuccess("Appointment booked successfully!");
        setName("");
        setPhone("");
        setDoctorName(firstDoctor);
        setDate("");
        setSelectedSlot("");
      } else {
        setError("Failed to book appointment. Please try again.");
      }
    } catch {
      setError("Failed to book appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setName("");
    setPhone("");
    setDoctorName(firstDoctor);
    setDate("");
    setSelectedSlot("");
    setSuccess("");
    setError("");
    setDateError("");
    onClose();
  };

  const today = new Date().toISOString().split("T")[0];
  const canSubmit =
    !loading &&
    !dateError &&
    (selectedSchedule?.oncall || (!!date && !!selectedSlot));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative max-h-[95vh] overflow-y-auto">
        <div className="sticky top-0 bg-white rounded-t-2xl px-6 pt-6 pb-4 border-b border-gray-100 z-10">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
          <h2 className="text-xl font-bold text-orange-500">Book an Appointment</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Vikram Aura Hospital · Richmond Road, Bangalore
          </p>
        </div>

        <div className="px-6 pb-6 pt-4">
          {success ? (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg font-bold text-gray-900 mb-1">Appointment Requested!</p>
              <p className="text-sm text-gray-500 text-center mb-6">
                Our team will confirm your appointment via phone or WhatsApp.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-2.5 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Patient Name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Select Doctor
                </label>
                <select
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
                  value={doctorName}
                  onChange={handleDoctorChange}
                  required
                >
                  {schedules.map((doc) => (
                    <option key={doc.name} value={doc.name}>
                      {doc.name} — {doc.department}
                    </option>
                  ))}
                </select>
              </div>

              {selectedSchedule && (
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    OPD Schedule
                  </p>

                  {selectedSchedule.oncall ? (
                    <div className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">📞</span>
                      <div>
                        <p className="text-sm font-medium text-gray-800">Available on Call</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Our team will contact you to schedule a convenient time.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {selectedSchedule.slots.map((slot, i) => (
                        <div key={i} className="flex items-center justify-between gap-2">
                          <div className="flex gap-1 flex-wrap">
                            {slot.days.map((d) => (
                              <span
                                key={d}
                                className="px-1.5 py-0.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded"
                              >
                                {DAY_LABELS[d]}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
                            {slot.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedSchedule.fee !== null ? (
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-orange-200">
                      <span className="text-xs text-gray-500">Consultation Fee</span>
                      <span className="text-base font-bold text-orange-600">
                        ₹{selectedSchedule.fee.toLocaleString("en-IN")}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-orange-200">
                      <span className="text-xs text-gray-500">Consultation Fee</span>
                      <span className="text-xs font-medium text-gray-500">Contact hospital</span>
                    </div>
                  )}
                </div>
              )}

              {selectedSchedule && !selectedSchedule.oncall && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Preferred Date
                      {validDays.length > 0 && (
                        <span className="ml-1 normal-case font-normal text-gray-400">
                          (Available: {validDays.join(", ")})
                        </span>
                      )}
                    </label>
                    <input
                      type="date"
                      className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                        dateError ? "border-red-400" : "border-gray-200"
                      }`}
                      value={date}
                      min={today}
                      onChange={handleDateChange}
                      required
                    />
                    {dateError && (
                      <p className="text-xs text-red-500 mt-1">{dateError}</p>
                    )}
                  </div>

                  {date && !dateError && (
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Select Time Slot
                        <span className="ml-1 normal-case font-normal text-gray-400">
                          ({timeSlots.length} available)
                        </span>
                      </label>
                      {timeSlots.length === 0 ? (
                        <p className="text-xs text-red-500">
                          No slots available for this date. Please choose another day.
                        </p>
                      ) : (
                        <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-1">
                          {timeSlots.map((slot) => {
                            const active = selectedSlot === slot;
                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => {
                                  setSelectedSlot(slot);
                                  setError("");
                                }}
                                className={`px-2 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                                  active
                                    ? "bg-orange-500 border-orange-500 text-white shadow-sm"
                                    : "bg-white border-gray-200 text-gray-700 hover:border-orange-300 hover:bg-orange-50"
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      )}
                      {!selectedSlot && timeSlots.length > 0 && (
                        <p className="text-xs text-gray-400 mt-2">
                          Tap a slot to continue
                        </p>
                      )}
                    </div>
                  )}
                </>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-3 rounded-full transition-colors text-sm mt-1"
              >
                {loading ? "Booking…" : "Confirm Appointment Request"}
              </button>

              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}

              <p className="text-xs text-gray-400 text-center leading-relaxed">
                By booking you agree to be contacted by Vikram Aura Hospital on the number provided.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentModal;
