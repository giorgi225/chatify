import { clsx, type ClassValue } from "clsx"
import { FieldValues, UseFormReturn, Path } from "react-hook-form";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function setZodErrors<T extends FieldValues>(errors: Record<string, string[]>, form: UseFormReturn<T>) {
  Object.entries(errors).forEach(([field, errorMessages]) => {
    form.setError(field as Path<T>, {
      type: "manual",
      message: errorMessages[0],
    });
  });
}