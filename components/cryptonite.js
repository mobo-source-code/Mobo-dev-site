import React from "react";

const Cryptonite = () => {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex flex-col justify-start">
        <h1 className="text-2xl font-bold font-sub">
          Cryptonite : Crypto stock Prediction and trade automation.
        </h1>
        <div>
          <h3 className="py-5 text-xl font-bold font-sub">Introduction</h3>
          <p className="w-full mb-10 font-light text-justify md:w-3/4 text-md font-text">
            What is the number one question everyone wants the answer to when it
            comes to crypto ? How can I know if a crypto is going up or down ?
            meaning what are the indicators that change a certain crypto’s faith
            leading to rise or fall ?
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-bold font-sub">
            The Business Problem
          </h3>
          <p className="w-full mb-10 font-light text-justify md:w-3/4 text-md font-text">
            The cryptonite team had answers to these questions; they just didn’t
            know how to make an algorithm that works with their model, and they
            also had no idea how to make a platform to monetize on that
            algorithm. That's exactly where they found us and decided to give us
            a call.
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-bold font-sub">The solution</h3>
          <p className="w-full mb-10 font-light text-justify md:m-3/4 text-md font-text">
            The algorithm we built scrapes hundreds of thousands of websites,
            blogs, instagram and twitter accounts, gather the data that is
            relevant to more than 60.000 crypto coin and do sentiment analysis
            on the data gathered to decide on a coefficient that will
            approximately (85% to 90% degree of certainty) predict to faith of a
            coin. Our algorithm was a few hours ahead, so we had to make an
            automation API that is connected to famous platforms like Binance,
            so trades can be programmed. All this wrapped in a stunning
            platform, so easy to use that users immediately adopted it.
            <h2 className="mt-4 mb-4 text-xl font-bold font-sub">
              You have an idea, we guarantee that we'll make it work !
            </h2>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Cryptonite;
