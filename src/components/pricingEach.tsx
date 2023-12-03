interface paketProps {
  namaPaket: string;
  pricePaket: string;
  textPaket: string;
}

const PricingEach = ({ namaPaket, pricePaket, textPaket }: paketProps) => {
  return (
    <div className='py-12'>
      <div className='bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer'>
        <div className='px-8 flex justify-between items-center'>
          <h1 className='text-xl font-bold text-gray-800'>{namaPaket}</h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-700'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
        <h1 className='text-4xl text-center font-bold'>{pricePaket}</h1>
        <p className='px-4 text-center text-sm '>{textPaket}</p>
        <ul className='text-center'>
          <li>
            <a
              href='#'
              className='font-semibold'
            >
              It is a long established
            </a>
          </li>
          <li>
            <a
              href='#'
              className='font-semibold'
            >
              It is a long established
            </a>
          </li>
          <li>
            <a
              href='#'
              className='font-semibold'
            >
              It is a long established
            </a>
          </li>
        </ul>
        <div className='text-center bg-gray-200 '>
          <button className='inline-block my-6 font-bold text-gray-800'>Pesan Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default PricingEach;
