"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react"; // Or use Lucide icons
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <div className="flex h-16 gap-4 items-end rounded-2xl bg-neutral-900 border border-neutral-800 px-4 pb-3 shadow-2xl backdrop-blur-md">
        {items.map((item) => (
          <IconContainer key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

function IconContainer({
  title,
  icon,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let mouseX = useMotionValue(Infinity);
  let [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative aspect-square rounded-full bg-neutral-800 flex items-center justify-center group transition-colors hover:bg-neutral-700 w-10 h-10"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-neutral-800 border border-neutral-700 text-white absolute left-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="text-neutral-400 group-hover:text-blue-400 transition-colors">
          {icon}
        </div>
      </motion.div>
    </Link>
  );
}
