import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated);
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h1>Área Protegida</h1>
    </div>
  );
}