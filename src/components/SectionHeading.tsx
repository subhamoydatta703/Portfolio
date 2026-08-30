
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  id?: string;
  trailing?: ReactNode;
}

export default function SectionHeading({
  title,
  id,
  trailing,
}: SectionHeadingProps) {
  if (trailing) {
    return (
      <div className="flex items-center justify-between mb-8">
        <h2
          id={id}
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
        >
          {title}
        </h2>

        {trailing}
      </div>
    );
  }

  return (
    <h2
      id={id}
      className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8"
    >
      {title}
    </h2>
  );
}

