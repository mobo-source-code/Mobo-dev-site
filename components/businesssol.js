import Link from "next/link";
import React from "react";

const BusinessSol = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-20">
      <h1 className="w-full text-3xl font-bold font-head text-prime md:w-2/3 leading-10">
        We are here to <span className="text-sec">destroy</span> those Fears,
        <br />
        <span className="text-sec">Take down</span> the obstacles and <br />
        Put <span className="text-sec">You</span> at the{" "}
        <span className="text-sec">Top</span> of your industry
      </h1>
      <div className="w-1/2 h-1 bg-prime mt-7"></div>
      <div className="flex">
        <div className="w-0 md:w-2/4"></div>
        <p className="w-full mt-10 font-light text-justify font-text text-md text-prime leading-8 ">
          As an entrepreneur or business owner, you need to know that to every
          business problem there is a sophisticated, extremely optimized
          technological solution.
          <br /> All we have to do is accurately diagnose your business problems
          and tailor a well crafted solution that will perfectly solve those
          problems.
          <br />
          <br />
          What I mean by{" "}
          <strong className="font-bold">“The perfect solution”</strong> is that
          by our experience when the problem or “illness” is accurately
          diagnosed, the solution made to cure it, may it be software or a data
          analysis and prediction solution, is actually so well fitting into
          your business that it will optimize it by all metrics known to
          business ! <br />
          <br />
          The solution will enhance your business performance to an extreme
          level, the results are extravagant, and you will see those results
          within the first weeks of implementation.
          <br />
          <br />
          If you are an entrepreneur willing to build an app or software, well,
          you are at the right place. What we will do for you is first
          understand your app perfectly, we will learn to see it how you see it,
          so we can make sure that the end result is exactly what you had in
          mind. <br />
          You will then be asked a few questions to understand the technical
          requirements, what resources are exactly needed to make your app a
          reality. <br />
          <br />
          <strong className="font-bold">
            Within a few hours of our discussion you will see a working
            prototype of your app !!
          </strong>
          <br />
          <br />
          You will feel that what always been an idea in your mind and that you
          only discuss with friends you trust is now a reality, it’s finally
          happening, you will have your own app in the market, you will see
          people react to using it, you will finally start living that
          experience that you always wondered about, the experience of imagining
          something, building it, launching and seeing it work ! it will not be
          easy, you will have some frustrations, and we will be with you all the
          way through. We’ve had this journey with many entrepreneurs before and
          it was mesmerizing.
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

export default BusinessSol;

