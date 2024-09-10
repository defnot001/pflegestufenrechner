import { Link } from 'react-router-dom';
import { Github, FileText, Scale, User } from 'lucide-react';

export function MainHeader() {
  return (
    <header className='my-4'>
      <h1 className='text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>
        Pflegestufenrechner
      </h1>
      <p className='text-center text-gray-600 mb-4'>
        Tool zur Berechnung der Pflegestufe auf Basis des österreichischen Pflegegeldgesetzes.
      </p>
      <nav className='flex justify-center gap-x-3 flex-wrap'>
        <Link to='/about' className='flex items-center text-blue-600 hover:text-blue-800'>
          <FileText className='w-4 h-4 mr-1' />
          <span>Über uns</span>
        </Link>
        <Link to='/legal' className='flex items-center text-blue-600 hover:text-blue-800'>
          <Scale className='w-4 h-4 mr-1' />
          <span>Rechtliches</span>
        </Link>
        <Link to='/impressum' className='flex items-center text-blue-600 hover:text-blue-800'>
          <User className='w-4 h-4 mr-1' />
          <span>Impressum</span>
        </Link>
        <a
          href='https://github.com/defnot001/pflegestufenrechner'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-blue-600 hover:text-blue-800'
        >
          <Github className='w-4 h-4 mr-1' />
          <span>GitHub</span>
        </a>
      </nav>
    </header>
  );
}
