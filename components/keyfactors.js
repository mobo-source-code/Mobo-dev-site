import Image from "next/image";

const Keys = () => {
    return (
              <div className="flex flex-col items-center justify-center mt-20">
                <div className="h-0.5 w-1/2 bg-prime mt-7"></div>
                <h1 className="py-6 text-4xl font-bold text-center font-head">
                  <span className="text-sec">The 6 Key Elements</span> For a successful Digital Transformation.
                </h1>
                <div className="h-0.5 w-1/2 bg-prime mb-10"></div>
          
                <div className="text-xl font-normal bg-gray-100 md:p-10 font-text">
                    Digital Transformation success is defined by these six factors
                  <br />{" "}
                  <span className="block p-5 font-bold">
                    <ul className="flex flex-col list-disc space-y-10">
                        <li>
                            Your Digital Transformation strategy should have clear goals, and these goals should align 
                            with an integrated strategy that aims to effectively enhance competitiveness, efficiency and 
                            market share.
                        </li>
                        <li>
                            The management including the CEO and executives should be invested in the Digital Transformation 
                            of the company, if they are not tech savy's they should aim to become at least aware of the tech used
                            in the digital transformation process.
                        </li>
                        <li>
                            Hiring new talents and Training existing employees is a must for the Digital Transformation
                            to succeed. Employees should believe in the tech as a tool that will improve their lifes in the 
                            workplace and make their work easier.
                        </li>
                        <li>
                            The management should opt for a more agile and lean governance mindset, as change is disruptive, digital 
                            change requires an open, easy shifting mindset.
                        </li>
                        <li>
                            A control process should be in place, to know how effective the digital transformation is 
                            and if the company should hit target goals.
                        </li>
                        <li>
                            Always keep in mind that tech should be build to serve the people in your business and not the 
                            other way around.
                        </li>
                    </ul>
                  </span>{" "}
                </div>
                <div className="p-10">
                      <Image height={712} width={725} src="https://treurgia.sirv.com/mobo_pics/6-keys.png" />
                  </div>
              </div>
    )
}
export default Keys;