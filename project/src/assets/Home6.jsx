import React from 'react';

const Home6 = () => {
  return (
    <div className="bg-[#262626] py-8 sm:py-10 md:py-12 lg:py-16">
      {/* Contact Us */}
      <div className="w-full pb-8 sm:pb-10 md:pb-12 lg:pb-14 px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-gray-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal italic text-center">
          Contact Us
        </h2>
        <hr className="w-48 sm:w-56 md:w-64 mx-auto border-gray-300 mt-2 sm:mt-3 md:mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 sm:gap-8 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="bg-black flex items-center py-6 sm:py-8 md:py-10">
          <div className="px-4 sm:px-5 md:px-6 lg:px-8">
            <h3 className="text-lg sm:text-xl md:text-2xl text-yellow-300 font-serif font-medium mb-3 sm:mb-4">
              CONTACT US FORM
            </h3>
            <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ea omnis
              expedita, quibusdam voluptate vero quaerat eaque nisi animi. Placeat sed
              minima voluptate suscipit accusantium magnam nemo eaque non ut, culpa nulla,
              consectetur nostrum, aliquam ipsam? Cumque sunt exercitationem harum, sint
              ducimus dolorem commodi impedit nostrum fugit, officia natus quam fugiat
              animi numquam dolor consequatur minus deleniti quia. Odio, fuga explicabo,
              fugit impedit reprehenderit consequuntur pariatur sapiente, tenetur magnam aut
              vero dolorem. Numquam voluptatibus nihil obcaecati dicta quisquam veniam saepe
              praesentium qui provident impedit, quasi inventore optio voluptatum autem
              dolorem assumenda, natus officiis! Perferendis illo a minima quae dignissimos
              quisquam!
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-white">
          <form className="flex flex-col space-y-4 sm:space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold text-sm sm:text-base md:text-lg mb-1">
                YOUR NAME :
              </label>
              <input
                type="text"
                className="w-full border border-gray-500 px-3 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base outline-none focus:border-gray-800 rounded-md"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold text-sm sm:text-base md:text-lg mb-1">
                EMAIL ADDRESS :
              </label>
              <input
                type="email"
                className="w-full border border-gray-500 px-3 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base outline-none focus:border-gray-800 rounded-md"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-semibold text-sm sm:text-base md:text-lg mb-1">
                MESSAGE :
              </label>
              <textarea
                rows="4 sm:rows-5"
                className="w-full border border-gray-500 px-3 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base outline-none focus:border-gray-800 rounded-md"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-32 sm:w-36 md:w-40 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 sm:py-2.5 md:py-3 px-4 rounded-md shadow-md transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home6;