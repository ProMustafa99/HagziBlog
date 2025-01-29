import React from 'react';
import SideBar from './SideBar';

export default function Layout({ children }: any) {
    return (
        <div className="container mx-auto  w-full sm:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-xl py-3 sm:px-0 py-10">

            <div className="grid grid-cols-1 xl:grid-cols-12  gap-4 py-8 px-4 md:px-10 lg:px-0">

                <div className="col-span-1 lg:col-span-8 ">
                    {children} 
                </div>

                <div className="col-span-1 lg:col-span-4 ">
                    <SideBar />
                </div>
            </div>
        </div>
    );
}
