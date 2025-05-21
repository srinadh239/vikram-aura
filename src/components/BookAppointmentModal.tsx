import React, { useState, useEffect } from "react";

interface BookAppointmentModalProps {
  open: boolean;
  onClose: () => void;
  doctorList: string[];
  defaultDoctor?: string;
}

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzpmukEt_Izt7K8Pycye7gwgMWXeWnpT25GHYBnCaZLRZj71jRkwqhekLXrlezMMJ3Ew/exec";

const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({ open, onClose, doctorList, defaultDoctor }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [doctorName, setDoctorName] = useState(defaultDoctor || doctorList[0] || "");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setDoctorName(defaultDoctor || doctorList[0] || "");
    }
  }, [defaultDoctor, doctorList, open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          name,
          phone,
          doctorName,
          date
        }),
      });
      if (res.ok) {
        setSuccess("Appointment booked successfully!");
        setName("");
        setPhone("");
        setDoctorName(doctorList[0] || "");
        setDate("");
      } else {
        setError("Failed to book appointment. Please try again.");
      }
    } catch (err) {
      setError("Failed to book appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setName("");
    setPhone("");
    setDoctorName(defaultDoctor || doctorList[0] || "");
    setDate("");
    setSuccess("");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button onClick={handleClose} className="absolute top-3 right-3 text-2xl text-zinc-400 hover:text-zinc-600">&times;</button>
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Book an Appointment</h2>
        {success ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-3xl text-green-600 font-bold mb-4">Thank you!</div>
            <div className="text-lg text-zinc-700 mb-6">Your appointment has been booked successfully.</div>
            <button
              className="va-appointment-btn px-7 py-2.5 border border-solid rounded-[48px]"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Patient Name"
              className="border rounded px-4 py-2"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded px-4 py-2"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
            <select
              className="border rounded px-4 py-2"
              value={doctorName}
              onChange={e => setDoctorName(e.target.value)}
              required
            >
              {doctorList.map((doc, i) => (
                <option key={i} value={doc}>{doc}</option>
              ))}
            </select>
            <input
              type="date"
              className="border rounded px-4 py-2"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />
            <button
              type="submit"
              className="va-appointment-btn px-7 py-2.5 border border-solid rounded-[48px] mt-2"
              disabled={loading}
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>
            {error && <div className="text-red-600 text-center mt-2">{error}</div>}
          </form>
        )}
      </div>
    </div>
  );
};

export default BookAppointmentModal; 