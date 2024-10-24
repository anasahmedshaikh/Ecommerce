import { clsx, type ClassValue } from "clsx"
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
  size: string;
  color: string;
  quantity: number;
}
export interface TypeProduct {
  id: number
  name: string
  price: number
  oldPrice?: number
  rating: number
  image: string
  category: string
}