import React from "react";

interface FilterPanelProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  statusFilter: string;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
}

// Task 8: Separate FilterPanel Component
// Task 6: Search functionality
// Task 5: Filter students by active/inactive

const FilterPanel: React.FC<FilterPanelProps> = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <div className="filter-panel">
      {/* Task 6: Search Input */}
      <div className="filter-group">
        <label>Search by Name</label>
        <input
          type="text"
          placeholder="Enter student name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Task 5: Status Filter */}
      <div className="filter-group">
        <label>Filter by Status</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Students</option>
          <option value="active">Active Students</option>
          <option value="inactive">Inactive Students</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;