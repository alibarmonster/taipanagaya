'use client';
import { Typography } from '@material-tailwind/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='relative w-full mt-20 bg-gray-100 p-2'>
      <div className='mx-auto w-full max-w-7xl px-8 '>
        <div className='grid grid-cols-1 justify-between gap-4 md:grid-cols-2'>
          <Typography
            variant='h5'
            className='mb-6'
          >
            Taipa Nagaya
          </Typography>
          <div className='grid grid-cols-3 justify-between gap-4'>
            <Typography>Contact</Typography>
            <Typography>Map</Typography>
            <Typography>About us</Typography>
          </div>
        </div>

        <div className='mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between'>
          <Typography
            variant='small'
            className='mb-4 text-center font-normal text-blue-gray-900 md:mb-0'
          >
            &copy; {currentYear} <a>alibarmonster</a>
          </Typography>

          <div className='flex gap-4 text-blue-gray-900 sm:justify-center'>
            <Typography
              as='a'
              href='https://www.instagram.com/alibarrs/'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <FaInstagram />
            </Typography>
            <Typography
              as='a'
              href='https://www.facebook.com/alief.akbar.9026'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <FaFacebook />
            </Typography>

            <Typography
              as='a'
              href='https://www.linkedin.com/in/alibarrs/'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <FaLinkedin />
            </Typography>

            <Typography
              as='a'
              href='https://twitter.com/soulkaiju'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <FaTwitter />
            </Typography>

            <Typography
              as='a'
              href='https://github.com/alibarmonster'
              className='opacity-80 transition-opacity hover:opacity-100'
            >
              <FaGithub />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
