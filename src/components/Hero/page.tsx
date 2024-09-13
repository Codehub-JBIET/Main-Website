import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/features/themeSlice";
import { BackgroundLines } from "@/components/ui/background-lines";
export function Hero() {
  const theme = useSelector((state : any) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2
          className={`bg-clip-text text-transparent text-center ${
            theme === "dark"
              ? "bg-gradient-to-b from-neutral-600 to-white"
              : "bg-gradient-to-b from-neutral-900 to-neutral-700"
          } text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight`}
        >
          CodeHub JBIET
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        A Coding Club where you culivate your coding skills and learn new technologies.
      </p>
        <button
          className="mt-4 px-4 py-2 border rounded-md"
          onClick={() => dispatch(toggleTheme())}
        >
          Toggle Theme
        </button>
      </BackgroundLines>
    </div>
  );
}
