import Navbar from '@/components/Navbar/Nav';
import { Head } from "./head";
import app from '@/app.config'

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-screen">
            <Head />
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
                {children}
            </main>
            <footer className="p-6 text-center text-black dark:text-white/80 sm:p-12">
                &copy; {new Date().getFullYear()}{' '}
                <a
                    href={app.socialLink}
                    target="_blank"
                    className="font-semibold text-black dark:text-white dark:hover:text-white"
                    rel="noreferrer"
                >
                    {app.author}'s {app.usage}.
                </a>
                {' '}All rights reserved.
            </footer>
        </div>
    );
}