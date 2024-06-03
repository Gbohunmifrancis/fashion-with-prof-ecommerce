import Image from "next/image";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";

export default function Home({children}) {
  return (
    <main>
       <Hero/>
       <NewProducts/>
    </main>
  );
}
