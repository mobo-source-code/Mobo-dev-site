import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 mt-20 rounded-lg space-y-5 md:space-y-16">
      <div className="flex flex-col justify-center md:flex-row space-x-0 space-y-5 md:space-x-32">
        <div className="flex items-center p-3 bg-gray-200 rounded-lg justfiy-center w-80 h-100 space-x-5">
          <Image
            alt="e-commerce website CEO"
            src="https://treurgia.sirv.com/mobo_pics/rach.png"
            height={70}
            width={70}
            className="rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <h2 className="font-bold font-head text-md">
              Rachid, CEO Megazone
            </h2>
            <p className="text-sm text-gray-600 font-text">
              some text here that proves how great i am...
            </p>
          </div>
        </div>

        <div className="flex items-center p-3 bg-gray-200 rounded-lg justfiy-center w-80 h-100 space-x-5">
          <Image
            alt="e-commerce website CEO"
            src="https://treurgia.sirv.com/mobo_pics/az.png"
            height={70}
            width={70}
            className="rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <h2 className="font-bold font-head text-md">Aziz, CEO of Mexico</h2>
            <p className="text-sm text-gray-600 font-text">
              some text here that proves how great i am...
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-10">
        <div className="flex items-center p-3 bg-gray-200 rounded-lg space-x-3 justfiy-center w-80 h-100">
          <Image
            alt="e-commerce website CEO"
            src="https://treurgia.sirv.com/mobo_pics/souf.png"
            height={70}
            width={70}
            className="rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <h2 className="font-bold font-head text-md">
              Soufiane, CEO SKMarketing
            </h2>
            <p className="text-sm text-gray-600 font-text">
              some text here that proves how great i am...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
