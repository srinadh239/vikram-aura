// ─────────────────────────────────────────────────────────────────────────────
// Doctor OPD Schedules — single source of truth for booking, fees and slots.
// Update this file whenever a doctor's schedule or fee changes.
// ─────────────────────────────────────────────────────────────────────────────

export type WeekDay = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export interface OpdSlot {
  days: WeekDay[];
  time: string; // display string e.g. "11:00 AM – 02:00 PM"
}

export interface DoctorSchedule {
  name: string;
  /** Optional id matching medicalData doctor.id for reliable lookup */
  doctorId?: string;
  /** Alternate names used in medicalData / Practo / sheets */
  aliases?: string[];
  department: string;
  /** true = on-call only, no fixed OPD slot */
  oncall: boolean;
  slots: OpdSlot[];
  /** Consultation fee in ₹. null = not published / radiologist / on request. */
  fee: number | null;
  /** Whether a Practo booking page exists */
  practoPage: boolean;
}

// Day-of-week number helpers (JS Date: Sun=0 … Sat=6)
export const DAY_NUMBER: Record<WeekDay, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

const MON_SAT: WeekDay[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Strip "Dr"/"DR" and punctuation so names can be compared. */
export const normalizeDoctorName = (name: string): string =>
  name
    .toUpperCase()
    .replace(/^DR\.?\s*/i, "")
    .replace(/[^A-Z0-9]/g, "");

// ─────────────────────────────────────────────────────────────────────────────
// SCHEDULE DATA — sourced from hospital OPD sheet (Jul 2026)
// ─────────────────────────────────────────────────────────────────────────────
export const doctorSchedules: DoctorSchedule[] = [
  {
    name: "Dr. Sai Krishna B Naidu",
    doctorId: "dr-sai-krishna-b-naidu",
    aliases: ["DR SAI KRISHNA B NAIDU"],
    department: "Orthopaedics",
    oncall: false,
    slots: [
      { days: ["Tue", "Thu", "Fri"], time: "11:00 AM – 02:00 PM" },
      { days: ["Sat"], time: "11:00 AM – 03:00 PM" },
    ],
    fee: 1200,
    practoPage: true,
  },
  {
    name: "Dr. Mithun Oswal",
    doctorId: "dr-mithun-n-oswal",
    aliases: ["DR MITHUN N OSWAL", "Dr. Mithun N Oswal"],
    department: "Orthopaedics",
    oncall: false,
    slots: [{ days: ["Mon", "Wed"], time: "11:30 AM – 01:00 PM" }],
    fee: 850,
    practoPage: false,
  },
  {
    name: "Dr. Abhijit R",
    doctorId: "dr-abhijit-r",
    aliases: ["DR ABHIJIT R"],
    department: "Orthopaedics",
    oncall: false,
    slots: [{ days: MON_SAT, time: "05:00 PM – 06:00 PM" }],
    fee: 850,
    practoPage: true,
  },
  {
    name: "Dr. Shashidhar B K",
    doctorId: "dr-shashidhar-b-k",
    aliases: ["DR SHASHIDHAR B K", "DR SHASHIDHAR BK"],
    department: "Orthopaedic & Spine Surgery",
    oncall: false,
    slots: [{ days: MON_SAT, time: "10:00 AM – 02:00 PM" }],
    fee: 1000,
    practoPage: false,
  },
  {
    name: "Dr. Ragha Mithun",
    doctorId: "dr-ragha-midhun-ponnam",
    aliases: ["DR RAGHA MIDHUN PONNAM", "Dr. Ragha Midhun Ponnam"],
    department: "Spine Surgery (Orthopaedics)",
    oncall: false,
    slots: [{ days: MON_SAT, time: "11:00 AM – 03:00 PM" }],
    fee: 850,
    practoPage: true,
  },
  {
    name: "Dr. Raja Selvarajan",
    doctorId: "dr-raja-selvarajan",
    aliases: ["DR RAJA SELVARAJAN"],
    department: "Physician & Diabetologist",
    oncall: false,
    slots: [{ days: MON_SAT, time: "04:00 PM – 06:30 PM" }],
    fee: 1000,
    practoPage: false,
  },
  {
    name: "Dr. Bushra Bahjat",
    doctorId: "dr-bushra-bahjat",
    aliases: ["DR BUSHRA BAHJAT"],
    department: "Internal Medicine",
    oncall: false,
    slots: [{ days: MON_SAT, time: "10:00 AM – 02:00 PM" }],
    fee: 1300,
    practoPage: true,
  },
  {
    name: "Dr. Tejashree P",
    aliases: ["DR TEJASHREE P"],
    department: "Internal Medicine",
    oncall: false,
    slots: [{ days: MON_SAT, time: "10:30 AM – 11:30 AM" }],
    fee: 1000,
    practoPage: false,
  },
  {
    name: "Dr. Varun Venkatesh",
    aliases: ["DR VARUN VENKATESH"],
    department: "Radiology",
    oncall: false,
    slots: [{ days: MON_SAT, time: "10:30 AM – 04:00 PM" }],
    fee: null,
    practoPage: false,
  },
  {
    name: "Dr. Murali Mohan",
    doctorId: "dr-mohan-murali-j",
    aliases: ["DR MOHAN MURALI J", "Dr. Mohan Murali J"],
    department: "Cardiology",
    oncall: false,
    slots: [{ days: MON_SAT, time: "10:30 AM – 12:00 PM" }],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. I R Ravish",
    doctorId: "dr-ravish-i-r",
    aliases: ["DR RAVISH I R", "Dr. Ravish I R"],
    department: "Urology",
    oncall: false,
    slots: [{ days: MON_SAT, time: "02:00 PM – 03:00 PM" }],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. Sunil Navalgund",
    doctorId: "dr-sunil-navalgund",
    aliases: ["DR SUNIL NAVALGUND"],
    department: "Surgical Oncology",
    oncall: true,
    slots: [],
    fee: 1000,
    practoPage: false,
  },
  {
    name: "Dr. Kiran Kumar",
    aliases: ["DR KIRAN KUMAR"],
    department: "Medical Oncology",
    oncall: true,
    slots: [],
    fee: 1000,
    practoPage: false,
  },
  {
    name: "Dr. Vijay Wadhwa",
    doctorId: "dr-vijay-wadhwa",
    aliases: ["DR VIJAY WADHWA"],
    department: "General Surgery",
    oncall: false,
    slots: [{ days: MON_SAT, time: "10:30 AM – 11:30 AM" }],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. Prakash Babu M N",
    doctorId: "dr-prakash-babu",
    aliases: ["DR PRAKASH BABU", "Dr. Prakash Babu"],
    department: "General & Laparoscopic Surgery",
    oncall: false,
    slots: [{ days: MON_SAT, time: "01:00 PM – 02:00 PM" }],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. G H Raju",
    doctorId: "dr-gh-raju",
    aliases: ["DR G H RAJU"],
    department: "General, Laparoscopic & Bariatric Surgery",
    oncall: false,
    slots: [
      { days: ["Tue", "Thu"], time: "05:00 PM – 06:00 PM" },
      { days: ["Sat"], time: "02:00 PM – 03:00 PM" },
    ],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. Koutarapu Chandrakant",
    doctorId: "dr-chandrakant-k",
    aliases: ["DR CHANDRAKANT K", "Dr. Chandrakant K"],
    department: "Gastroenterology",
    oncall: false,
    slots: [{ days: MON_SAT, time: "05:00 PM – 06:00 PM" }],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. Padma Sundaram",
    doctorId: "dr-padma-sundaram",
    aliases: ["DR PADMA SUNDARAM"],
    department: "Pulmonology",
    oncall: false,
    slots: [{ days: MON_SAT, time: "02:00 PM – 04:00 PM" }],
    fee: 1200,
    practoPage: true,
  },
  {
    name: "Dr. Sunita D'souza Lobo",
    doctorId: "dr-sunita-dsouza-lobo",
    aliases: ["DR SUNITA DSOUZA LOBO", "DR SUNITA D'SOUZA LOBO"],
    department: "Gynaecology & Obstetrics",
    oncall: false,
    slots: [{ days: MON_SAT, time: "04:30 PM – 06:15 PM" }],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. Prakruthi",
    doctorId: "dr-prakruthi-s",
    aliases: ["DR PRAKRUTHI S", "Dr. Prakruthi S"],
    department: "Urogynaecology",
    oncall: false,
    slots: [{ days: ["Tue", "Thu", "Sat"], time: "02:00 PM – 03:00 PM" }],
    fee: 1000,
    practoPage: false,
  },
  {
    name: "Dr. Mohini S Jadwani",
    doctorId: "dr-mohini-s-jadwani",
    aliases: ["DR MOHINI S JADWANI"],
    department: "Gynaecology & Obstetrics",
    oncall: false,
    // Sheet listed "10:00PM TO 11:00AM" — treated as 10:00 AM – 11:00 AM
    slots: [{ days: MON_SAT, time: "10:00 AM – 11:00 AM" }],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. Chaitra Shankar",
    doctorId: "dr-chaitra-shankar",
    aliases: ["DR CHAITRA SHANKAR"],
    department: "ENT (Otorhinolaryngology)",
    oncall: false,
    slots: [{ days: MON_SAT, time: "10:30 AM – 04:00 PM" }],
    fee: 1000,
    practoPage: false,
  },
  {
    name: "Dr. Cherin Josi",
    doctorId: "dr-cherin-josi-champannoor",
    aliases: ["DR CHERIN JOSI CHAMPANNOOR", "Dr. Cherin Josi Champannoor"],
    department: "Nephrology",
    oncall: false,
    slots: [{ days: ["Tue", "Fri"], time: "02:00 PM – 04:00 PM" }],
    fee: 1000,
    practoPage: false,
  },
  {
    name: "Dr. Sundeep V K",
    doctorId: "dr-sundeep-v-k",
    aliases: ["DR SUNDEEP V K"],
    department: "Neurosurgery & Neurointerventional Surgery",
    oncall: false,
    slots: [{ days: MON_SAT, time: "03:00 PM – 04:00 PM" }],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. Rohini Krishnamoorthy",
    doctorId: "dr-rohini-krishnamoorthy",
    aliases: ["DR ROHINI KRISHNAMOORTHY"],
    department: "Dermatology",
    oncall: false,
    slots: [{ days: ["Mon", "Thu", "Sat"], time: "05:00 PM – 06:00 PM" }],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. Deevish",
    doctorId: "dr-deevish-n-d",
    aliases: ["DR DEEVISH N D", "Dr. Deevish N D"],
    department: "Plastic Surgery",
    oncall: true, // Mon–Sat on-call (no fixed OPD hours)
    slots: [],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. Neha",
    doctorId: "dr-neha-chauhan",
    aliases: ["DR NEHA CHAUHAN", "Dr. Neha Chauhan"],
    department: "Plastic Surgery",
    oncall: false,
    slots: [{ days: ["Wed", "Sat"], time: "02:00 PM – 04:00 PM" }],
    fee: 1600,
    practoPage: true,
  },
  {
    name: "Dr. Vishruth K Raj",
    doctorId: "dr-vishruth-k",
    aliases: ["DR VISHRUTH K", "Dr. Vishruth K"],
    department: "Urology & Andrology",
    oncall: true,
    slots: [],
    fee: 1000,
    practoPage: true,
  },
  {
    name: "Dr. Anjana Kothamachu",
    doctorId: "dr-anjana-kothamachu",
    aliases: ["DR ANJANA KOTHAMACHU"],
    department: "Counselling Psychology",
    oncall: false,
    slots: [{ days: ["Sat"], time: "03:00 PM – 05:00 PM" }],
    fee: 2000,
    practoPage: false,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const nameCandidates = (schedule: DoctorSchedule): string[] => [
  schedule.name,
  ...(schedule.aliases ?? []),
];

/** Returns the schedule entry for a doctor name or medicalData name (fuzzy). */
export const getScheduleByName = (name: string): DoctorSchedule | undefined => {
  const needle = normalizeDoctorName(name);
  if (!needle) return undefined;

  // Exact normalized match against name or aliases
  const exact = doctorSchedules.find((d) =>
    nameCandidates(d).some((c) => normalizeDoctorName(c) === needle)
  );
  if (exact) return exact;

  // Partial match (handles Midhun/Mithun, name order differences)
  return doctorSchedules.find((d) =>
    nameCandidates(d).some((c) => {
      const hay = normalizeDoctorName(c);
      return hay.includes(needle) || needle.includes(hay);
    })
  );
};

/** Lookup by medicalData doctor.id */
export const getScheduleById = (id: string): DoctorSchedule | undefined =>
  doctorSchedules.find((d) => d.doctorId === id);

/** All OPD days for a schedule, deduplicated, in Mon→Sat order. */
export const allOpdDays = (schedule: DoctorSchedule): WeekDay[] => {
  const order: WeekDay[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const set = new Set<WeekDay>(schedule.slots.flatMap((s) => s.days));
  return order.filter((d) => set.has(d));
};

/** Human-readable OPD summary, e.g. "Tue, Thu, Fri · 11:00 AM – 02:00 PM". */
export const formatOpdSummary = (schedule: DoctorSchedule): string[] => {
  if (schedule.oncall) return ["On Call — team will confirm a convenient time"];
  return schedule.slots.map((slot) => `${slot.days.join(", ")} · ${slot.time}`);
};

/** Returns true if the given JS Date falls on one of the doctor's OPD days. */
export const isValidOpdDate = (schedule: DoctorSchedule, date: Date): boolean => {
  if (schedule.oncall) return true;
  const jsDay = date.getDay(); // 0=Sun … 6=Sat
  return schedule.slots.some((slot) =>
    slot.days.some((d) => DAY_NUMBER[d] === jsDay)
  );
};

/** Parse "11:00 AM" → minutes from midnight. */
const parseClockToMinutes = (raw: string): number | null => {
  const m = raw.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return null;
  let hours = parseInt(m[1], 10);
  const minutes = parseInt(m[2], 10);
  const period = m[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
};

/** Minutes from midnight → "11:00 AM". */
const minutesToClock = (total: number): string => {
  const hours24 = Math.floor(total / 60) % 24;
  const minutes = total % 60;
  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return `${String(hours12).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${period}`;
};

/**
 * Expand an OPD window like "11:00 AM – 02:00 PM" into 30-minute start times.
 * Last start is 30 minutes before the window end.
 */
export const expandOpdWindowToSlots = (
  window: string,
  intervalMinutes = 30
): string[] => {
  const parts = window.split(/\s*[–—-]\s*/);
  if (parts.length !== 2) return [window];
  const start = parseClockToMinutes(parts[0]);
  const end = parseClockToMinutes(parts[1]);
  if (start === null || end === null || end <= start) return [window];

  const slots: string[] = [];
  for (let t = start; t + intervalMinutes <= end; t += intervalMinutes) {
    slots.push(minutesToClock(t));
  }
  // Very short windows (e.g. exactly 30–60 min) still get at least the start time
  if (slots.length === 0) slots.push(minutesToClock(start));
  return slots;
};

/** OPD windows that apply on a given calendar date. */
export const opdWindowsForDate = (
  schedule: DoctorSchedule,
  date: Date
): OpdSlot[] => {
  if (schedule.oncall) return [];
  const jsDay = date.getDay();
  return schedule.slots.filter((slot) =>
    slot.days.some((d) => DAY_NUMBER[d] === jsDay)
  );
};

/**
 * Selectable appointment start times for a doctor on a given date (YYYY-MM-DD).
 * Returns [] for on-call / invalid days.
 */
export const availableTimeSlotsForDate = (
  schedule: DoctorSchedule,
  dateIso: string,
  intervalMinutes = 30
): string[] => {
  if (!dateIso || schedule.oncall) return [];
  const date = new Date(dateIso + "T00:00:00");
  if (Number.isNaN(date.getTime()) || !isValidOpdDate(schedule, date)) return [];

  const windows = opdWindowsForDate(schedule, date);
  const times = windows.flatMap((w) => expandOpdWindowToSlots(w.time, intervalMinutes));
  // Deduplicate while preserving order
  return [...new Set(times)];
};

/** Schedules matching any of the given doctor names (medicalData-safe). */
export const schedulesForDoctorNames = (names: string[]): DoctorSchedule[] => {
  const matched: DoctorSchedule[] = [];
  const seen = new Set<string>();
  for (const name of names) {
    const s = getScheduleByName(name);
    if (s && !seen.has(s.name)) {
      seen.add(s.name);
      matched.push(s);
    }
  }
  return matched;
};

/** Plain sorted name list — used as a fallback where only names are needed. */
export const doctorNameList: string[] = doctorSchedules.map((d) => d.name);
