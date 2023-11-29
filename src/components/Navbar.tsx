import { NAV_LINKS } from '@/types';
import { Button } from '@/material-ui/index';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='w-full h-20 relative mx-auto'>
      <div className='w-full h-full bg-slate-500 flex items-center justify-around'>
        <a
          href='/'
          className='text-2xl text-black font-bold p-2'
        >
          TaipaNagaya
        </a>

        <ul className='flex items-center justify-between gap-12'>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className='text-gray-800 font-[400] text-[16px] cursor-pointer transition-all hover:font-semibold'
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <Link href='/daftar'>
          <Button className='rounded-full'>Daftar</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
