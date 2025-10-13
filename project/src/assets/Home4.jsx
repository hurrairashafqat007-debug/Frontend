import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Home4 = () => {
  const services = [
    {
      plan: 'FREE',
      price: '$0.00 / Month',
      features: [
        { name: 'Get Information', available: true },
        { name: 'Service', available: false },
        { name: 'Package', available: false },
      ],
    },
    {
      plan: 'PROFESSIONAL',
      price: '$0.00 / Month',
      features: [
        { name: 'Get Information', available: true },
        { name: 'Service', available: true },
        { name: 'Package', available: true },
      ],
    },
    {
      plan: 'ENTERPRISE',
      price: '$0.00 / Month',
      features: [
        { name: 'Get Information', available: true },
        { name: 'Service', available: true },
        { name: 'Package', available: false },
      ],
    },
  ];

  return (
    <div className="bg-[#262626] px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Our Services */}
      <div className="w-full pb-8 sm:pb-10 md:pb-12 lg:pb-14">
        <h2 className="text-gray-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal italic text-center">
          Our Services
        </h2>
        <hr className="w-48 sm:w-56 md:w-64 mx-auto border-gray-300 mt-2 sm:mt-3 md:mt-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black border border-white w-full p-6 sm:p-8 md:p-10 shadow-2xl shadow-white/20 rounded-md"
          >
            <div className="bg-[#b0c4dd] w-full py-2 sm:py-3">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center tracking-wider italic">
                {service.plan}
              </h3>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6 sm:py-8 md:py-10 font-serif font-medium italic text-white text-center">
              Price
            </h2>

            <h4 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl italic tracking-wider text-center pb-6 sm:pb-8 border-b border-gray-300 mx-auto">
              {service.price}
            </h4>

            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed text-justify py-6 sm:py-8 md:py-10 italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis
              corrupti, accusantium consequatur reiciendis culpa facilis quasi libero
              voluptas amet, facere saepe delectus tempore et voluptatum adipisci, debitis
              repellendus? Mollitia.
            </p>

            <div className="w-full mx-auto space-y-4 sm:space-y-5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <p className="text-white text-base sm:text-lg md:text-xl font-medium font-serif">
                    {feature.name}
                  </p>
                  {feature.available ? (
                    <FaCheckCircle className="text-white text-lg sm:text-xl md:text-2xl" />
                  ) : (
                    <FaTimesCircle className="text-white text-lg sm:text-xl md:text-2xl" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home4;