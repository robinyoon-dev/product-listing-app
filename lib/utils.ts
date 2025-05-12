import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * ### 여러 클래스를 하나의 문자열로 병합하는 함수
 * - shadcn/ui 에서 제공하는 함수
 *
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
