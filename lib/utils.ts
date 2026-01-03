import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isMac() {
  return typeof navigator !== "undefined"
    ? navigator.userAgent.toLowerCase().includes("mac")
    : true;
}
