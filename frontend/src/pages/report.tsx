import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Book } from "./books";
import Header from "@/components/layout/Header";
import { GenericForm } from "@/components/form/GenericForm";
import { z } from "zod";
import { AuthContext } from "@/contexts/AuthContext";
import { Role } from "@/enums/role";
import { ReportCreate, User } from "@/types/types";
import Button from "@/components/ui/Button";

const newReportSchema = z.object({
    user_id: z.string().optional(),
    book_no: z.string().optional(),
    returnDate: z.string().optional()
});

type NewReportData = z.infer<typeof newReportSchema>;

export default function Report() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { book_no } = router.query;


  const [book, setBook] = useState<Book>();
  const [users, setUsers] = useState<User[]>([]);

  const fieldsRegister: {
    name: keyof NewReportData;
    label: string;
    type?: "text" | "password" | "email" | "select" | "date";
    options?: {
      label: string;
      value: string;
    }[];
    }[] = [
      {
          name: "user_id",
          label: "Selecione o usuário",
          type: "select",
          options: users?.map((user) => ({
              label: user.username,
              value: user.user_id.toString(),
          })),
      },
      {
        name: "returnDate",
        label: "Selecione a data de devolução",
        type: "date",
      },
  ];

  const handleSubmit = async (data: NewReportData) => {
    const dataReport: ReportCreate = {
      user_id: parseInt(data.user_id ? data.user_id.toString() : "0"),
      book_no: parseInt(book_no ? book_no.toString() : "0"),
      returnDate: new Date(data.returnDate ? data.returnDate : new Date()),
    } 
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/reportCreate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataReport),
        });

    if (response.ok) {
        alert("Empréstimo realizado com sucesso!");
        router.push("/books");
    } else {
        alert("Erro ao tentar realizar o empréstimo.");
    }
  }


  useEffect(() => {
    if (book_no) {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND}/bookById/${book_no}`)
        .then((res) => res.json())
        .then(setBook);
    }

    if (user?.role === Role.ADMIN || user?.role === Role.STAFF) {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND}/userList`)
        .then((res) => res.json())
        .then(setUsers);
    }
  }, [book_no]);

  return (
    <div>
        <Header />
        <div className="w-full  p-4 ">
          <h1 className="text-2xl font-bold mb-4">Novo Empréstimo</h1>
        <div className="flex flex-col gap-2 border-1 border-gray-300 h-60 p-2 rounded-lg shadow-md bg-white items-center ">
          <p>Informações do Livro</p>
          <h2 className="text-xl font-bold truncate" title={book?.title}>{book?.title}</h2>
          <p className="text-lg truncate" title={book?.category}> Categoria: {book?.category}</p>
          <p className='text-lg'>Preço: R$ {book?.price?.toFixed(2)}</p>
          <p className='text-lg'>Edição: {book?.edition}</p>
          <p className='text-lg'>Ano de publicação: {book?.yearofpublication}</p>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <h2 className="text-lg font-semibold mb-2">Formulário de Empréstimo</h2>
          {user?.role === Role.ADMIN || user?.role === Role.STAFF ? (
            <GenericForm<NewReportData>
              schema={newReportSchema}
              onSubmit={handleSubmit}
              fields={fieldsRegister}
              formId="report-form"
            />
          ) : (
            <>
            </>
              // <GenericForm<NewReportData>
              //   schema={newReportSchema}
              //   onSubmit={}
              //   fields={[
              //       { name: "username", label: "Usuário" },
              //       { name: "password", label: "Senha", type: "password" }
              //   ]}-
              //   formId="login-form"
              // />
          )
          }
          <div className="flex gap-4">
            <Button type="submit" form="report-form">Enviar</Button>
            <Button>Cancelar</Button>
          </div>
          
        </div>
        </div>
    </div>
  );
}