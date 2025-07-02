import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { z } from "zod";
import { Role } from "@/enums/role";
import { GenericForm } from "@/components/form/GenericForm";
import Button from "@/components/ui/Button";


const loginSchema = z.object({
    username: z.string().min(3, { message: "Mín. 3 caracteres" }),
    password: z.string().min(3, { message: "Mín. 3 caracteres" })
});

const registerSchema = z.object({
    username: z.string().min(3, { message: "Mín. 3 caracteres" }),
    password: z.string().min(3, { message: "Mín. 3 caracteres" }),
    email: z.string().min(3, { message: "Mín. 3 caracteres" }),
    phone_no: z.string().min(3, { message: "Mín. 3 caracteres" }),
    address: z.string().min(3, { message: "Mín. 3 caracteres" }),
    role: z.nativeEnum(Role, {
        errorMap: () => ({ message: "Selecione um tipo válido de usuário" }),
    }),
});

type LoginData = z.infer<typeof loginSchema>;
type RegisterData = z.infer<typeof registerSchema>;

type LoginType = "login" | "register";

const roleOptions = Object.values(Role).map((role) => ({
    label: role,
    value: role,
}));

const fieldsRegister: {
  name: keyof RegisterData;
  label: string;
  type?: "text" | "password" | "email" | "select";
  options?: {
    label: string;
    value: string;
  }[];
}[] = [
    { name: "username", label: "Usuário", type: "text" },
    { name: "password", label: "Senha", type: "password" },
    { name: "email", label: "Email" },
    { name: "phone_no", label: "Telefone" },
    { name: "address", label: "Endereço" },
    {
        name: "role",
        label: "Tipo de usuário",
        type: "select",
        options: roleOptions,
    },
];

export default function Login() {
    const { login } = useContext(AuthContext);
    const [loginType, setLoginType] = useState<LoginType>("login");
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/books');
        }
    }, [isAuthenticated]);

    const handleSubmit = async (data: LoginData) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });

        const result = await response.json();

        if (response.ok && result.token) {
            login(result.token, result.user);
        } else {
            alert("Credenciais inválidas");
        }
    };

    const handleRegister = async (data: RegisterData) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/userCreate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });

        if (response.ok) {
            alert("Usuário registrado com sucesso!");
            setLoginType("login");
        } else {
            alert("Erro ao registrar usuário");
        }
    };

    const toggleLoginType = () => {
        setLoginType((prev) => (prev === "login" ? "register" : "login"));
    };


  return (
    <div className="flex flex-col items-center h-screen justify-center">
        <div className="flex flex-col items-center justify-center h-130 w-100 bg-gray-100 gap-1 border-2 border-gray-300 rounded-2xl shadow-lg p-4">
            <>Livraria do Juinho</>
            {
                loginType === "login" ? (
                    <div className="flex flex-col items-center justify-center gap-2">
                        <GenericForm<LoginData>
                            schema={loginSchema}
                            onSubmit={handleSubmit}
                            fields={[
                                { name: "username", label: "Usuário" },
                                { name: "password", label: "Senha", type: "password" }
                            ]}
                            formId="login-form"
                        />
                        <div className="w-full flex justify-between">
                            <Button type="submit" form="login-form">Enviar</Button>
                            <Button type="submit" variant="secondary" onClick={toggleLoginType}>Registrar</Button>
                        </div>
                        
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-2">
                        <GenericForm<RegisterData>
                            schema={registerSchema}
                            onSubmit={handleRegister}
                            fields={fieldsRegister}
                            formId="register-form"
                        />
                        <div className="w-full flex justify-between">
                            <Button type="submit" form="register-form">Enviar</Button>
                            <Button type="submit" variant="secondary" onClick={toggleLoginType}>Logar</Button>
                        </div>
                    </div>
                )
                
            }
            
        </div>
    </div>
  );
}
