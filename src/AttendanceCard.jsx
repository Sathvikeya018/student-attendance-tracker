function AttendanceCard({ student, onMarkAttendance }) {
  return (
    <div className="attendance-card">
      <div className="card-top">
        <div>
          <h3>{student.name}</h3>
          <span className="roll-no">{student.rollNo}</span>
        </div>
        <span className={`status-pill ${student.status.toLowerCase().replace(' ', '-')}`}>
          {student.status}
        </span>
      </div>

      <div className="card-actions">
        <button
          className={`btn-action ${student.status === 'Present' ? 'selected-present' : ''}`}
          onClick={() => onMarkAttendance(student.id, 'Present')}
        >
          Present
        </button>
        <button
          className={`btn-action ${student.status === 'Absent' ? 'selected-absent' : ''}`}
          onClick={() => onMarkAttendance(student.id, 'Absent')}
        >
          Absent
        </button>
      </div>
    </div>
  );
}

export default AttendanceCard;