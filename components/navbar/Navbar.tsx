import React from "react";
import { ActiveLink } from "@/components";

interface TMenu {
    path: string;
    slug: string;
}

const MENU_ITEMS: TMenu[] = [
    {
        path: "/",
        slug: "Home",
    },
    {
        path: "/about",
        slug: "About",
    },
    {
        path: "/pricing",
        slug: "Pricing",
    },
    {
        path: "/contact",
        slug: "Contact",
    },
];

export const Navbar = () => {
    return (
        <nav className="flex bg-slate-100 m-3 rounded-md p-3 px-5 text-black justify-center gap-8">
            {MENU_ITEMS.map((item) => (
                <ActiveLink key={item.path} path={item.path} slug={item.slug} />
            ))}
        </nav>
    );
};
