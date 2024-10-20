import Navbar from "@/components/Header/Navbar";
import "./globals.css";

import TopBar from "@/components/Header/TopBar";
import Hero from "@/components/Hero/Hero";
import Landing from "@/components/Hero/Landing";
import Footer from "@/components/Hero/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center px-3" >
      <TopBar />
      <Navbar Bg={true}/>
      <Hero />
      <Landing />
      <Footer />
    </main>
  );
}
