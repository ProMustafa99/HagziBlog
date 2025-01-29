import Head from "next/head";
import { getBlog } from "../../_lib/getblog";
import BlogView from "../_components/BlogView";

export async function getServerSideProps({ params }: any) {
    const blogId = params.blogId;
    const blogIdNumber = Number(blogId);

    if (isNaN(blogIdNumber) || blogIdNumber <= 0) {
        return {
            notFound: true,
        };
    }

    try {
        const blog = await getBlog(blogId);

        if (blog === 'Article not found') {
            return {
                notFound: true,
            };
        }

        return {
            props: { blog },
        };

    } catch (error) {
        return {
            notFound: true,
        };
    }
}



export default function Blog({ blog }: any) {

    const { title_en } = blog;

    return (
        <>
            <Head>
                <title> Blog {title_en}</title>
            </Head>

            <BlogView blogInfo={blog} />
        </>

    );
}
