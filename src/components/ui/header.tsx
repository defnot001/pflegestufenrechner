import { Link } from 'react-router-dom';
import { FileText, Scale, User, HelpingHand } from 'lucide-react';

export function MainHeader() {
  return (
    <header className='my-4'>
      <h1 className='text-4xl font-bold text-center mb-4 bg-gradient-to-tr from-dw-400 to-dw-200 text-transparent bg-clip-text'>
        Pflegestufenrechner
      </h1>
      <p className='text-center text-gray-600 mb-4'>
        Tool zur Berechnung der Pflegestufe auf Basis des österreichischen Pflegegeldgesetzes.
      </p>
      <nav className='flex justify-center gap-x-3 flex-wrap'>
        <Link to='/about' className='flex items-center text-dw-300 hover:text-dw-400'>
          <HelpingHand className='w-4 h-4 mr-1' />
          <span>Hilfe</span>
        </Link>
        <Link to='/about' className='flex items-center text-dw-300 hover:text-dw-400'>
          <FileText className='w-4 h-4 mr-1' />
          <span>Über uns</span>
        </Link>
        <Link to='/legal' className='flex items-center text-dw-300 hover:text-dw-400'>
          <Scale className='w-4 h-4 mr-1' />
          <span>Rechtliches</span>
        </Link>
        <Link to='/impressum' className='flex items-center text-dw-300 hover:text-dw-400'>
          <User className='w-4 h-4 mr-1' />
          <span>Impressum</span>
        </Link>
      </nav>
    </header>
  );
}
