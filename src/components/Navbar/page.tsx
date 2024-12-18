import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/features/themeSlice";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconHome,
    IconSun,
    IconMoon,
    IconUsersGroup,
    IconCalendarEvent,
    IconPhone,
    IconInfoCircle
} from "@tabler/icons-react";

export function Navbar() {
    const theme = useSelector((state: any) => state.theme.theme);
    const dispatch = useDispatch();

    const links = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-white" />,
            href: "/",
        },
        {
            title: "Events",
            icon: <IconCalendarEvent className="h-full w-full text-white" />,
            href: "/hackathon",
        },
        {
            title: "Team",
            icon: <IconUsersGroup className="h-full w-full text-white" />,
            href: "#",
        },
        {
            title: "About",
            icon: <IconInfoCircle className="h-full w-full text-white" />,
            href: "#about",
        },
        {
            title: "Contact",
            icon: <IconPhone className="h-full w-full text-white" />,
            href: "#contact",
        }
    ];

    return (
        <div className="fixed bottom-0 w-full flex justify-between items-center z-50 p-2 md:justify-center">
            <div className="md:hidden ml-4">
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className="p-2 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center"
                >
                    {theme === "dark" ? (
                        <IconSun className="h-5 w-5 text-gray-200" />
                    ) : (
                        <IconMoon className="h-5 w-5 text-gray-200" />
                    )}
                </button>
            </div>

            <div className="mr-4 md:mr-0">
                <FloatingDock
                    desktopClassName="bg-gray-50 dark:bg-neutral-900"
                    items={links}
                />
            </div>

            <div className="hidden md:block ml-4">
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className="p-2 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center"
                >
                    {theme === "dark" ? (
                        <IconSun className="h-5 w-5 text-gray-200" />
                    ) : (
                        <IconMoon className="h-5 w-5 text-gray-200" />
                    )}
                </button>
            </div>
        </div>
    );
}
