import Image from "next/image"
import { useState } from "react"

const Contact = () => {

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [country, setCountry] = useState()
    const [mail, setMail] = useState()


    const handleSubmit = async e => {
        e.preventDefault();
        console.log({name, phone, country, mail})
        let data = {
            name, 
            phone,
            country,
            mail
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setName('')
              setPhone('')
              setCountry('')
              setMail('')
            }
          })
        }

    return (
        <div className="mt-0 md:mt-8 flex flex-col md:flex-row justify-center items-center">
            <div className="w-full flex flex-col p-10">
                <h1 className="font-bold text-3xl">
                    What you are getting from from this audit
                </h1>
                <ul className="flex flex-col list-disc space-y-10 font-bold text-md p-8">
                    <li>
                        How your business works ?
                    </li>
                    <li>
                        The business and execution processes in your business
                    </li>
                    <li>
                        Run a diagnostic to find out the weaknesses of your business
                    </li>
                    <li>
                        Establish the challenges we need to overcome
                    </li>
                    <li>
                        Propose the digital solution to overcome those business challenges
                    </li>
                </ul>
            </div>
            
            <div className="bg-white rounded-lg p-8 flex justify-center">
            <form onSubmit={handleSubmit}>
        <div className="bg-white pl-10 p-6  rounded-lg flex flex-col space-y-10 w-3/5">
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Your name</p>
                    <input name="nom"
                        onChange={e => setName(e.target.value)} 
                        placeholder="Name..."
                        type="text"
                        className="mt-1 w-80 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Your Phone Number</p>
                    <input name="contact"
                        onChange={e => setPhone(e.target.value)} 
                        placeholder="Phone..."
                        type="text"
                        className="mt-1 w-80 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Your country</p>
                    <input name="adresse"
                        onChange={e => setCountry(e.target.value)} 
                        placeholder="Country..."
                        type="text"
                        className="mt-1 w-80 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Your E-mail</p>
                    <input name="tel"
                        onChange={e => setMail(e.target.value)} 
                        placeholder="E-mail..."
                        type="text"
                        className="mt-1 w-80 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <button type="submit" className="w-80 h-10 px-4 py-0 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded hover:bg-green-300 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Claim my free audit
            </button>
        </div>
        </form>
        </div>
        </div>
        
    )
}

export default Contact