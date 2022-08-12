import Image from "next/image"
import { useState, useRef } from "react"
import Nav from "../components/nav"
import emailjs from "emailjs-com"
import Social from "../components/social"

const Contact = () => {

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [country, setCountry] = useState()
    const [mail, setMail] = useState()

    const form = useRef()

   const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_gvbfl9t",
        "template_54qiisk",
        form.current,
        "P7pwNDwQw3fyKRyLc"
    ).then(
        result => console.log(result.text),
        error => console.log(error.text)
    );
    e.target.reset();
   };

    return (
        <>
        <Nav />
        <h1 className="text-md text-light text-center mb-10 mt-20">
            I don't charge by the hour, I charge in proportion to the value I deliver. <br/>
            An Incipio session might take a few days to weeks and it start at <span className="font-bold">3000 $</span>, depending on your business. <br/>
            <strong className="font-bold">Payable in Advance</strong> 
        </h1>
        <div className="p-10">
            <Image height={502} width={1027} src="https://treurgia.sirv.com/mobo_pics/plan-2.png" />
        </div>
        
         <div className="mt-4 flex flex-col space-y-10">
            <div className="w-full flex flex-col p-10 bg-white rounded-lg">
                <ul className="flex flex-col list-disc space-y-10 font-bold text-xl p-8">
                    <li>
                        Analyse how your business works now, to know where you stand in your Digital Transformation
                        journey
                    </li>
                    <li>
                        We will dive deep into the processes your business uses to operate
                    </li>
                    <li>
                        Run a diagnostic to find out the pain points in your current situation and come up with
                        a report that explains what digital transformation tools and technologies we will use to
                        grow your business and overcome the challenges you're facing today.
                    </li>
                    <li>
                        Write an action plan: containing the assets, technologies, implementation strategy and much more.
                    </li>
                    <li>
                        Propose the digital transformation solutions that will be built and implemented to grow, scale and 
                        optimise your business, making it future ready.
                    </li>
                </ul>
            </div>
            
            <div className="bg-white rounded-lg p-14 flex justify-center">
            <form ref={form} onSubmit={sendEmail}>
        <div className="bg-none md:bg-white pl-20 md:pl-10 md:p-6 p-20 rounded-lg flex flex-col space-y-10 w-3/5">
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Your name</p>
                    <input name="name"
                        onChange={e => setName(e.target.value)} 
                        placeholder="Name..."
                        type="text"
                        className="mt-1 w-60 md:w-80 p-3 outline-none inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Your Phone Number</p>
                    <input name="phone"
                        onChange={e => setPhone(e.target.value)} 
                        placeholder="Phone..."
                        type="text"
                        className="mt-1 w-60 md:w-80 p-3 outline-none inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Your country</p>
                    <input name="country"
                        onChange={e => setCountry(e.target.value)} 
                        placeholder="Country..."
                        type="text"
                        className="mt-1 w-60 md:w-80 p-3 outline-none inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Your E-mail</p>
                    <input name="mail"
                        onChange={e => setMail(e.target.value)} 
                        placeholder="E-mail..."
                        type="text"
                        className="mt-1 w-60 md:w-80 p-3 outline-none inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <button type="submit" className="w-60 md:w-80 h-10 md:px-4 py-0 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded hover:bg-green-300 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Book your seesion now
            </button>
        </div>
        </form>
        </div>
        <Social />
        </div>
        </>
        
    )
}

export default Contact