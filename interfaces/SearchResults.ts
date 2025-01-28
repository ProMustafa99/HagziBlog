export interface BlogPost {
    id: number;
    title_en: string;
    in_links: { [key: string]: string }[] | { [key: string]: string };
    description_en: string;
    description_ar: string;
    cover_image_url: string;
    tags: string | null;
  }
  
  interface SearchResultsProps {
    searchResults: BlogPost[];
  }
  