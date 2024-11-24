import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "../components/Menu";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "✏️ Note Taking App",
    description: "All your awesome notes in one place",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 h-full text-neutral-700 dark:bg-neutral-950 dark:text-neutral-100`}
            >
                <div className="mx-auto h-full max-w-screen-2xl border border-red-500">
                    <Menu />
                    {children}
                </div>
            </body>
        </html>
    );
}
