import React from "react";

const Corevalues = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-52">
      <h1 className="w-full text-3xl font-bold font-head text-prime md:w-2/3 leading-10">
        When people love and deeply rely on the tech made for them inside the
        companies they work in, massive growth happens. Our mission is to
        empower people and organizations around the world, using technology and
        all its power to grow and rise above all obstacles.
      </h1>
      <div className="w-1/2 h-1 bg-prime mt-7"></div>
      <div className="flex">
        <div className="w-0 md:w-full"></div>
        <ul className="flex flex-col mt-10 text-xl font-bold list-disc space-y-3 font-text text-prime">
          <li>
            <strong>Value First : </strong>meaning you get tremendous value
            first, and you get
          </li>
          <li>
            <strong>Holistic Approach : </strong>We will take into consideration
            every part of your business and we will build every part of the
            solution, because we believe that perfect harmony is only achievable
            through holictisim.
          </li>
          <li>
            <strong>Active Presence : </strong>We will be with you every step of
            the way, we will be your companion in your journey to growth.
          </li>
          <li>
            <strong>Thorough Communication : </strong>Vision and competence are
            useless without the ability to speak them with utter eloquence and
            fierceness. We will make sure that we listen to your spoken and
            unspoken needs and be certain that we see the future the way you see
            it.
          </li>
          <li>
            <strong>Provided Guarantee : </strong>We made you a lot of promises,
            how are we gonna prove that we will keep them ? The answer is in the
            guarantee we offer, all the above promises are stated in a legally
            binding contract that we will electronically sign, if we fail to
            deliver on one of our promises, we have to fully refund you within
            45 days or we will face serious charges. We are not motivated by
            fear of course, but we know you are motivated by safety and
            stability and that’s what the guarantee is for.
          </li>
        </ul>
      </div>
      <button
        class="w-80 md:w-96 h-16 px-6 text-indigo-100 font-sub text-xl transition-colors 
                        duration-150 bg-prime rounded-lg 
                        focus:shadow-outline hover:bg-sec hover:text-prime mt-7"
      >
        Schedule a call now
      </button>
    </div>
  );
};

export default Corevalues;
