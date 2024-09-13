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
            icon: <IconHome className="h-full w-full text-white" />, // Set icon color to white
            href: "#",
        },
        {
            title: "Events",
            icon: <IconCalendarEvent className="h-full w-full text-white" />,
            href: "#",
        },
        {
            title: "Team",
            icon: <IconUsersGroup className="h-full w-full text-white" />,
            href: "#",
        },
        {
            title: "About",
            icon: <IconInfoCircle className="h-full w-full text-white" />,
            href: "#",
        },
        {
            title: "Contact",
            icon: <IconPhone className="h-full w-full text-white" />,
            href: "#",
        }
    ];

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50 p-2">
            <FloatingDock
                desktopClassName="bg-gray-50 dark:bg-neutral-900"
                items={links}
            />
            <button
                onClick={() => dispatch(toggleTheme())}
                className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center"
            >
                {theme === "dark" ? (
                    <IconSun className="h-5 w-5 text-gray-200" />
                ) : (
                    <IconMoon className="h-5 w-5 text-gray-200" />
                )}
            </button>
        </div>
    );
}
