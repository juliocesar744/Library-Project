import { CiLogout } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { IconButton } from "../ui/IconButton";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

export default function Header() {
    const { logout } = useContext(AuthContext);
    const router = useRouter();

    return (
        <header className="bg-white shadow">
            <div className="sm:px-6 lg:px-8">
                <div className="m-0  p-0 flex items-center justify-between h-8">
                    <h1 className="text-xl font-bold text-gray-900">Biblioteca</h1>
                    <div className="flex gap-1">
                       <IconButton icon={TbReportAnalytics} size={16} color="black" title="Empréstimos"/>
                       <IconButton icon={BsFillFileEarmarkPersonFill} size={16} color="black" title="Editoras"/>
                       <IconButton icon={FiUsers} size={16} color="black" title="Usuários"/>
                       <IconButton icon={FaBook} size={16} color="black" title="Livros"/>
                       <IconButton icon={CiLogout} size={16} color="black" title="Sair" onClick={logout}/>
                    </div>
                    
                </div>
            </div>
        </header>
    );
}