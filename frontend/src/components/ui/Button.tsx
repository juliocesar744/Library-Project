import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

const sizeClasses = {
  sm: "flex text-sm size-sm align-center justify-center",
  md: "px-4 py-2 text-base size-md",
  lg: "px-6 py-3 text-lg size-lg",
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    isLoading = false,
    ...rest
}: ButtonProps) {
    const baseClass =
        "p-1 rounded font-semibold transition-colors disabled:opacity-50 cursor-pointer ";
    const variantClass = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button
            className={classNames(baseClass, variantClass[variant], sizeClasses[size])}
            disabled={isLoading || rest.disabled}
            {...rest}
        >
            {isLoading ? "Carregando..." : children}
        </button>
    );
}