import type { ComponentType, ReactNode } from "react";

interface SectionHeadingProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  id?: string;
  trailing?: ReactNode;
}

export default function SectionHeading({
  icon: Icon,
  title,
  id,
  trailing,
}: SectionHeadingProps) {
  if (trailing) {
    return (
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500">
            <Icon className="w-5 h-5" />
          </div>
          <h2
            id={id}
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            {title}
          </h2>
        </div>
        {trailing}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500">
        <Icon className="w-5 h-5" />
      </div>
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
      >
        {title}
      </h2>
    </div>
  );
}