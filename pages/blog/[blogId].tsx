import Head from "next/head";
import { getBlog } from "../../_lib/getblog";
import BlogView from "../_components/BlogView";
import Breadcrumb from "../_components/Breadcrumb";

interface BreadCrumb {
    title: string;
    href: string;
}

export async function getServerSideProps({ params }: any) {
    let breadcrumbs: BreadCrumb[] = [{ title: "Home", href: "/" }];

    if (!params.blogId) {
        breadcrumbs.push({ title: "Blog", href: "/blog" });

        return {
            props: { blog: null, breadcrumbs },
        };
    }
    const blogId = params.blogId;
    const blogIdNumber = Number(blogId);

    if (isNaN(blogIdNumber) || blogIdNumber <= 0) {
        return { notFound: true };
    }

    try {
        const blog = await getBlog(blogIdNumber);

        if (!blog || blog === "Article not found") {
            return { notFound: true };
        }

        breadcrumbs.push(
            { title: "Blog", href: "/blog" },
            { title: blog.title_en, href: `/blog/${blogId}` }
        );

        return {
            props: { blog, breadcrumbs },
        };
    } catch (error) {
        console.error("Error fetching blog:", error);
        return { notFound: true };
    }
}

export default function Blog({ blog, breadcrumbs }: { blog: any; breadcrumbs: BreadCrumb[] }) {
    return (
        <>
            <Head>
                <title>{blog ? `Blog - ${blog.title_en}` : "Blog"}</title>
            </Head>

            

            {blog ? <BlogView blogInfo={blog} breadcrumbs={breadcrumbs} /> : <h1 className="text-center text-2xl mt-10">Blog Page</h1>}
        </>
    );
}
