'use client'
import { Hackathon, Navbar, Footer } from "@/components";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function HackathonPage() {
    return (
        <Provider store={store}>
            <Navbar />
            <Hackathon />
            <Footer />
        </Provider>
    );
}
