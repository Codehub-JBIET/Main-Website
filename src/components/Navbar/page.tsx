import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/features/themeSlice";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
    IconSun,
    IconMoon,
    IconBrandInstagram,
    IconBrandLinkedin
} from "@tabler/icons-react";

export function Navbar() {
    const theme = useSelector((state: any) => state.theme.theme);
    const dispatch = useDispatch();

    const links = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full" />,
            href: "#",
        },
        {
            title: "About",
            icon: <IconTerminal2 className="h-full w-full" />,
            href: "#",
        },
        {
            title: "LinkedIn",
            icon: <IconBrandLinkedin className="h-full w-full" />,
            href: "#",
        },
        {
            title: "Twitter",
            icon: <IconBrandX className="h-full w-full" />,
            href: "#",
        },
        {
            title: "Instagram",
            icon: <IconBrandInstagram className="h-full w-full" />,
            href: "#",
        }
    ];

    return (
        <div
            className={`fixed bottom-0 left-0 w-full flex items-center justify-center z-50 p-2 ${theme === "dark" ? "bg-black bg-opacity-50 text-white" : "bg-white bg-opacity-50 text-black"
                }`}
            style={{ backdropFilter: "blur(10px)" }}
        >
            <FloatingDock
                mobileClassName="translate-y-0" 
                items={links}
            />
            <button
                onClick={() => dispatch(toggleTheme())}
                className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center"
            >
                {theme === "dark" ? (
                    <IconSun className="h-5 w-5 text-yellow-500" />
                ) : (
                    <IconMoon className="h-5 w-5 text-blue-500" />
                )}
            </button>
        </div>
    );
}
