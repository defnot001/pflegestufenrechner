import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

export function ErrorPage() {
  return (
    <div className='mx-auto p-4 max-w-2xl flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>
        Seite nicht gefunden
      </h1>
      <p className='text-center text-gray-600 mb-8'>
        Leider konnte die angeforderte Seite nicht gefunden werden. Bitte überprüfen Sie die URL und
        versuchen Sie es erneut.
      </p>
      <Link to='/'>
        <Button className='w-full h-12 flex items-center justify-center space-x-2'>
          <Home className='h-5 w-5' />
          <span>Zur Startseite</span>
        </Button>
      </Link>
    </div>
  );
}
