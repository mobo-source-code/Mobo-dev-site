import Image from "next/image";

const Process = () => {
    return (
              <div className="flex flex-col items-center justify-center mt-20">
                <div className="h-0.5 w-1/2 bg-prime mt-7"></div>
                <h1 className="py-6 text-4xl font-bold text-center font-head">
                  <span className="text-sec">Our 6 Steps Process</span> For a successful Digital Transformation.
                </h1>
                <div className="h-0.5 w-1/2 bg-prime mb-10"></div>
          
                <div className="text-xl font-normal bg-gray-100 md:p-10 font-text">
                    We will Digitally Transformation your business, successfully and without hassles, this 
                    6 step process proved to be successfull across the many industries and clients we have worked 
                    with.
                  <br />{" "}
                  <span className="block p-5 font-bold">
                    <ul className="flex flex-col list-disc space-y-10">
                        <li>
                            <strong className="font-bold">Audit and diagnosis</strong> : We start by scheduling a session, that we like to call an Incipio session. An Incipio session
                            might take a few hours or a few days, depending on your business needs. During that session we will ask a series of questions
                            about your business, to find out everything we need to know about it. By the end we will have a clear understanding
                            about what your business does, what value it delivers, how are you serving your customers and a lot more. This is 
                            a very important step, you will be shocked to know that many businesses have wrong perceptions about how they do things.

                        </li>
                        <li>
                            <strong className="font-bold">Define Pain Points</strong> : We will then define paint points that are subtely or 
                            implecitely hurting your business, these points are what's standing between you and massive growth, your business perfromance is 
                            suffering because of these obstacles. These challenges are not obvious, they are hidden, making them appear on the 
                            surface is the goal in this step. 
                        </li>
                        <li>
                        <strong className="font-bold">Process Analysis</strong> : So far we know how your business works and we know the 
                        challenges surrounding it. In order to start designing solutions, we need to know the processes on which every operation
                        in your business run upon. It is the only way to ensure that the solutions we architecht will be perfectly integrated within
                        your business. 
                        </li>
                        <li>
                        <strong className="font-bold">Strategy with defined goals</strong> : Now we have what's needed to put down a strategy and
                        an action plan. We know what solutions your business needs to massively grow and perform at it's best. The strategy with defined goals will
                        contain a detail plan about what the solution is, what problems will it solve and how will be integrated within
                        your business processes. 
                        </li>
                        <li>
                        <strong className="font-bold">Building the solution</strong> : The engineering work will now begin. We will start Building
                        the solution your business needs to grow and perform at it's peek. It can be software, mobile app, AI chatbot or 
                        Data visualization/analysis etc... each type of solution/platform has it's own process of course, and we will explain
                        those in depth in a blog post. 
                        </li>
                        <li>
                        <strong className="font-bold">Integration and Training</strong> : We will now integrate the growth, tailored solution
                        into your business and train your people to use it effectively. 
                        </li>
                    </ul>
                  </span>{" "}
                </div>
                <div className="p-10">
                      <Image height={316} width={631} src="https://treurgia.sirv.com/mobo_pics/process.png" />
                  </div>
              </div>
    )
}
export default Process;