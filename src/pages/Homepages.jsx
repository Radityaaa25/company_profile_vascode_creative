import Heroimage from '../assets/images/hero.svg';
import Aboutimage from '../assets/images/about.svg';

import Proyek1 from '../assets/images/proyek-1.webp';
import Proyek2 from '../assets/images/proyek-2.webp';
import Proyek3 from '../assets/images/proyek-3.webp';
import Proyek4 from '../assets/images/proyek-4.webp';
import Proyek5 from '../assets/images/proyek-5.webp';

const Homepages = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-24 pt-32">
          <div className="box">
            <h1 className='lg:text-5xl/tight text-3xl font-medium mb-7'>
              Selamat Datang di Company Profile Kami <span className='font-bold text-sky-400 underline'>Vascode Creative</span>
            </h1>
            <p className='text-base/8 mb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo incidunt placeat illo unde officia eos eius sunt provident. Necessitatibus, error!</p>
            <a href="#" className='bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full'>
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img src={Heroimage} alt="Hero Image" className='md:w-full w-[400px] mx-auto md:m-0' />
          </div>
        </div>
        
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32" id='about'>
          <div className="box md:order-1 order-2">
            <img src={Aboutimage} alt="About Image" className='lg:w-[500px] w-[400px] md:m-0 mx-auto' />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className='lg:text-5xl/tight text-3xl font-medium mb-7'>
              Selamat Datang di Company Profile Kami <span className='font-bold text-sky-400 underline'>Vascode Creative</span>
            </h1>
            <p className='text-base/loose'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo incidunt placeat illo unde officia eos eius sunt provident. Necessitatibus, error!</p>
          </div>
        </div>

        <div className="services pt-32" id='services'>
          <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-2'>Layanan</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <div className="service-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className='text-xl font-bold text-white mt-6 mb-2'>Service Name 1</h3>
              <p className='text-white text-base/loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quaerat laborum nobis doloribus neque expedita?</p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className='text-xl font-bold text-white mt-6 mb-2'>Service Name 2</h3>
              <p className='text-white text-base/loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quaerat laborum nobis doloribus neque expedita?</p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className='text-xl font-bold text-white mt-6 mb-2'>Service Name 3</h3>
              <p className='text-white text-base/loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quaerat laborum nobis doloribus neque expedita?</p>
            </div>
          </div>
        </div>

        <div className="proyek pt-32" id='proyek'>
          <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-2'>Proyek</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img src={Proyek1} alt="Proyek Image" className='w-full h-[220px]' />
              <h3 className='text-xl font-bold mt-6 mb-2'>Proyek Name 1</h3>
              <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus quia adipisci ad tempore libero!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek2} alt="Proyek Image" className='w-full h-[220px]' />
              <h3 className='text-xl font-bold mt-6 mb-2'>Proyek Name 2</h3>
              <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus quia adipisci ad tempore libero!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek3} alt="Proyek Image" className='w-full h-[220px]' />
              <h3 className='text-xl font-bold mt-6 mb-2'>Proyek Name 3</h3>
              <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus quia adipisci ad tempore libero!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek4} alt="Proyek Image" className='w-full h-[220px]' />
              <h3 className='text-xl font-bold mt-6 mb-2'>Proyek Name 4</h3>
              <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus quia adipisci ad tempore libero!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek5} alt="Proyek Image" className='w-full h-[220px]' />
              <h3 className='text-xl font-bold mt-6 mb-2'>Proyek Name 5</h3>
              <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus quia adipisci ad tempore libero!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepages