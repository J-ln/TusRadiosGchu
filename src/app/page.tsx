import NavBar from "./../components/NavBar";
import Main from "@/components/Main";
import About from "./../components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen max-h-fit  overflow-x-hidden  scroll-smooth">
      <NavBar />
      <Main />
      <About />
      <Footer />
      <div className="w-full h-20 bg-[#8f8f8f33]"></div>
    </main>
  );
}
