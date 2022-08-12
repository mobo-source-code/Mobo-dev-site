import Link from "next/link"

const Social = () => {
    return (
        <div className="p-2 space-x-3 md:space-x-0 md:p-10 flex justify-center md:justify-between mt-10">
            <Link href="https://www.linkedin.com/in/mohammed-bouaziz-mobodev/" passHref={true}>
                <h1 className="font-text font-light text-gray-600 cursor-pointer bg-gray-800 p-4 rounded-lg text-gray-200">Linkedin</h1>
            </Link>
            <Link href="https://www.instagram.com/the.mo.boz/" passHref={true}>
                <h1 className="font-text font-light text-gray-600 cursor-pointer bg-gray-800 p-4 rounded-lg text-gray-200">Instagram</h1>
            </Link>
            <Link href="https://twitter.com/MoBouaziz" passHref={true}>
                <h1 className="font-text font-light text-gray-600 cursor-pointer bg-gray-800 p-4 rounded-lg text-gray-200">Twitter</h1>
            </Link>
        </div>
    )
}

export default Social