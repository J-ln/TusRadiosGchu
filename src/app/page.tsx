import NavBar from "./../components/NavBar";
import Main from "@/components/Main/Main";
import About from "./../components/About";
import Footer from "@/components/Footer/Footer";
import Player from "@/components/Player/Player";
import useRadioStore from "@/store";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-0 w-full min-h-screen max-h-fit  overflow-x-hidden  scroll-smooth ">
      <NavBar />
      <Main />
      <About />
      <Footer />
      <Player />
      <div className="w-full h-20 bg-[#8f8f8f33]"></div>
    </main>
  );
}
