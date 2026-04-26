import React, { useState } from "react";
import type { Student } from "../App";
import StudentCard from "./StudentCard";
import Header from "./Header";
import FilterPanel from "./FilterPanel";

interface Props {
  students: Student[];
}

// Task 1: Display list using map()
// Task 5: Filtering using filter()
// Task 6: Search functionality
// Task 7: Display counts
// Task 8: Component structure

const StudentList: React.FC<Props> = ({ students }) => {

  // State for search input (Task 6)
  const [searchTerm, setSearchTerm] = useState<string>("");

  // State for filter dropdown (Task 5)
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Task 7: Count calculations
  const totalStudents = students.length;
  const activeCount = students.filter((student) => student.isActive).length;
  const inactiveCount = students.filter((student) => !student.isActive).length;

  // Task 5: Filter by active/inactive
  const filteredByStatus = students.filter((student) => {
    if (statusFilter === "active") return student.isActive;
    if (statusFilter === "inactive") return !student.isActive;
    return true;
  });

  // Task 6: Search filter by name
  const filteredStudents = filteredByStatus.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      {/* Task 7: Header shows counts */}
      <Header
        totalStudents={totalStudents}
        activeCount={activeCount}
        inactiveCount={inactiveCount}
      />

      {/* Task 5 & 6: Filter + Search Panel */}
      <FilterPanel
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <br></br>
      <h2><b>Student List</b></h2>

      {/* Task 1: map() to render list */}
      {filteredStudents.length > 0 ? (
        <div className="student-grid">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default StudentList;