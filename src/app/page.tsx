'use client'
import { Hero, TimelineSection, Workshops } from "@/components";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Hero />
      <TimelineSection/>
      <Workshops />
    </Provider>
  );
}