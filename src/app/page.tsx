'use client'
import { Hero, Navbar } from "@/components";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Hero />
      <Navbar />
    </Provider>
  );
}
