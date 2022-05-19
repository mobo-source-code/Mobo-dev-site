import React from "react";

const Showcase = () => {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex flex-col items-center justify-center">
        <div className="h-0.5 w-1/2 bg-prime"></div>
        <h1 className="py-6 text-4xl font-bold text-center font-head">
          Let's show you some success stories that prove our methods work across
          every industry
        </h1>
        <div className="h-0.5 w-1/2 bg-prime mb-10"></div>
      </div>
      <div className="flex flex-col justify-start">
        <h1 className="text-2xl font-bold font-sub">
          Shell Mexico: Energy, Food and Leisure
        </h1>
        <div>
          <h3 className="py-5 text-xl font-bold font-sub">Introduction</h3>
          <p className="w-full mb-10 font-light text-justify md:w-3/4 text-md font-text">
            I was approached by the international establishment of shell, who a
            few years ago started collaborating with Mexico LLC, a leisure and
            food franchise, where people who are traveling can stop and have a
            great time and a great meal before they continue their journey.
            Mexico has a huge inventory that must be kept up to date. The
            inventory contains products varying from food to cleansing products
            to coffee and beverages. Six main posts constitute the establishment
            : The Bar and Cafe, The Restaurant, The Creamery, The Grill, The
            Bakery and Fast Food.
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-bold font-sub">
            The Business Problem
          </h3>
          <p className="w-full mb-10 font-light text-justify md:w-3/4 text-md font-text">
            When we were approached by the board of Shell Mexico, they had a
            list of issues that wanted to fix, these issues all amount to one
            main problem: Our business is losing money everyday because of stock
            management issues, what they meant by that is that : <br />
            <ul className="p-8 mt-6 font-bold list-disc bg-gray-200 rounded-lg md:m-6 leading-6">
              <li>
                Information is not centralized we have no idea how much any
                posts are generating or consuming
              </li>
              <li>
                Employees may be sneaking products out without anybody knowing
              </li>
              <li> When will we have a stock shortage ? </li>
              <li> Who can we trust from all our providers ? </li>
            </ul>
            <span className="block py-6 font-bold">
              {" "}
              We have no data about our consumers, we don’t know what they like
              or don’t, we don’t know what sells best, when sales are high or
              low and why they fluctuate. These issues amount to consequences
              like:{" "}
            </span>
            <ul className="p-8 font-bold list-disc bg-gray-200 rounded-lg leading-6">
              <li>
                {" "}
                Bad customer experience : a client may want to eat or drink
                something and it might not be available{" "}
              </li>
              <li>
                {" "}
                Draining of resources: product theft, product rotting etc…{" "}
              </li>
              <li>
                {" "}
                Impossibility to scale: Not knowing your customers will result
                in bad decision making, not knowing what to promote etc…{" "}
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-bold font-sub">The solution</h3>
          <p className="w-full mb-10 font-light text-justify md:m-3/4 text-md font-text">
            We created a software solution for our client, the software has the
            following features : <br />
            <ul className="p-8 mt-6 font-bold list-disc bg-gray-200 rounded-lg leading-6">
              <li>
                Adding articles to a database, each article belongs to a special
                class and comes from a specific retailer{" "}
              </li>
              <li>Adding Retailers and their information</li>
              <li>
                {" "}
                Feeding the inventory: Taking from the inventory When an article
                is near rupture, the retailer that provides that article is
                contacted automatically via sms or email
              </li>
              <li>
                An email containing information about purchases consumption,
                what went in or out, is sent automatically to the board members
                everyday.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Showcase;

