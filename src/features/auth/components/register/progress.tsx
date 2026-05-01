"use client";

import { cn } from "@/shared/lib/utils/tailwind-cn";
import { Fragment, useEffect, useState } from "react";

// const STEP_COUNT = 4;
const BRAND = "#155dfc";
const BRAND_SOFT = "rgba(21, 93, 252, 0.22)";

type RegisterProgressProps = {
  /** 1-based current step (1–4). */
  currentStep: number;
  className?: string;
  /** When false, the bar jumps to `currentStep` without stepping animation. */
  animate?: boolean;
  stepCount: number;
};

export default function RegisterProgress({
  currentStep,
  className,
  animate = true,
  stepCount,
}: RegisterProgressProps) {
  const STEP_COUNT = stepCount;
  const target = Math.min(Math.max(currentStep, 1), STEP_COUNT);
  const [visualStep, setVisualStep] = useState(animate ? 1 : target);

  useEffect(() => {
    if (!animate) {
      setVisualStep(target);
      return;
    }
    if (visualStep === target) return;
    const id = window.setTimeout(() => {
      setVisualStep((v) => v + Math.sign(target - v));
    }, 420);
    return () => window.clearTimeout(id);
  }, [animate, target, visualStep]);

  return (
    <div
      className={cn("w-full mb-5", className)}
      role="group"
      aria-label={`Registration progress, step ${visualStep} of ${STEP_COUNT}`}
    >
      <div className="flex w-full max-w-md items-center">
        {Array.from({ length: STEP_COUNT }, (_, i) => {
          const step = i + 1;
          const isDone = visualStep > step;
          const isCurrent = visualStep === step;
          const isUpcoming = visualStep < step;

          return (
            <Fragment key={step}>
              <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                {isCurrent && (
                  <div
                    className="absolute inset-0 scale-100 transition-all duration-500 ease-out"
                    style={{
                      background: BRAND_SOFT,
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                    aria-hidden
                  />
                )}
                <div
                  className={cn(
                    "relative z-1 transition-all duration-500 ease-out",
                    "h-3.5 w-3.5 rotate-45 rounded-[2px]",
                    isDone && "scale-100 shadow-sm",
                    isCurrent && "scale-110 shadow-md",
                    isUpcoming && "scale-100",
                  )}
                  style={{
                    background: isDone || isCurrent ? BRAND : "transparent",
                    border: `2px solid ${BRAND}`,
                    boxShadow: isCurrent
                      ? "0 0 0 6px rgba(21, 93, 252, 0.12)"
                      : undefined,
                  }}
                />
              </div>

              {i < STEP_COUNT - 1 && <Connector filled={visualStep > step} />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function Connector({ filled }: { filled: boolean }) {
  return (
    <div
      className="relative mx-1 min-h-[2px] min-w-[8px] flex-1 self-center"
      aria-hidden
    >
      <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 overflow-hidden rounded-full">
        <div
          className="h-[2px] w-full rounded-full"
          style={{
            background: `repeating-linear-gradient(90deg, ${BRAND} 0px, ${BRAND} 5px, transparent 5px, transparent 9px)`,
          }}
        />
        <div
          className="absolute inset-y-0 left-0 top-0 rounded-full bg-[#155dfc] transition-[width] duration-700 ease-out"
          style={{ width: filled ? "100%" : "0%" }}
        />
      </div>
    </div>
  );
}
