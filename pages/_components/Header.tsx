import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Button from './Button';
import Breadcrumb from './Breadcrumb';

export default function Header() {
    return (
        <>
            <header className="bg-gray-50 border-b border-gray-200 ">
                <div className="container mx-auto w-full lg:max-w-screen-md xl:max-w-screen-xl  flex justify-between items-center  py-5">
                <Logo />
                <Menu />
                    <div className='w-[50%] flex justify-end items-center space-x-4'>
                        <div>
                            <span>
                                +962798882727
                            </span>
                        </div>

                        <Button href='#'>Login</Button>
                    </div>
                </div>
            </header>
        </>
    );
}