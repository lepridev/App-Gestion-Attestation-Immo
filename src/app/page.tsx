import OptionBox from "@/components/box/OptionBox";
import Button from "@/components/button/Button";
import Image from "next/image";
import Accueil from "./guide/Accueil";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Accueil />
    </main>
  );
}
