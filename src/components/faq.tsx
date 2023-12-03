'use client';
import { Collapse, Typography } from '@material-tailwind/react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';
import FaqComps from './faqComps';

const FaqSection = () => {
  return (
    <>
      <div className='min-h-screen overflow-auto'>
        <div className='container mx-auto w-full'>
          <div className='flex items-center justify-center flex-col'>
            <div className='mt-10 text-center'>
              <h1 className='text-4xl font-bold text-gray-800'>Frequently Question Answer</h1>
              <p className='text-lg mt-3 font-semibold'>Pertanyaan yang sering ditanyakan</p>
            </div>
            <FaqComps
              judul='Apa yang membuat Taipa Beach istimewa?'
              deskripsi='Taipa Beach dikenal karena pantainya yang indah dengan pasir putih lembut dan air laut yang jernih. Selain itu, pemandangan alamnya yang menakjubkan dan keberadaan warung makanan lokal di sekitar pantai membuatnya menjadi tempat yang menarik untuk bersantai.'
            />
            <FaqComps
              judul='Apa yang membuat Taipa Beach istimewa?'
              deskripsi='Ya, banyak aktivitas yang bisa dilakukan di Taipa Beach. Beberapa di antaranya adalah berenang, snorkeling, berjemur di pantai, atau sekadar menikmati pemandangan sambil berjalan-jalan di sepanjang tepi pantai.'
            />
            <FaqComps
              judul=' Bagaimana akses ke Taipa Beach dari pusat kota Palu?'
              deskripsi='Anda dapat mencapai Taipa Beach dengan mobil pribadi atau taksi dari pusat kota Palu. Perjalanan biasanya memakan waktu sekitar 2 Jam tergantung pada lalu lintas. Terdapat juga transportasi umum seperti angkutan kota yang bisa digunakan untuk mencapai pantai ini.'
            />
            <FaqComps
              judul='Apakah ada fasilitas yang tersedia di sekitar Taipa Beach?'
              deskripsi='Di sekitar Taipa Beach terdapat warung makanan dan kios yang menyediakan makanan dan minuman ringan. Terdapat juga tempat penyewaan perlengkapan snorkeling atau peralatan olahraga air lainnya.'
            />
            <FaqComps
              judul='Bagaimana dengan keamanan di Taipa Beach?'
              deskripsi='Secara umum, Taipa Beach adalah tempat yang aman untuk dikunjungi. Namun, seperti di tempat wisata lainnya, disarankan untuk tetap mengawasi barang-barang berharga Anda dan memperhatikan kondisi air jika Anda berenang.'
            />
            <FaqComps
              judul='Apakah ada waktu terbaik untuk mengunjungi Taipa Beach?'
              deskripsi='Waktu terbaik untuk mengunjungi Taipa Beach adalah saat cuaca cerah dan tenang. Biasanya, bulan-bulan antara April hingga Oktober dianggap sebagai periode yang baik untuk menikmati pantai dengan cuaca yang menyenangkan.'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
