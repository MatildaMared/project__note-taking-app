import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
                className={`${geistSans.variable} ${geistMono.variable} h-full bg-gray-100 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300`}
            >
                <div className="mx-auto h-full max-w-(--breakpoint-xl) xl:border-x xl:border-x-neutral-200 dark:xl:border-x-neutral-700">
                    {children}
                </div>
            </body>
        </html>
    );
}
