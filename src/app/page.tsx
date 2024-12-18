'use client'
import { Hero, TimelineSection, Workshops, Navbar, Footer, About } from "@/components";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Navbar />
      <Hero />
      <About />
      <TimelineSection />
      <Workshops />
      <Footer />
    </Provider>
  );
}