"use client";

import { useState } from "react";
import { Bookmark, X } from "lucide-react";

type JobCardProps = {
  title: string;
  location: string;
  employmentType: string;
  responsibilities: string[];
  isNew?: boolean;
  onApply?: () => void;
};

export default function JobCard({
  title,
  location,
  employmentType,
  responsibilities,
  isNew = true,
  onApply,
}: JobCardProps) {
  const [isHidden, setIsHidden] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (isHidden) return null;

  return (
    <article className="w-full rounded-[22px] border-2 border-[#E7E9EF] bg-white px-7 py-5 transition-colors duration-200 hover:border-[#D8DCE5] max-sm:px-5 max-sm:py-5">
      {/* Job details */}
      <div>
        <h3 className="text-[24px] leading-tight font-semibold tracking-[-0.025em] text-[#303744] max-sm:text-[21px]">
          {title}
        </h3>

        <p className="mt-2 text-[19px] leading-snug text-[#697386] max-sm:text-[16px]">
          {location}
        </p>

        <p className="mt-3 text-[18px] text-[#697386] max-sm:text-[16px]">
          {employmentType}
        </p>

        {/* Responsibilities */}
        <ul className="mt-5 list-disc space-y-1.5 pl-5 text-[16px] leading-[1.5] text-[#5E6879] marker:text-[#303744] max-sm:text-[14px]">
          {responsibilities.map((responsibility, index) => (
            <li key={`${index}-${responsibility}`}>
              <span className="pl-1">{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom actions */}
      <div className="mt-8 flex min-h-[38px] items-end justify-between gap-4 max-sm:mt-7 max-sm:flex-wrap">
        <div className="flex flex-wrap items-center gap-3">
          {isNew && (
            <span className="inline-flex min-h-[33px] items-center rounded-[11px] bg-[#E0F5EF] px-4 text-[14px] font-semibold text-[#26785D]">
              New to you
            </span>
          )}

          <button
            type="button"
            onClick={onApply}
            className="inline-flex min-h-[33px] items-center justify-center rounded-[11px] bg-[#E0F5EF] px-6 text-[14px] font-semibold text-[#365A50] transition-colors hover:bg-[#CDEDE3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26785D]"
          >
            Apply Now
          </button>
        </div>

        <div className="flex shrink-0 items-center gap-5 text-[#303744]">
          <button
            type="button"
            aria-label={isSaved ? "Remove saved job" : "Save job"}
            aria-pressed={isSaved}
            onClick={() => setIsSaved((saved) => !saved)}
            className="inline-flex items-center justify-center rounded-md p-1 transition-colors hover:bg-[#F2F4F7]"
          >
            <Bookmark
              size={21}
              strokeWidth={2}
              fill={isSaved ? "currentColor" : "none"}
            />
          </button>

          <button
            type="button"
            onClick={() => setIsHidden(true)}
            className="inline-flex items-center gap-2 rounded-md p-1 text-[17px] font-medium transition-colors hover:text-[#697386]"
            aria-label={`Hide ${title} job`}
          >
            <X size={19} strokeWidth={2} />
            <span>Hide</span>
          </button>
        </div>
      </div>
    </article>
  );
}
