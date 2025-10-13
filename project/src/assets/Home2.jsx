import React from 'react';
import Company from '../assets/img/Company.jpg';

function Home2() {
  return (
    <div className="bg-stone-700 py-8 sm:py-16 md:py-24 lg:py-40">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl underline text-white text-center mb-8 sm:mb-12 md:mb-16">
        About Us
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-14 px-4 sm:px-8 md:px-16 lg:px-20 my-8 sm:my-12 md:my-20">
        <img
          className="w-full sm:w-3/4 md:w-[40vw] lg:w-[24vw] border-2 border-white object-cover rounded-md"
          src={Company}
          alt="Company"
          loading="lazy"
        />
        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mt-6 md:mt-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur iusto
          similique minus sit. Pariatur eaque voluptatem enim nobis explicabo, eum quia
          dolorem fugit facilis! Eius nam vitae quam accusantium nostrum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur, labore perferendis
          possimus ad dolore, expedita cumque ratione, fuga laboriosam blanditiis atque! A
          corrupti tempora quidem at ipsa unde quo omnis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Alias quasi itaque cum illum deserunt optio
          eveniet. Ullam officiis enim dolor neque sunt natus illo accusamus nemo quos
          voluptas! Similique, distinctio.
        </p>
      </div>
    </div>
  );
}

export default Home2;