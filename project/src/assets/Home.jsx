import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import img1 from '/img1.jpg';
import img2 from '/img2.jpg';
import img3 from '/img3.jpg';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            src={img1}
            className="w-full h-full object-cover"
            alt="Slide 1"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            className="w-full h-full object-cover"
            alt="Slide 2"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            className="w-full h-full object-cover"
            alt="Slide 3"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>

      <motion.div
        className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 w-full text-center text-white z-10 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
          Khizar Shahal Technical
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-3 md:mt-4 drop-shadow-md">
          Please Like, Share & Subscribe
        </p>
      </motion.div>
    </div>
  );
};

export default Home;