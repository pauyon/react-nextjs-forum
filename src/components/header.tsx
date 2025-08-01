import Link from 'next/link';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react';
import HeaderAuth from '@/components/header-auth';
import SearchInput from './search-input';
import { Suspense } from 'react';

export default function Header() {
    

    return (
        <Navbar className='shadow mb-6'>
            <NavbarBrand>
                <Link href="/" className='font-bold'>My Test Forum</Link>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem>
                    {/* Always wrap searches in suspense tag */}
                    <Suspense>
                        <SearchInput />
                    </Suspense>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                <HeaderAuth />
            </NavbarContent>
        </Navbar>
    )
}