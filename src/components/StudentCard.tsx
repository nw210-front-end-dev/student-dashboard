import React from "react";
import type { Student } from "../App";

interface Props {
  student: Student;
}

// Task 2: Props used to pass student data
// Task 3: JSX function for Passed/Failed
// Task 4: Conditional rendering for Active/Inactive
// Pure Component using React.memo()

const StudentCard: React.FC<Props> = React.memo(({ student }) => {

  // Task 3: JSX helper function
  const getResult = (grade: number): string => {
    return grade >= 75 ? "Passed" : "Failed";
  };

  return (
    <div className="student-card">
      <h3><u>{student.name}</u></h3>

      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Major:</strong> {student.major}</p>

      <p><strong>Grade:</strong> {student.grade}</p>

      {/* Task 3: Display result using function */}
      <p>
        <strong>Result:</strong>{" "}
        <span className={student.grade >= 75 ? "passed" : "failed"}>
          {getResult(student.grade)}
        </span>
      </p>

      {/* Task 4: Conditional rendering */}
      <p>
        <strong>Status:</strong>{" "}
        <span className={student.isActive ? "active" : "inactive"}>
          {student.isActive ? "Active" : "Inactive"}
        </span>
      </p>
    </div>
  );
});

export default StudentCard;