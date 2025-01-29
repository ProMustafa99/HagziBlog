import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Button from './Button';
import Breadcrumb from './Breadcrumb';
import PhoneNumber from './PhoneNumber';

export default function Header() {

    return (
        <>
            <header className="bg-gray-50 border-b border-gray-200 fixed w-full z-10">
                <div className="container mx-auto w-full md:px-4 lg:px-0 lg:max-w-screen-md xl:max-w-screen-xl flex justify-between items-center py-5 px-4 sm:px-0 ">
                    <Logo />
                    <Menu />

                    <div className='hidden sm:w-[50%] sm:flex justify-end items-center space-x-4'>

                        <div className='hidden md:block'>
                            <PhoneNumber />
                        </div>

                        <div className='hidden md:block'>
                            <Button href='#'>Login</Button>
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
}