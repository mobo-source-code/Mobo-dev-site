import axios from "axios"
import Image from "next/image"
import Nav from "../../components/nav"
import MarkdownIt from "markdown-it"
import { NextSeo } from "next-seo";

export const getStaticPaths = async () => {
    const res = await axios.get("https://mobodev.herokuapp.com/api/posts?populate=*")
    const posts = res.data.data

    const paths = posts.map(b => {
        return {
            params: { id: b.id.toString()}
        }
    })

    return {
        paths: paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await axios.get(`https://mobodev.herokuapp.com/api/posts/${id}?populate=*`)
    const post = res.data.data
    console.log(post)

    return {
        props: {post: post},
        revalidate: 1
    }
}

const Single = ({post}) => {

    const da = new Date(post.attributes.publishedAt).toLocaleDateString()

    const md = new MarkdownIt();
    const htmlContent = md.render(post.attributes.body)

    const SEO = {
        title: post.attributes.title,
        description: post.attributes.description,
        openGraph: {
            title: post.attributes.title,
            description: post.attributes.title
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Nav />
            <div className="flex flex-col justify-center items-center mt-20">
                <Image height={500} width={750} src={"https://mobodev.herokuapp.com" + post.attributes.cover.data[0].attributes.url} />
                <h1 className="text-4xl font-bold text-center mt-28">
                    {post.attributes.title}
                </h1>
                <p className="text-xl font-text mt-10 text-center text-gray-600 font-regular">
                    {post.attributes.description}
                </p>
                <div className="text-md text-gray-500 mt-10 flex space-x-20 items-center">
                    <div className="flex items-center space-x-4">
                        <Image className="rounded-full" src="https://treurgia.sirv.com/avatar/profile-pic.jpg" height={56} width={56} />
                        <p>
                            Mohammed Bouaziz
                        </p>
                    </div> 
                    <div>
                        {da}
                    </div>
                </div>

                <section className="mt-28 prose max-w-none text-justify w-4/5 prose-teal" dangerouslySetInnerHTML={{__html: htmlContent}}></section>
            </div>
        </>
    )
}

export default Single