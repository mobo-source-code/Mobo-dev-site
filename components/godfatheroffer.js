import React from "react";
import Image from "next/image";

const Godfatheroffer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="h-0.5 w-1/2 bg-prime"></div>
      <h1 className="py-6 text-4xl font-bold text-center font-head">
        What is Digital Transformation ?{" "}
        <span className="text-sec">Why is digital transformation essential to your buiness</span>.
      </h1>
      <div className="h-0.5 w-1/2 bg-prime mb-10"></div>
      <div className="w-full text-xl font-normal bg-gray-100 md:p-10 font-text">
      Every domain of business strategy operates under constraints that dictate how all aspects of the business should be conducted. 
      Every block of the supply chain is bound to run a certain way.  <br />{" "}
        <span className="block p-3 font-bold md:p-5">
        Today, Thanks to the new digital technologies, the old business model is invalidated, and inflexible 
        "dinosaur" businesses vanish, almost overnight.<br/> 
        <br/>
        So, digital transformation is no longer a luxury, it is a necessity, 
        and due to Covid-19 disruptive nature, the digital transformation of your business is now an emergency. 
          <br /> 
          <br/>
          Digital transformation changes how we create value and interact with our customers, 
          it changes how we think about competition, as businesses are not just competing with companies 
          within their industries but also with companies in other industries who revolutionize their 
          offerings through new digital services. 
          <br/>
          <br/>
          Digital Transformation changes how business leaders make decisions, 
          data-driven decisions are now key to strategic proficiency. 
          Finally, Digital Transformation changes the way businesses innovate, 
          today testing and continuously improving products and services is not as expensive and high risk 
          as they once were, 
          and digitally transformed businesses are constantly innovating.
        </span>{" "}
      </div>

      <div className="h-0.5 w-1/2 bg-prime mt-7"></div>
      <h1 className="py-6 text-4xl font-bold text-center font-head">
        Why is Digital Transformation<span className="text-sec"> Important ?</span>.
      </h1>
      <div className="h-0.5 w-1/2 bg-prime mb-10"></div>

      <div className="text-xl font-normal bg-gray-100 md:p-10 font-text">
        I'm gonna quote David L.Rogers, this paragraph is from his book, The Digital Transformation Playbook:
        <br />{" "}
        <span className="block p-5 font-bold">
        "Today, we are moving to a world of fluid industry boundaries, 
        one where our biggest challengers may be asymmetric competitors—
        companies from outside our industry that look nothing like us but that 
        offer competing value to our customers. Digital “disintermediation” is 
        upending partnerships and supply chains—our longtime business partner may become our biggest competitor if 
        that partner starts serving our customers directly." David L.Rogers
        </span>{" "}
      </div>
      <div className="p-10">
            <Image height={678} width={1091} src="https://treurgia.sirv.com/mobo_pics/how-digital.png" />
        </div>
    </div>
  );
};

export default Godfatheroffer;
