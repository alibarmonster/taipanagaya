import { Collapse, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface faqProps {
  judul: string;
  deskripsi: string;
}

const FaqComps = ({ judul, deskripsi }: faqProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <span
      onClick={toggleOpen}
      className='bg-gray-100 font-bold cursor-pointer w-1/2 p-4 shadow-lg mt-5'
    >
      <div className='text-black flex justify-between items-center h-8'>
        <h2>{judul}</h2>
        {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      <Collapse open={open}>
        <Typography className='font-thin mt-3'>{deskripsi}</Typography>
      </Collapse>
    </span>
  );
};

export default FaqComps;
