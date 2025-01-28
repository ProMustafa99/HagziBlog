import Head from "next/head";
import { getBlog } from "../../_lib/getblog";
import { title } from "process";
import BlogView from "../_components/BlogView";



export async function getServerSideProps({ params }: any) {
    const blog = await getBlog(params.blogId);
    if (blog === 'There are no Article') {
        return {
            notFound: true,
        };
    }
    return { props: { blog } };
}

export default function Blog({ blog }: any) {
    
    return (
        <>
        
            <Head>
                <title> Blog {title}</title>
            </Head>
            
            <BlogView blogInfo={blog} />
        </>

    );
}
