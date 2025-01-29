import BlogPostCard from '@/pages/_components/BlogPostCard';
import { getBlogs } from '../_lib/getblog';
import Layout from './_components/Layout';
import Breadcrumb from './_components/Breadcrumb';
import Pagenation from './_components/Pagenation';
import NothingFound from './_components/NothingFound';

export async function getServerSideProps({ query }: any) {
    const { search, page } = query;
    const blog = await getBlogs(search, page);
    if (!blog) {
        return {
            "notFound": true
        }
    }
    return { props: { blog } };
}

export default function blogs({ blog }: any) {


    const { searchResults, totalCount, countPerPage, currentPage ,itemsPerPage } = blog.data;

    return (
        <>
            <Breadcrumb />

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

