import { IconType } from "react-icons";

type IconButtonProps = {
    icon: IconType; // aqui, usamos o tipo do componente, não do JSX
    size?: number;
    color?: string;
    onClick?: () => void;
    title?: string; //
};

export function IconButton({ icon: Icon, size = 24, color = "black", onClick, title = "" }: IconButtonProps) {
    return (
        <button onClick={onClick} className="cursor-pointer p-1 rounded hover:bg-gray-200 transition-colors" title={title}>
            <Icon size={size} color={color} />
        </button>
    );
}
