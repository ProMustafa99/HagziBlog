import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function ToggleMenu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { name: "Apartment", href: "#" },
        { name: "Studio", href: "#" },
        { name: "Villa", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact Us", href: "#" },
    ];

    useEffect(() => {
        
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <button className="md:hidden fixed z-20 right-5 top-5 rounded w-12 h-11" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>

                <div className={`${isMobileMenuOpen ? "bg-white" : "bg-black"} -full h-1 transition-all duration-300 ${isMobileMenuOpen ? "transform rotate-45 translate-x-1 translate-y-4 " : ""} `}></div>

                <div className={`bg-black w-full h-1 mt-2 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>

                <div className={`${isMobileMenuOpen ? "bg-white" : "bg-black"} w-full h-1 mt-2 transition-transform duration-300 ${isMobileMenuOpen ? "transform -rotate-45 translate-x-1 -translate-y-2" : ""}`} ></div>

            </button>

            <nav className={`fixed top-0 left-0 w-full h-screen z-10 transform transition-transform duration-500 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="divide-y divide-gray-100 shadow-sm bg-gray-700 dark:divide-gray-600 h-full">
                    <ul className="flex flex-col sm:flex-row justify-center h-full items-center">
                        {menuItems.map((item, index) => (
                            <li key={index} className="text-white text-4xl my-5">
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}

                        <li className="my-5">
                            <Button href="#" background="cloudwhisper">Login</Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
