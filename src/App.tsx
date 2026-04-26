import React from "react";
import StudentList from "./components/StudentList";
import "./App.css";

// Student interface (used as Props across components)
export interface Student {
  id: number;
  name: string;
  grade: number;
  isActive: boolean;
  major: string;
  email: string;
}

// Sample dataset (Requirement: minimum 10 students)
const studentsData: Student[] = [
  { id: 1, name: "Anna", grade: 90, isActive: true, major: "Business", email: "anna@example.com" },
  { id: 2, name: "John", grade: 70, isActive: false, major: "Finance", email: "john@example.com" },
  { id: 3, name: "Maria", grade: 85, isActive: true, major: "Marketing", email: "maria@example.com" },
  { id: 4, name: "Sam", grade: 60, isActive: true, major: "Accounting", email: "sam@example.com" },
  { id: 5, name: "Liam", grade: 78, isActive: false, major: "Economics", email: "liam@example.com" },
  { id: 6, name: "Sophia", grade: 92, isActive: true, major: "Computer Science", email: "sophia@example.com" },
  { id: 7, name: "Noah", grade: 74, isActive: false, major: "Management", email: "noah@example.com" },
  { id: 8, name: "Olivia", grade: 88, isActive: true, major: "Supply Chain", email: "olivia@example.com" },
  { id: 9, name: "James", grade: 67, isActive: true, major: "HR", email: "james@example.com" },
  { id: 10, name: "Emma", grade: 95, isActive: true, major: "Data Science", email: "emma@example.com" },
  { id: 11, name: "Daniel", grade: 72, isActive: false, major: "Business Analytics", email: "daniel@example.com" },
  { id: 12, name: "Ava", grade: 81, isActive: true, major: "Communications", email: "ava@example.com" }
];

function App() {
  return (
    <div className="app-container">
      {/* Task 1: Passing student data as props */}
      <StudentList students={studentsData} />
    </div>
  );
}

export default App;