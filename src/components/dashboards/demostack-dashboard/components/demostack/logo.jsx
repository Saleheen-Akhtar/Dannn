import React from "react";

export function DemostackLogo({ className, ...props }) {
  return (
    <div className={`flex items-center gap-2.5 font-bold ${className || ""}`} {...props}>
      <div className="size-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-serif text-sm tracking-widest shadow-xs">
        YFB
      </div>
      <div className="flex flex-col leading-none text-left">
        <span className="font-serif tracking-wide text-sm font-semibold text-foreground">
          YASHMEEN
        </span>
        <span className="text-[0.62rem] tracking-wider text-muted-foreground uppercase font-mono">
          Executive Portal
        </span>
      </div>
    </div>
  );
}
