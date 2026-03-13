import React from "react";

import { Code, Layout, Terminal } from "lucide-react";

// Defining an Interface for strict typing
interface Project {
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
  link: string;
  category: string;
}

export const projects = [
  {
    title: "Student Attendance Tracker",
    description: "Activity 1: Class instantiation and DOM manipulation logic.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400" />
    ),
    icon: <Code className="h-4 w-4 text-neutral-500" />,
    link: "/activities/attendance", // Path to the new page
    category: "Web Development",
  },
];
