// انواع مربوط به برنامه کلاسی
export interface ClassSchedule {
  day: string;
  start: string;
  end: string;
  course: string;
  teacher: string;
  room: string;
}

// انواع مربوط به دانشجو
export interface Student {
  id: number;
  name: string;
  studentId: string;
  email?: string;
  phone?: string;
  avatar?: string;
}

// انواع مربوط به درس
export interface Course {
  id: number;
  name: string;
  code: string;
  teacher: string;
  credits: number;
}

// انواع مربوط به پیام
export interface Message {
  id: number;
  sender: string;
  subject: string;
  content: string;
  date: string;
  isRead: boolean;
}

// انواع مربوط به حضور و غیاب
export interface Attendance {
  studentId: number;
  sessionId: number;
  status: 'present' | 'absent' | 'late';
  date: string;
}

// انواع مربوط به جلسه
export interface Session {
  id: number;
  sessionNumber: number;
  courseId: number;
  date: string;
  topic: string;
  attendanceRecorded: boolean;
}

// انواع مربوط به استاد
export interface Teacher {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  avatar?: string;
}
