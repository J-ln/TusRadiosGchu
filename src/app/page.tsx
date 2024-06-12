import NavBar from "./../components/NavBar";
import Main from "@/components/Main/Main";
import About from "../components/About/About";
import Footer from "@/components/Footer/Footer";
import Player from "@/components/Player/Player";
import useRadioStore from "@/store";
import MainBackground from "@/components/MainBackground";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-10 pt-5 sm:pt-0 pb-20 w-full min-h-screen max-h-fit crt-screen  overflow-x-hidden  scroll-smooth ">
      <MainBackground />
      <NavBar />
      <Main />

      <About />
      <Footer />
      <Player />
    </main>
  );
}
