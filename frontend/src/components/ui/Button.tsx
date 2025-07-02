import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "danger";
    isLoading?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    isLoading = false,
    ...rest
}: ButtonProps) {
    const baseClass =
        "px-4 py-2 rounded font-semibold transition-colors disabled:opacity-50 cursor-pointer";
    const variantClass = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button
            className={classNames(baseClass, variantClass[variant])}
            disabled={isLoading || rest.disabled}
            {...rest}
        >
            {isLoading ? "Carregando..." : children}
        </button>
    );
}