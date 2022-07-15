import dynamic from "next/dynamic";
import Link from "next/link";


const DynamicComponent = dynamic(
  () => import ('./schedule'),
  {ssr: false}
)

const Intro = () => {


  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 space-y-3">
        <div className="flex flex-col items-center justify-between md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="h-0.5 w-40 bg-prime"></div>
          <h2 className="text-xl text-center font-sub text-prime">
            For Business Owners, Executives and Future Startup Builders
          </h2>
          <div className="h-0.5 w-40 bg-prime"></div>
        </div>
        <div className="pt-5 pb-12 ml-2 text-2xl font-bold md:text-5xl font-head space-y-5 md:ml-16">
          <h1>Aggressively Grow Your Business, Beyond Expectations.</h1>
          <h1>Upscale Your Competition.</h1>
          <h1>& Reach the highest level of performance.</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-xl font-bold bg-gray-200 md:flex-row space-y-10 md:space-y-0 md:space-x-16 font-text md:ml-10 ml:p-16 rounded-xl">
          <ul className="flex flex-col list-disc space-y-10">
            <li>
              Achieve Massive Growth in a short span of time with a minimal
              investment.
            </li>
            <li>
              Build the technological solution you always wished you had and
              solve most of your business problems.
            </li>
            <li>
              Leverage the power of technology to boost the performance of your
              company, use technology as your main strategic asset.
            </li>
          </ul>
          <ul className="flex flex-col list-disc space-y-10">
            <li>
              Build the app you always dreamed about, launch and scale it to
              achieve massive success.{" "}
            </li>
            <li>
              Compete at the highest business level and leave your competition
              in the dust.
            </li>
            <li>
              Build the app you imagine, make it a reality in less than 6 weeks
              with a plan to dominate the market even with a limited budget
            </li>
          </ul>
        </div>
        <br />
        <Link href="https://calendly.com/bouaziz-tech" passHref={true}>
          <button
            className="w-80 md:w-96 h-16 px-6 text-indigo-100 font-sub text-xl transition-colors 
                          duration-150 bg-prime rounded-lg 
                          focus:shadow-outline hover:bg-sec hover:text-prime">
            Claim my free audit
          </button>
        </Link>
        
        <DynamicComponent />
      </div>
    </>
  );
};

export default Intro;
