import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Tilt_Prism } from "next/font/google";
// import { Bodoni_Moda } from "next/font/google";
// import { Oswald } from "next/font/google";
import Image from "next/image";
import Man from "../man.jpg";
import Header from "@/components/Header";
import ThemeButton from "@/components/ThemeButton";

// import styles from "./page.module.css";
const vanillaRavioli = localFont({
  src: "../fonts/VanillaRavioli.ttf",
});
const presicav = localFont({
  src: "../fonts/PresicavRg-Bold.ttf",
});

const inter = Inter({ subsets: ["latin"] });
const tiltPrism = Tilt_Prism({ subsets: ["latin"] });
// const cinzel = Bodoni_Moda({ subsets: ["latin"] });
// const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <ThemeButton />
      {/* <main className="container">
        <div className="container py-5 px-5 mx-auto">
          <div className={presicav.className}>
            <div style={{ fontSize: 30, color: "black" }}>
              Why "The way of superior man" is a must read...
            </div>

            <div className={inter.className}>
              <div style={{ fontSize: 30 }}>
                We all know how men are becoming man-child nowadays.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={Man}
        height={2000}
        alt="Man"
        width={2000}
        style={{ borderRadius: 20 }}
        className="flex container mx-auto rounded-lg"
      /> */}
    </>
  );
}
