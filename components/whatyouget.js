import React from "react";

const WYG = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-20">
      <h1 className="w-full text-3xl font-bold font-head text-prime md:w-2/3 leading-10">
        Here is exactly what you are<span className="text-sec">getting</span>{" "}
        with us.
      </h1>
      <div className="w-1/2 h-1 bg-prime mt-7"></div>
      <div className="flex">
        <div className="w-0 md:w-2/4"></div>
        <p className="w-full mt-10 font-light text-justify font-text text-md text-prime leading-8 ">
          <ul className="flex flex-col p-8 font-bold list-disc bg-gray-200 rounded-lg leading-9 space-y-4">
            <li>
              {" "}
              Engineering excellence, the output of an entire team that you
              don’t have to manage, as you are dealing with one person, Me.{" "}
            </li>

            <li>
              {" "}
              The full package, You don’t need anybody else on your project. The
              entire tech part is on me.{" "}
            </li>

            <li> On time, guaranteed, delivery: I always deliver, always. </li>

            <li>
              {" "}
              Perfect communication, i have worked with english and french
              companies (yes french), so we will understand each other perfectly
              and faster than you think.{" "}
            </li>

            <li>
              {" "}
              I'm available to answer your questions, guide you and make sure
              you understand every part of the process. You won’t be left out.
              After the call, we are partners. .{" "}
            </li>

            <li>
              {" "}
              You will see results within weeks of us working together. .{" "}
            </li>

            <li>
              {" "}
              I guarantee the delivery and the results we will sign contracts
              that will protect you and your business. .{" "}
            </li>

            <li>
              {" "}
              Massive growth like this needs extreme investment, not with us,
              you will have extravagant growth with an optimized investment. .{" "}
            </li>
          </ul>
        </p>
      </div>
      <button className="h-16 px-6 mt-10 text-xl text-indigo-100 rounded-lg w-80 md:w-96 font-sub transition-colors duration-150 bg-prime focus:shadow-outline hover:bg-sec hover:text-prime">
        Schedule a call now
      </button>
    </div>
  );
};

export default WYG;
