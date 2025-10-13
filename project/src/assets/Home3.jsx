import React from 'react';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';
import img6 from '../assets/img/img6.jpg';
import img7 from '../assets/img/img7.jpg';
import img8 from '../assets/img/img8.jpg';
import img9 from '../assets/img/img9.jpg';

const Home3 = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="bg-stone-500 min-h-screen">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl underline text-white text-center py-6 sm:py-8 md:py-10">
        IMAGE GALLERY
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10">
        {images.map((img, index) => (
          <img
            key={index}
            className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-md shadow-md"
            src={img}
            alt={`Gallery image ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Home3;