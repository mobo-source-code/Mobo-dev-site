import Image from "next/image"


const Logos = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-10">
            <div className="w-64 h-36 relative grayscale hover:grayscale-0 cursor-pointer">
                <Image src='/shell.png' layout="fill" objectFit="contain" /> 
            </div>
            <div className="w-64 h-36 relative grayscale hover:grayscale-0 cursor-pointer">
                <Image src='/megazone.png' layout="fill" objectFit="contain" /> 
            </div>
            <div className="w-64 h-36 relative grayscale hover:grayscale-0 cursor-pointer">
                <Image src='/zene.png' layout="fill" objectFit="contain" />
            </div> 
        </div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-10">
            <div className="w-64 h-36 relative grayscale hover:grayscale-0 cursor-pointer">
                <Image src='/crypto.png' layout="fill" objectFit="contain" /> 
            </div>
            <div className="w-64 h-36 relative grayscale hover:grayscale-0 cursor-pointer">
                <Image src='/maca.png' layout="fill" objectFit="contain"  /> 
            </div>
        </div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-10">
            <div className="w-64 h-36 relative grayscale hover:grayscale-0 cursor-pointer">
                <Image src='/bec.png' layout="fill" objectFit="contain" /> 
            </div>
            <div className="w-64 h-36 relative grayscale hover:grayscale-0 cursor-pointer">
                <Image src='/ligo.png' layout="fill" objectFit="contain"  /> 
            </div>
        </div>
    </div>
  )
}

export default Logos