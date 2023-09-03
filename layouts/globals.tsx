import { Head } from "./head";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-screen">
            <Head />
            <main className="mx-auto max-w-[1960px] p-4">
                {children}
            </main>
        </div>
    );
}