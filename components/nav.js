import {
    MailIcon,
    ShareIcon,
} from "@heroicons/react/outline"
import HeaderIcon from "./headericon";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between font-sub font-bold text-prime">
        <div className="uppercase hover:text-sec cursor-pointer">
            <div>Mo</div>
            <div>Ha</div>
            <div>med.</div>
        </div>
        <ul className="flex flex-col space-y-1 md:flex-row items-center justify-center md:space-x-10 md:space-y-0">
            <Link href="/" >
              <li>Home</li>
            </Link>
            <Link href="/blog/all_posts">
              <li>Blog</li>
            </Link>
            
        </ul>
        <div className="flex flex-col space-y-2 md:flex-row items-center justify-center md:py-5 md:space-x-1 md:space-y-0">
                <Link href="/">
                  <HeaderIcon Icon={ShareIcon} />
                </Link>
                <Link href="https://calendly.com/bouaziz-tech" passHref={true}>
                  <a><HeaderIcon Icon={MailIcon} /></a>
                </Link>
                
            </div>
    </nav>
  )
}

export default Nav;