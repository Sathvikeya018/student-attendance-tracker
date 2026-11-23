import { useState } from 'react';
import AttendanceCard from './AttendanceCard';
import './App.css';

const INITIAL_STUDENTS = [
  { id: 1, name: 'Aarav Sharma', rollNo: '22CS101', status: 'Not Marked' },
  { id: 2, name: 'Priya Patel', rollNo: '22CS102', status: 'Not Marked' },
  { id: 3, name: 'Rohan Verma', rollNo: '22CS103', status: 'Not Marked' },
  { id: 4, name: 'Sneha Reddy', rollNo: '22CS104', status: 'Not Marked' },
];

function App() {
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [submittedMsg, setSubmittedMsg] = useState('');

  const handleMarkAttendance = (id, newStatus) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, status: newStatus } : student
      )
    );
  };

  const handleSubmit = () => {
    const msg = 'Your attendance is updated! Starting a fresh attendance sheet.';
    setSubmittedMsg(msg);
    alert('Your attendance is updated!');
    setStudents(INITIAL_STUDENTS);
  };

  const presentCount = students.filter((s) => s.status === 'Present').length;
  const absentCount = students.filter((s) => s.status === 'Absent').length;
  const pendingCount = students.filter((s) => s.status === 'Not Marked').length;

  return (
    <div className="page-wrapper">
      <div className="dashboard">
        {/* Top Header */}
        <header className="top-bar">
          <div>
            <span className="tag">CS-301 • LAB ATTENDANCE</span>
            <h1>Student Attendance Portal</h1>
          </div>
          <button className="btn-reset-top" onClick={handleSubmit}>
            Submit &amp; Reset
          </button>
        </header>

        {/* Stats Strip */}
        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-label">TOTAL STUDENTS</span>
            <span className="stat-value">{students.length}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">PRESENT</span>
            <span className="stat-value">{presentCount}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">ABSENT</span>
            <span className="stat-value">{absentCount}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">PENDING</span>
            <span className="stat-value">{pendingCount}</span>
          </div>
        </div>

        {/* Confirmation Banner */}
        {submittedMsg && (
          <div className="toast-banner">
            <span>✓ {submittedMsg}</span>
            <button onClick={() => setSubmittedMsg('')}>✕</button>
          </div>
        )}

        {/* 2-Column Student Grid */}
        <div className="student-grid">
          {students.map((student) => (
            <AttendanceCard
              key={student.id}
              student={student}
              onMarkAttendance={handleMarkAttendance}
            />
          ))}
        </div>

        {/* Bottom Submit Action */}
        <div className="footer-action">
          <button className="btn-submit" onClick={handleSubmit}>
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;