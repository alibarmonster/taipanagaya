import PricingEach from './pricingEach';

const Pricing = () => {
  return (
    <div className='min-h-screen bg-gray-100 overflow-auto'>
      <div className='container mx-auto w-full'>
        <div className='mt-10 text-center'>
          <h1 className='text-4xl font-bold text-gray-800'>Paket Kegiatan</h1>
          <p className='text-lg mt-3 font-semibold'>
            Nikmati keindahan taipa beach dengan paket kami
          </p>
        </div>
        <hr className='mt-10' />
        <div className='flex space-x-10 pt-10'>
          <PricingEach
            namaPaket='Paket Family'
            pricePaket='Rp150.000'
            textPaket='paket acara kumpul keluarga bersama karyawan, anggota organisasi ataupun keluarga dengan tema rekreasi dan diselingi dengan fun games ringan'
          />

          <PricingEach
            namaPaket='Paket Outbond'
            pricePaket='Rp175.000'
            textPaket='program kegiatan pembelajaran  dengan simulasi permainan kreatif yang menggabungkan integritas, fisik, dan mental untuk mencapai bounding team'
          />

          <PricingEach
            namaPaket='Outbond + Cottage'
            pricePaket='Rp425.000'
            textPaket='program kegiatan pembelajaran  dengan simulasi permainan kreatif yang menggabungkan integritas, fisik, dan mental untuk mencapai bounding team'
          />

          <PricingEach
            namaPaket='Outbond + Camping'
            pricePaket='Rp175.000'
            textPaket='program kegiatan pembelajaran  dengan simulasi permainan kreatif yang menggabungkan integritas, fisik, dan mental untuk mencapai bounding team'
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
