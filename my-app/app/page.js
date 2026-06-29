import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <>
  <Navbar/>
   <About/>
   <Skills/>
   {/* <Experience/> */}
   <Footer/>
   
    </>
  
  );
}
