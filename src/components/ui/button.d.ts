declare module "@/components/ui/button" {
  import { ButtonHTMLAttributes } from "react";

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
    size?: string;
  }

  export const Button: React.FC<ButtonProps>;
} 