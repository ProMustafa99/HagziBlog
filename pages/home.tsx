import { getBlogs } from "../_lib/getblog";

export async function getStaticProps() {
  const blog = await getBlogs();
  return { props: { blog } };
}

export default function Home({ blog }: any) {
  
  const searchResults = blog?.searchResults || [];
  
  return (
    <p>Hagzi  BLog </p>
  );
}
