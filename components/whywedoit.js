import Link from "next/link";
import React from "react";

const Whywedoit = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-20">
      <h1 className="w-full text-3xl font-bold font-head text-prime md:w-2/3 leading-10">
        My last piece for you : Why i{" "}
        <span className="text-sec">Love doing this</span>
      </h1>
      <div className="w-1/2 h-1 bg-prime mt-7"></div>
      <div className="flex">
        <div className="w-0 md:w-2/4"></div>
        <p className="w-full mt-10 font-light text-justify font-text text-md text-prime leading-8 ">
          <strong className="font-bold">
            {" "}
            What does it actually mean to make the world a better place ?
          </strong>{" "}
          <br /> Everyone may have a different answer to this question, some of
          these answers are corny, some are simply unrealistic and very few are
          actually inspiring. I myself thought about that question for a very
          long time, and the most inspiring answer I could come up with, is also
          the simplest one. I believe making the world a better place means
          doing our best to solve most of our challenges, diffuse most of our
          fears and make most of our dreams come true. Of course to achieve
          that, we need faith, fortitude, perseverance and most all, we need
          tools. And because the task is grand, we need considerable, powerful
          tools that defy the barriers of reality. Many options exist, each uses
          his own and the one I chose is Technology. Technology, if used
          correctly, has the potential to change lives, in the right hands, the
          power of technology knows no limit. I created this company, to use
          that immense power, to help, grow, elevate and most of all to connect.
          My way of changing the world is through technology and the vessel I
          built to get there is this company. My name is Mohammed Bouaziz, and
          I'm the co-founder and CEO of Mobodev. Thank you for reading through,
          I hope I convinced you and I hope we will not only work together but
          maybe even be friends.
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

export default Whywedoit;
