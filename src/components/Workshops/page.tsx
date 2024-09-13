"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

const cardData = [
    {
        title: "Make things float in air",
        description: "Hover over this card to unleash the power of CSS perspective",
        imageUrl:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://twitter.com/mannupaaji"
    },
    {
        title: "Explore the beauty of the ocean",
        description: "Discover the mysteries of the deep blue sea with this card",
        imageUrl:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://twitter.com/exploreoceans"
    },
    {
        title: "Reach for the stars",
        description: "Hover over this card to feel like you're floating in space",
        imageUrl:
            "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://twitter.com/starscape"
    },
    {
        title: "Fly above the mountains",
        description: "Experience the breathtaking views of mountain ranges",
        imageUrl:
            "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://twitter.com/mountainfly"
    }
];

export function Workshops() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            {cardData.map((card, index) => (
                <CardContainer key={index} className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            {card.title}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            {card.description}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={card.imageUrl}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem> 
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href={card.link}
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    );
}