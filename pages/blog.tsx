import BlogPostCard from '@/pages/_components/BlogPostCard';
import { getBlogs } from '../_lib/getblog';
import Layout from './_components/Layout';
import Breadcrumb from './_components/Breadcrumb';
import Pagenation from './_components/Pagenation';
import NothingFound from './_components/NothingFound';

interface BreadCrumb {
    title: string;
    href: string;
}

export async function getServerSideProps({ query }: any) {
    
    const { search, page } = query;
    
    if (page < 1) {
        return { notFound: true };
    }
    
    const blog = await getBlogs(search, page);
    
    if (!blog) {
      return { notFound: true };
    }



    const breadcrumbs = [
        { title: "Home", href: "/" },
        { title: "Blog", href: "/blog" }
    ];
    
    return { props: { blog, breadcrumbs } };
}

export default function Blogs({ blog, breadcrumbs }: { blog: any; breadcrumbs: BreadCrumb[] }) {
    const { searchResults, totalCount, currentPage, itemsPerPage } = blog.data;

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} />

            <Layout>
                {totalCount > 0 ? (
                    searchResults.map((blog: any) => (
                        <BlogPostCard key={blog.id} searchResults={blog} />
                    ))
                ) : (
                    <div className="container mx-auto max-w-screen-xl">
                        <NothingFound />
                    </div>
                )}

                <Pagenation totalCount={totalCount} itemsPerPage={itemsPerPage} currentPage={currentPage} />
            </Layout>
        </>
    );
}
