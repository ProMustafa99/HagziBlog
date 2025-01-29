import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getBlog } from '../../_lib/getblog';
import Link from 'next/link';

interface BreadCrumb {
    title: string;
    href: string;
}

export default function Breadcrumb() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);
    const [crumb, setCrumb] = useState<BreadCrumb[]>([{ title: 'Home', href: '/' }]);

    console.log(`pathname ${pathname}`);
    console.log(`pathname ${pathSegments}`);

    useEffect(() => {

        const newCrumbs: BreadCrumb[] = [{ title: 'Home', href: '/' }];

        pathSegments.forEach((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1)}`;

            if (index === 1) {

                const blogId = Number(segment);
                if (!isNaN(blogId)) {

                    getBlog(blogId).then((t) => {
                        setCrumb((prevCrumb) => {
                            const updatedCrumb = [...newCrumbs, { title: t.title_en, href }];
                            return updatedCrumb;
                        });
                    }).catch((error) => console.error('Failed to fetch blog:', error));
                }
                else {
                    console.error('Invalid blog ID:', segment);
                }
            }
            else {
                newCrumbs.push({ title: segment, href });
            }
        });

        if (pathSegments.length <= 1) {
            setCrumb(newCrumbs);
        }
    }, [pathname]);


    return (
        <div className='bg-white shadow-md'>
            <nav className='container mx-auto  w-full sm:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-xl flex justify-between items-center py-5'>
                <ul className="flex space-x-2 text-sm px-4 sm:px-10 lg:px-0">
                    {crumb.map((item, index) => (
                        <>
                            <li key={index} className='m-0'>
                                <Link href={`${item.href}`} className='last:text-oceandepth last:font-bold '>
                                    {item.title}
                                </Link>
                                {index < crumb.length - 1 && <span className="mx-2">/</span>}
                            </li>
                        </>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
