import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("home-no-scroll");

    return () => {
      document.body.classList.remove("home-no-scroll");
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="home-page">
        <Hero />
      </main>
    </>
  );
}