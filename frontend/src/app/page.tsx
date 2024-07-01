import "./globals.css";

import TopBar from "@/components/Header/TopBar";
import Hero from "@/components/Hero/Hero";
import Landing from "@/components/Hero/Landing";
import Category from "@/components/Hero/category/Category";
import Footer from "@/components/Hero/footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center" >
      <TopBar />
      <Hero />
      <Landing />
      <Footer />
    </main>
  );
}
