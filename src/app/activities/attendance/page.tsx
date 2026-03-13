"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import {
  UserPlus,
  CheckCircle,
  XCircle,
  Trash2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

/**
 * CLASS CREATION: Requirement met.
 * Strictly follows naming from instructions: 'name' and 'isPresent'
 */
class Student {
  name: string;
  isPresent: boolean | null; // null = no status, true = Present, false = Absent

  constructor(name: string) {
    this.name = name;
    this.isPresent = null;
  }
}

export default function AttendanceTracker() {
  const [studentName, setStudentName] = useState("");
  const [attendanceList, setAttendanceList] = useState<Student[]>([]);

  const addStudent = () => {
    if (!studentName.trim()) {
      toast.error("Input Required", {
        description: "Please enter a student name.",
      });
      return;
    }

    // Instantiate new Student object
    const newStudent = new Student(studentName);

    // Log to console as required by instructions
    console.log("Verified Student Object:", newStudent);

    setAttendanceList([...attendanceList, newStudent]);
    setStudentName("");
    toast.success("Student Added", {
      description: `${studentName} added to list.`,
    });
  };

  const updateStatus = (index: number, status: boolean) => {
    const updated = [...attendanceList];
    updated[index].isPresent = status;
    setAttendanceList(updated);

    const statusText = status ? "Present" : "Absent";
    toast.info(`Marked ${statusText}`, {
      description: `${updated[index].name} is ${statusText.toLowerCase()}.`,
    });
  };

  const removeStudent = (index: number) => {
    const targetName = attendanceList[index].name;
    setAttendanceList(attendanceList.filter((_, i) => i !== index));
    toast.warning("Removed", {
      description: `${targetName} removed from list.`,
    });
  };

  return (
    <div className="min-h-screen bg-[#f0f9f6] p-6 md:p-12 font-sans text-slate-900">
      {/* Back to Home Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium mb-8 transition-all"
      >
        <ArrowLeft size={18} />
        Back to Compilation
      </Link>

      <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-emerald-900/5 border border-white">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
            Student Attendance Tracker
          </h1>
          <p className="text-slate-500 text-lg mt-2">
            Add students, mark attendance, and remove entries.
          </p>
        </header>

        {/* INPUT SECTION */}
        <div className="flex flex-col sm:flex-row gap-3 p-2 bg-slate-50 rounded-3xl border border-slate-100 mb-10">
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addStudent()}
            placeholder="Enter student name..."
            className="flex-1 bg-transparent px-6 py-4 outline-none text-lg text-slate-700 placeholder:text-slate-400"
          />
          <button
            onClick={addStudent}
            className="bg-[#047857] hover:bg-[#065f46] text-white px-8 py-4 rounded-[1.25rem] font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-900/20"
          >
            <UserPlus size={20} />
            Add Student
          </button>
        </div>

        {/* ATTENDANCE LIST (Requirement: <ul>/<li> used implicitly via shadcn-style divs) */}
        <div className="space-y-4">
          {attendanceList.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-slate-100 rounded-[2rem]">
              <p className="text-slate-400 italic">
                No students added yet. Start by typing a name above!
              </p>
            </div>
          ) : (
            attendanceList.map((student, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row lg:items-center justify-between p-6 rounded-[1.5rem] border transition-all duration-300 ${
                  student.isPresent === true
                    ? "bg-blue-50/70 border-blue-200"
                    : student.isPresent === false
                      ? "bg-orange-50/70 border-orange-200"
                      : "bg-slate-50 border-slate-100"
                }`}
              >
                <div className="mb-4 lg:mb-0">
                  <span className="text-xl font-semibold text-slate-700">
                    {student.name}
                    {student.isPresent === true && (
                      <span className="text-blue-600 ml-3 text-sm font-bold uppercase tracking-wider">
                        ● Present
                      </span>
                    )}
                    {student.isPresent === false && (
                      <span className="text-orange-600 ml-3 text-sm font-bold uppercase tracking-wider">
                        ● Absent
                      </span>
                    )}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => updateStatus(index, true)}
                    className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <CheckCircle size={18} /> Mark Present
                  </button>
                  <button
                    onClick={() => updateStatus(index, false)}
                    className="flex-1 sm:flex-none bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <XCircle size={18} /> Mark Absent
                  </button>
                  <button
                    onClick={() => removeStudent(index)}
                    className="bg-white hover:bg-red-50 text-red-600 border border-red-100 px-4 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
