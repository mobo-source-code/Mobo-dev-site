import Link from "next/link";
import React from "react";

const Whyus = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-20">
      <h1 className="w-full text-3xl font-bold font-head text-prime md:w-2/3 leading-10">
        We are not different because of our performance <br /> but because{" "}
        <span className="text-sec">We truly care about you</span>
      </h1>
      <div className="w-1/2 h-1 bg-prime mt-7"></div>
      <div className="flex">
        <div className="w-0 md:w-2/4"></div>
        <p className="w-full mt-10 font-light text-justify font-text text-md text-prime leading-8 ">
          I can give you a list of indicators by which we outperform everyone
          doing what we do. And will probably find our performance to be
          impressive and we will probably land you as a client, who is happy to
          have an all star team playing for him. But, as you’ve probably
          guessed, I won't go down that road. We are not different because we
          are competent, we are not different because we win, we are different
          because we care, we care about you and your business, we want to see
          that business thrive, we want to see the look on your face when it
          happens. And when it does happen, we want to be there, when you host
          that big event, telling the world that you have arrived and telling
          them how we helped you get there.
        </p>
      </div>
      <Link href="https://calendly.com/bouaziz-tech" passHref={true}>
        <button
          className="w-80 md:w-96 h-16 px-6 text-indigo-100 font-sub text-xl transition-colors 
                          duration-150 bg-prime rounded-lg 
                          focus:shadow-outline hover:bg-sec hover:text-prime mt-10"
        >
          Claim my free audit
        </button>
      </Link>
      
    </div>
  );
};

export default Whyus;
