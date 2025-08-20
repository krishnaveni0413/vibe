import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//cn class here used to add and marge the tailwin classes dynamically

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
