import React from "react";

interface HeaderProps {
  totalStudents: number;
  activeCount: number;
  inactiveCount: number;
}

// Task 8: Separate Header Component
// Task 7: Displays counts (total, active, inactive)

const Header: React.FC<HeaderProps> = ({
  totalStudents,
  activeCount,
  inactiveCount,
}) => {
  return (
    <header className="header">
      <div>
        <h1><u>Student Dashboard</u></h1>
        <br></br>
        <p><i>Track student performance and activity status...</i></p>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <h3>{totalStudents}</h3>
          <p>Total Students</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-box-active">{activeCount}</h3>
          <p className="stat-box-active">Active</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-box-inactive">{inactiveCount}</h3>
          <p className="stat-box-inactive">Inactive</p>
        </div>
      </div>
    </header>
  );
};

export default Header;