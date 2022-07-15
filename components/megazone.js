import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Megazone = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col p-6 mt-20 bg-gray-200 rounded-lg">
      <div className="flex flex-col justify-start">
        <h1 className="text-2xl font-bold font-sub">
          MegaBlop: E-commerce, Dropshipping and Retail.
        </h1>
        <div>
          <h3 className="py-5 text-xl font-bold font-sub">Introduction</h3>
          <p className="w-full mb-10 font-light text-justify md:w-3/4 text-md font-text">
            Fred is business owner, his business imports niche products from
            Asia that he sells on his e-commerce website. His business model
            differs from a traditional e-commerce website, what’s different
            about MegaBlop (fred’s business) is that it has a huge group of
            individuals, working with their phones as independent advertisers
            paid based on commissions from sales. He calls them Bloppers. All a
            Blopper has to do is find someone, somewhere, willing to buy a
            product that Fred has in storage, get their number and address and
            communicate that information on the MegaBlop platform, where
            communication is safe and private.
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-bold font-sub">
            The Business Problem
          </h3>
          <p className="w-full mb-10 font-light text-justify md:w-3/4 text-md font-text">
            I built MagaBlop following Fred’s vision four years ago (if you
            wanna check it out here is the link), and everything was working
            just fine until Fred called me because MegaBlop was facing a serious
            business problem. The purchases on MegaBlop increased dramatically,
            and because of that, MegaBlop’s supply chain became impossible to
            manage
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-bold font-sub">The solution</h3>
          <p className="w-full mb-10 font-light text-justify md:m-3/4 text-md font-text">
            After our original audit, we found that we needed to automate the
            communication with the suppliers according to the customer purchases
            and we need to be a few days ahead. The way to do that is to analyze
            the traffic on the site in real time, compile that with the previous
            purchase history and make a calculated prediction on how much
            provisions are needed to avoid shortage. <br /> Then we need to
            automatically act on that prediction to contact suppliers with pre
            calculated quantities. We also needed to make a detailed dashboard
            informing the managers about what’s going on in real time. The
            dashboard will contain all the information relating to stock value,
            filtered by products, products that are near rupture, others that
            are on their way and much more.
            <br /> The strategic advantages this system would add to MegaBlop is
            of tremendous value :
            <ul className="p-8 mt-6 font-bold list-disc bg-white rounded-lg md:m-6 leading-6">
              <li>
                {" "}
                Ensuring that thestorage never runs out of products will result
                in the best customer experience{" "}
              </li>
              <li>
                {" "}
                Also optimized purchases from the supplier will ensure that no
                unnecessary financial resources are being used and will superbly
                help with the cash flow issues that may arise, and that every
                business owner fiercely tries to avoid.{" "}
              </li>
            </ul>
            This is how we helped Fred overcome his challenges, this is how we
            made his life better and this is how we will make yours better. Why
            don’t you give us a call.
          </p>
        </div>
      </div>
      <Slider {...settings}>
        <Image
          src="https://treurgia.sirv.com/portfolio/megazone-dash.png"
          height={1024}
          width={1440}
        />
        <Image
          src="https://treurgia.sirv.com/portfolio/megazone-all.png"
          height={1024}
          width={1440}
        />
        <Image
          src="https://treurgia.sirv.com/portfolio/megazone-admin.png"
          height={1024}
          width={1440}
        />
        <Image
          src="https://treurgia.sirv.com/portfolio/megazone-add.png"
          height={1024}
          width={1440}
        />
      </Slider>
    </div>
  );
};

export default Megazone;
