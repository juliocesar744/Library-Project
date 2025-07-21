import Header from "@/components/layout/Header";
import { DataTable } from "@/components/table/DataTable";
import { AuthContext } from "@/contexts/AuthContext";
import { Role } from "@/enums/role";
import { PublishersList } from "@/types/types";
import { useContext, useEffect, useState } from "react";

const columns = [
  { key: "name", label: "Nome" },
];

export default function Publisher() {
    const [publishers, setPublishers] = useState<PublishersList[]>([]);
    const { user } = useContext(AuthContext);
    
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND}/publisherList`)
            .then((res) => res.json())
            .then(setPublishers);
    }, []);

    const handleEdit = (book: any) => {
        console.log("Editar:", book);
    };

    const handleDelete = (book: any) => {
        console.log("Excluir:", book);
    };

    return (
        <>
            <Header />
            <div className="flex flex-col items-center min-h-screen bg-gray-100 pt-4">
                <h1 className="text-2xl font-bold mb-4">Página de Editoras</h1>
                <p className="text-gray-600">Esta é a página de editoras.</p>
                 <DataTable
                    data={publishers}
                    columns={columns}
                    role={user?.role as Role}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </>
    );
}