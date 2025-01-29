import React from 'react';

interface SrcImage {
    srcImage: string
}

export default function Icons({ srcImage }: SrcImage) {
    return (
        <div className="bg-[#3270fc] w-[36px] h-[36px] flex items-center justify-center rounded-[2px] text-white text-[.83em] mx-[3px] mt-6">
            <img src={`/${srcImage}`} width={20} height={20} />
        </div>

    );
}
