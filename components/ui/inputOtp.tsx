"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputOTPProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  maxLength?: number;
  value?: string;
  onChange?: (value: string) => void;
  /** If true, separates the input into two visual groups (e.g., 3 and 3 for a 6-digit code) */
  grouped?: boolean; 
}

const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
  ({ className, maxLength = 6, value = "", onChange, grouped = false, disabled, ...props }, ref) => {
    const [otp, setOtp] = React.useState<string[]>(Array(maxLength).fill(""));
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    // Sync external value to internal state
    React.useEffect(() => {
      if (value) {
        const newValue = value.split("").slice(0, maxLength);
        while (newValue.length < maxLength) newValue.push("");
        setOtp(newValue);
      }
    }, [value, maxLength]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const val = e.target.value;
      if (!val) return; // Handled by keyDown

      // Only take the last character typed to handle rapid typing
      const char = val.slice(-1);
      
      const newOtp = [...otp];
      newOtp[index] = char;
      setOtp(newOtp);
      onChange?.(newOtp.join(""));

      // Auto-advance
      if (index < maxLength - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === "Backspace") {
        e.preventDefault();
        const newOtp = [...otp];
        
        // If current slot has a value, clear it. Otherwise, clear previous and move back.
        if (otp[index]) {
          newOtp[index] = "";
          setOtp(newOtp);
          onChange?.(newOtp.join(""));
        } else if (index > 0) {
          newOtp[index - 1] = "";
          setOtp(newOtp);
          onChange?.(newOtp.join(""));
          inputRefs.current[index - 1]?.focus();
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < maxLength - 1) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text/plain").trim().slice(0, maxLength);
      if (!pastedData) return;

      const newOtp = [...otp];
      for (let i = 0; i < pastedData.length; i++) {
        newOtp[i] = pastedData[i];
      }
      setOtp(newOtp);
      onChange?.(newOtp.join(""));

      // Focus the next empty input, or the last one if full
      const nextIndex = Math.min(pastedData.length, maxLength - 1);
      inputRefs.current[nextIndex]?.focus();
    };

    const renderSlot = (index: number) => (
      <input
        key={index}
        ref={(el) => { inputRefs.current[index] = el; }}
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        pattern="\d{1}"
        maxLength={2} // Allows catching rapid typing before slicing
        value={otp[index]}
        onChange={(e) => handleChange(e, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        onPaste={handlePaste}
        disabled={disabled}
        className={cn(
          "flex h-12 w-10 items-center justify-center text-center text-lg font-semibold transition-all",
          "border-y border-r border-primary/20 bg-background text-foreground first:border-l",
          "first:rounded-l-md last:rounded-r-md",
          "hover:bg-muted/30",
          "focus:z-10 focus:outline-none focus-ring focus:ring-2 focus:ring-primary/40 focus:border-primary",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50",
          // Fix border overlapping for middle items
          "[&:not(:first-child)]:-ml-[1px]"
        )}
        {...props}
      />
    );

    const midpoint = Math.ceil(maxLength / 2);

    return (
      <div ref={ref} className={cn("flex items-center gap-2", className)}>
        {grouped && maxLength > 3 ? (
          <>
            <div className="flex items-center">
              {Array.from({ length: midpoint }).map((_, i) => renderSlot(i))}
            </div>
            <div className="text-muted-foreground opacity-50 font-black">-</div>
            <div className="flex items-center">
              {Array.from({ length: maxLength - midpoint }).map((_, i) => renderSlot(i + midpoint))}
            </div>
          </>
        ) : (
          <div className="flex items-center">
            {Array.from({ length: maxLength }).map((_, i) => renderSlot(i))}
          </div>
        )}
      </div>
    );
  }
)
InputOTP.displayName = "InputOTP"

export { InputOTP }