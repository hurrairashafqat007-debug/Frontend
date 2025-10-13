import React from 'react';
import elon from '../assets/img/elon.jpg';
import md from '../assets/img/MD.jpg';
import ceo from '../assets/img/VCEO.jpg';

const Home5 = () => {
  const teamMembers = [
    {
      img: elon,
      name: 'Elon Musk',
      title: 'CEO & Founder',
      role: 'Web Developer & Programmer',
    },
    {
      img: ceo,
      name: 'Hira Virk',
      title: 'VCEO & Planner',
      role: 'IT Expert',
    },
    {
      img: md,
      name: 'Mahrukh Jutt',
      title: 'Managing Director',
      role: 'Web Designer',
    },
  ];

  return (
    <div className="bg-[#262626] px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full pb-8 sm:pb-10 md:pb-14">
        <h2 className="text-gray-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal italic text-center">
          Our Team
        </h2>
        <hr className="w-40 sm:w-48 md:w-60 mx-auto border-gray-300 mt-2 sm:mt-3 md:mt-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mx-auto w-full max-w-7xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-black w-full border-4 sm:border-6 md:border-8 border-double border-white hover:border-dashed hover:border-2 hover:scale-105 transition duration-500 ease-in-out"
          >
            <div className="relative group w-full h-48 sm:h-56 md:h-64 lg:h-[40vh] overflow-hidden">
              <img
                src={member.img}
                className="w-full h-full object-cover"
                alt={`${member.name} portrait`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"></div>
            </div>
            <div className="text-center py-4 sm:py-5">
              <h4 className="text-lg sm:text-xl md:text-2xl text-purple-300 font-serif font-semibold tracking-wider italic">
                {member.name}
              </h4>
              <h5 className="text-base sm:text-lg md:text-xl text-white italic tracking-wider font-medium mt-1 sm:mt-2">
                {member.title}
              </h5>
              <h6 className="text-sm sm:text-base md:text-lg text-orange-500 tracking-wider font-medium mt-1 sm:mt-2 pb-3">
                {member.role}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home5;