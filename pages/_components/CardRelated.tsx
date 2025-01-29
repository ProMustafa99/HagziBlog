import Image from "next/image";
import ReadMoreButton from "./ReadMoreButton";

export default function CardRelated({ related }: any) {
  const { id, title_en, cover_image_url } = related || {};
 
  if (!id || !title_en || !cover_image_url) {
    return <div>Loading...</div>;  
  }

  return (
    <article className='mb-11 '>
      <div className='relative py-32'>
        <Image src="/test.png" fill className='rounded-t-lg ' alt={`Image/${title_en}`} />
      </div>

      <div className='bg-white p-4 rounded-b-lg'>
        
        <h3 className='text-oceandepth font-bold'> {title_en} </h3>
        
        <div className='py-4'>
          <ReadMoreButton pathLink='/blog' id={id} />
        </div>

      </div>
    </article>
  );
}
