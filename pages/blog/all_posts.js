import axios from "axios";
import Link from "next/link";
import Nav from "../../components/nav";
import Image from "next/image";
import Footer from "../../components/footer";
import { NextSeo } from "next-seo";

const All_Posts = ({posts}) => {
    
    console.log(posts)

    const SEO = {
        title: 'MoboDev Blog Section for Insight and Guidance about how to use technology to grow your business',
        description: 'In this blog section written by Mohammed Bouaziz, you will know how to grow your business using technology, the insight offered here have helped many businesses overcome challenges and reach peak performance across various industries',
        openGraph: {
            title: 'MoboDev Blog Section for Insight and Guidance about how to use technology to grow your business',
            description: 'In this blog section written by Mohammed Bouaziz, you will know how to grow your business using technology, the insight offered here have helped many businesses overcome challenges and reach peak performance across various industries'
        }
    }

    return (
        <>
        <NextSeo {...SEO}/>
        <Nav />
        <div className="mt-28 text-center text-3xl font-bold">For Insight & Guidance</div>
        <div className="mt-28 flex flex-col space-y-10">
            {posts ? posts.map( p => (
                <Link href={`/blog/${p.id}`}>
                    <div className="flex flex-col md:flex-row md:my-10 items-center justify-center space-x-10 cursor-pointer hover:bg-gray-200 hover:rounded-lg hover:p-4 transition ease-in duration-300">
                        <div className="w-full h-80 md:w-80 md:h-64 relative mt-10 mb-7 md:mb-0 mt:mt-0">
                            <Image layout="fill" objectFit="fill" src={"https://mobodev.herokuapp.com" + p.attributes.cover.data.attributes.url} />

                        </div>
                            <div className="flex flex-col w-96">
                                <div className="font-bold text-xl text-right">{p.attributes.title}</div>
                                <p className="text-sm text-right mt-3">{p.attributes.description}</p>
                            </div>    
                </div> 
               </Link>
            )) : <div>No posts</div>}
        </div>
        </>
    )
}

export default All_Posts

export let getServerSideProps = async () => {
    const res = await axios.get("https://mobodev.herokuapp.com/api/posts?populate=*")
    const res2 = await axios.get("https://mobodev.herokuapp.com/api/posts/1?populate=*")
    const posts = res.data.data
    const posts2 =  res2.data.data

    console.log(posts2.attributes.cover.data.attributes.url)
    
    return {
        props: {
            posts: posts
        }
    }
}