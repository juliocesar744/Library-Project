import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

export type Book = {
    book_no: number;
    title: string;
    category: string;
    price: number;
    edition: string;
    yearofpublication: number;
};

export default function Books() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/bookList`);

        if (!response.ok) {
          throw new Error("Erro ao buscar livros");
        }

        const data = await response.json();

        setBooks(data);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleReport = (data: Book) => {
    router.push(`/report/?book_no=${data.book_no}`);
  }

  return (
    <div>
      <Header />
      <div className='flex flex-wrap gap-4 justify-between p-4'>
        {books.map((book) => (
            <div key={book.book_no} className="flex flex-col gap-1 border-1 border-gray-300 w-40 h-50 p-2 rounded-lg shadow-md bg-white">
              <h2 className="text-xl font-bold truncate" title={book.title}>{book.title}</h2>
              <p className="text-xs truncate" title={book.category}> Categoria: {book.category}</p>
              <p className='text-xs'>Preço: R$ {book.price.toFixed(2)}</p>
              <p className='text-xs'>Edição: {book.edition}</p>
              <p className='text-xs'>Ano de publicação: {book.yearofpublication}</p>
              <div className='flex flex-col gap-1 mt-2'>
                <Button size='sm' onClick={() => handleReport(book)}>Empréstimo</Button>
                <Button size='sm'>Comprar</Button>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}