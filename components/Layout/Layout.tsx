import React, { ReactNode } from 'react';
import Footer from './Footer/Footer';
import Head from './Head/Head';
import Header from './Header/Header';

interface LayoutProps {
    children: ReactNode;
  }  

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head />
            <main>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    );
}
