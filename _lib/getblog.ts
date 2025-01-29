export interface BlogPost {
  id: number;
  title_en: string;
  in_links: { [key: string]: string }[] | { [key: string]: string };
  description_en: string;
  description_ar: string;
  cover_image_url: string;
  tags: string | null;
}

interface BlogData {
  totalCount: number;
  countPerPage: number;
  currentPage: number;
  searchResults: BlogPost[];
}


export async function getBlogs(search:string ="", page:number=1) {
  
  const res = await fetch(` http://localhost:3000/blog-articles?search_term=${search}&page=${page}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch blog data: ${res.statusText}`);
  }

  const data = await res.json();

  if (!data?.data?.searchResults) {
    throw new Error('Invalid blog data format');
  }

  return data;
}


export async function getBlog(id: number) {

  const res = await fetch(`http://localhost:3000/blog-articles/${id}`);
  const blog = await res.json();

  if (!blog) {
    return { notFound: true };
  }

  return blog.data;
} 