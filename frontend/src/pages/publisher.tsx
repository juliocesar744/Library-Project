import Header from "@/components/layout/Header";

export default function Publisher() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Página de Editoras</h1>
                <p className="text-gray-600">Esta é a página de editoras.</p>
            </div>
        </>
    );
}