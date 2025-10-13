import React from 'react';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img5 from '../assets/img/img5.jpg';

const Home7 = () => {
  const projects = [
    'Software Development',
    'Web Development',
    'Transport Company',
    'Shopping Mall',
    '7 Star Hotels',
  ];

  return (
    <div className="bg-black text-white pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-sky-400 mb-3 sm:mb-4 md:mb-5">
            HURRAIRA SHAFQAT
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sapiente
            possimus blanditiis numquam nisi veritatis sint? Temporibus maxime inventore
            nam, harum officiis itaque eius, nobis numquam minima, fuga aspernatur dicta.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, nulla ratione
            velit deserunt suscipit atque error maxime deleniti veniam consectetur facilis,
            eius dicta distinctio aut asperiores! Ex nemo omnis expedita.
          </p>
        </div>

        {/* Middle */}
        <div className="mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic font-serif text-sky-400 mb-3 sm:mb-4 md:mb-5">
            PROJECTS
          </h2>
          <ul className="space-y-2 sm:space-y-3 list-disc list-inside text-gray-200 text-sm sm:text-base md:text-lg font-medium">
            {projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>

        {/* Right Side (Images) */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
          {[img1, img2, img3, img5].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Project image ${index + 1}`}
              className="w-full h-32 sm:h-40 md:h-48 lg:h-[20vh] object-cover border-2 border-white rounded-md"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-300 mt-8 sm:mt-10 md:mt-12 italic text-sm sm:text-base md:text-lg">
        Copyright ©️ 2025 All Rights Reserved. Design By{' '}
        <span className="text-sky-400 font-semibold">Hurraira Shafqat</span>
      </div>
    </div>
  );
};

export default Home7;