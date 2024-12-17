"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  ed1,
  ed2,
  ed3,
  ed4,
  bw1,
  bw2,
  bw3,
  bw4,
  cc1,
  cc2,
  cc3,
  cc4,
  cs1,
  cs2,
  cs3,
  cs4,
  cs5
} from "../../../public";
import { useSelector } from "react-redux";
export function TimelineSection() {
  const theme = useSelector((state: any) => state.theme.theme);
  const data = [
    {
      title: "15 Sep 2024",
      content: (
        <div>
          <h1
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-2xl md:text-lg font-bold mb-8`}
          >
            Engineer's Day
          </h1>
          <p
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-sm md:text-sm font-normal mb-8`}
          >
           <i> Codehub in Collaboration with Alumni of JBIET.</i>
        </p>
          <p
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-sm md:text-sm font-normal mb-8`}
          >
                        <span className="text-lg font-bold">Event Highlights</span> <br />{" "}
            <br />

            <strong>Event Collaboration:</strong> CodeHub in collaboration with
            Our alumni at JBIET hosted an insightful event about the importance of Engineers.
            <br />
            <strong>Interaction with students:</strong> Students actively participated in the session, clarified their doubts, and 
            explored the corporate world in their own words, Students got to know the real scenarios of an engineer daily.
            <br />
            <strong>Website Launch Setup:</strong> Codehub Website has been launched by our Principal, gave valuable insights on engineers and their importance 
            <br />
            <strong>Event Conclusion:</strong> The event concluded with a rapid-fire with Alumni, a day in their workspace.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={ed1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={ed2}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={ed3}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={ed4}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    },
    {
      title: "22 Mar 2024",
      content: (
        <div>
          <h1
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-2xl md:text-lg font-bold mb-8`}
          >
            Workshop on creating smart contracts on blockchain
          </h1>
          <p
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-sm md:text-sm font-normal mb-8`}
          >
           <i> Codehub in Collaboration with Shardeum.</i>
        </p>
          <p
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-sm md:text-sm font-normal mb-8`}
          >
                        <span className="text-lg font-bold">Event Highlights</span> <br />{" "}
            <br />

            <strong>Event Collaboration:</strong> CodeHub in collaboration with
            Shardeum at JBIET hosted an insightful event centered around
            blockchain technology.
            <br />
            <strong>Blockchain Exploration:</strong> Participants embarked on a
            journey into the world of blockchain, exploring the fundamental
            concepts of blockchain and its applications beyond cryptocurrency.
            <br />
            <strong>Metamask Setup:</strong> Participants set up their first
            Metamask wallets and delved into creating their debut smart
            contracts using Solidity.
            <br />
            <strong>Event Conclusion:</strong> The event concluded with a quiz
            where the top 3 participants were awarded.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={bw1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={bw2}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={bw3}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={bw4}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    },
    {
      title: "13 Mar 2024",
      content: (
        <div>
          <h1
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-2xl md:text-lg font-bold mb-8`}
          >
            Cybersecurity Awareness Initiative in Collaboration with iCompaas
          </h1>
          <p
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-sm md:text-sm font-normal mb-8`}
          >
           <i> Codehub in Collaboration with iCompaas.</i>
        </p>
          <p
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-sm md:text-sm font-normal mb-8`}
          >
            <span className="text-lg font-bold">Event Highlights</span> <br />{" "}
            <br />
            <b>Latest Trends & Threats : </b> Participants got up-to-date
            insights into the evolving world of cybersecurity. <br />
            <b>Critical Awareness : </b>
            Understanding the vital role of cybersecurity awareness in today's
            digital landscape. <br />
            <b>Networking : </b> An opportunity to connect with iCompaas experts
            and fellow tech enthusiasts.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={cs1}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={cs3}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={cs4}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={cs5}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    },
    {
      title: "25 Nov 2023",
      content: (
        <div>
          <h1
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-2xl md:text-lg font-bold mb-8`}
          >
            Employability Potentional Workshop
          </h1>
          <p
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-sm md:text-sm font-normal mb-8`}
          >
           <i> Codehub in Collaboration with Carrer Crafters.</i>
        </p>
          <p
            className={` ${
              theme === "dark" ? "text-neutral-200" : "text-neutral-800"
            } text-sm md:text-sm font-normal mb-8`}
          >
            <span className="text-lg font-bold">Event Highlights</span> <br />{" "}
            <br />
            <b>AI Insights:</b> Students explored how AI can be effectively
            utilized across various fields, preparing them for future
            technological advancements. <br />
            <b>Career Development:</b> The session provided actionable
            strategies and steps to secure positions in leading product
            companies. <br />
            <b>Enthusiastic Participation:</b> The vibrant engagement from
            students created a dynamic and enjoyable learning experience.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={cc1}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={cc2}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={cc3}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={cc4}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    }
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
