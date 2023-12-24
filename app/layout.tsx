import type { Metadata } from "next";
import { Poltawski_Nowy } from "next/font/google";
import "./globals.css";

const inter = Poltawski_Nowy({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "First project",
    description: "Created with love by Franco",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
