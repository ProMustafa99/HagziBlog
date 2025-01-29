import Link from "next/link";

interface BreadCrumb {
    title: string;
    href: string;
}

interface BreadcrumbProps {
    breadcrumbs: BreadCrumb[];
}

export default function Breadcrumb({ breadcrumbs }: BreadcrumbProps) {
    return (
        <div className='bg-white shadow-md mustafa'>
            <nav className='container mx-auto w-full sm:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-xl flex justify-between items-center py-5'>
                <div className="container mx-auto px-4">
                    <ul className="flex space-x-2 text-sm">
                        {breadcrumbs.map((item, index) => (
                            <li key={index} className="m-0">
                                {index === breadcrumbs.length - 1 ? (
                                    <span className="last:text-oceandepth last:font-bold">{item.title}</span>
                                ) : (
                                    <Link href={item.href} className="hover:underline last:text-oceandepth last:font-bold">
                                        {item.title}
                                    </Link>
                                )}
                                {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>

    );
}
