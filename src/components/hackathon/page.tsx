"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BackgroundLines } from "@/components/ui/background-lines";

export function Hackathon() {
    const theme = useSelector((state: any) => state.theme.theme);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const targetDate = new Date('2025-01-24T06:30:00').getTime();

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const padNumber = (num: number): string => {
        return num.toString().padStart(2, '0');
    };

    return (
        <BackgroundLines className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    CODEVERSE
                </h1>
                <p className={`text-lg md:text-xl mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    A 36 HOUR HACKATHON ON 24 & 25 JAN 2025
                </p>

                <div className={`max-w-md mx-auto mb-12 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-100"} p-6 rounded-xl`}>
                    <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Themes</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"} font-medium`}>ED TECH</div>
                        <div className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"} font-medium`}>FIN TECH</div>
                        <div className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"} font-medium`}>AGRI TECH</div>
                        <div className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"} font-medium`}>HEALTH TECH</div>
                    </div>
                    <div className={`mt-4 ${theme === "dark" ? "text-yellow-300" : "text-yellow-600"} text-sm italic`}>
                        * Detailed problem statements will be revealed soon!
                    </div>
                </div>

                <div className="flex gap-4 justify-center mb-12">
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            px-8 py-3 rounded-full 
                            ${theme === "dark"
                                ? "bg-white text-black hover:bg-gray-200"
                                : "bg-black text-white hover:bg-gray-800"
                            } 
                            transition-all duration-300 ease-in-out
                            transform hover:scale-105
                            hover:shadow-lg
                            active:scale-95
                            cursor-pointer
                            font-medium
                        `}
                    >
                        Register Now
                    </a>
                    <button
                        onClick={() => window.location.href = '#details'}
                        className={`
                            px-8 py-3 rounded-full border-2
                            ${theme === "dark"
                                ? "border-white text-white hover:bg-white hover:text-black"
                                : "border-black text-black hover:bg-black hover:text-white"
                            }
                            transition-all duration-300 ease-in-out
                            transform hover:scale-105
                            hover:shadow-lg
                            active:scale-95
                            cursor-pointer
                            font-medium
                        `}
                    >
                        More Info
                    </button>
                </div>

                <div className={`grid grid-cols-4 gap-4 max-w-2xl mx-auto ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="text-center">
                            <div className={`text-3xl md:text-5xl font-bold mb-1 ${theme === "dark" ? "text-white" : "text-black"}`}>
                                {unit === 'days' ? value : padNumber(value)}
                            </div>
                            <div className={`text-sm md:text-base capitalize ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                {unit}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundLines>
    );
}

export default Hackathon;
