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
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} dark:bg-neutral-900 bg-gray-100`}
            >
                <>
                    <Menu />
                    {children}
                </>
            </body>
        </html>
    );
}
