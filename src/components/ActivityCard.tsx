// src/components/ActivityCard.tsx
import { motion } from "motion/react"; // Latest 2026 Motion naming
import Link from "next/link";

export const ActivityCard = ({
  title,
  date,
  description,
  href,
  status,
}: any) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-mono text-blue-400">{date}</span>
        <span
          className={`px-2 py-1 rounded-full text-[10px] ${status === "Complete" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}
        >
          {status}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-neutral-400 mt-2 text-sm line-clamp-2">
        {description}
      </p>
      <Link href={href} className="absolute inset-0" />
    </motion.div>
  );
};
