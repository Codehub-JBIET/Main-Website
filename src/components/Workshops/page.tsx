"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { bw, fw,fe1, be3, ml1, ma1 } from "../../../public";
import {useSelector} from 'react-redux';

export function Workshops() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const theme = useSelector((state : any) => state.theme.theme);
  return (
        <div className={`w-full h-full py-20 ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}>
      <h2 className={`max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"} font-sans`}>
        Upcoming Workshops.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
    const theme = useSelector((state : any) => state.theme.theme);
  return (
    <>
      {/* {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })} */}
      <div className={`${theme=='dark'?'text-white':'text-black'} text-4xl`}>
        Registraions will be open soon!
      </div>
    </>
  );
};

const data = [
  {
    category: "Frontend Development",
    title: "Build Beautiful Websites!",
    src: fe1,
    content: <DummyContent />,
  },
  {
    category: "Backend Development",
    title: "Build the Engine of the Web!.",
    src: be3,
    content: <DummyContent />,
  },
  {
    category: "Machine Learning",
    title: "Unlock the Power of AI",
    src: ml1,
    content: <DummyContent />,
  },

  {
    category: "Mobile App Development",
    title: " Create the Future of Apps",
    src: ma1,
    content: <DummyContent />,
  },
];
