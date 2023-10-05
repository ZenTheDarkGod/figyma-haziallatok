import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Blog from "~/components/blog/blog";
import Footer from "~/components/footer/footer";

import img from "~/assets/pets/cats/black_cat.jpg";


const NAME = "Zoli";


export default component$(() => {

  const content = `
  ### Kormiról
  Kormi 6 éve április elsején lett a családunk tagja. Viselkedésén nagyon is meglátszik, hogy bolondok napján született, hiszen nagyon játékos és sokszor logikátlan dolgokat csinál. 
  Kormi az átlagos kandúr macskánál jóval nagyobb és 6-7 kilogramm nehéz.

  Az átlagos kandúrok 3-4 kilógramm nehezek ilyen korukban.

  ---
  
  ### Etetése
  Kormi általában naponta kétszer eszik, egyszer reggel és egyszer este. Ezen kívül mindig van kirakva neki száraz ennivaló, amit bármikor ehet. 

  A legtöbb macskának ez a fajta etetés megfelel, de lehetséges hogy egy macska naponta háromszor eszik, esetlegesen nem raknak ki neki száraz tápot.

  ---
  
  ### Tisztántartására
  Kormi almát általában naponta kétszer takarítjuk, hogy minden etetés után el tudjon menni a mosdóba. Szőrét pedig akkor fésüljük, amikor hullik, hiszen általában szép tisztán tartja magát.

  Általánosságban jó ha minden etetés előtt kitakarítjuk a macska almot és hetente fésüljük a macska szőrét. (Esetlegesen fürdetni is kellhet a macskát, bár ez csak abban az esetben ajánlott, ha nem tudja rendesen megtisztítani magát)

  ---
  
  ### Nevelése
  Kormit még kis korában megtanítottuk sok dologra jutalom falatok segítségével. Például amikor 1-1,5 éves volt megtanítottam pacsit adni, amit a mai napig csinálunk.

  Általában a jutalom falatos nevelés a legtöbb macskával működik, és gyorsan tanulnak.
  
  ---

  ### Megfelelő tartási körülmények 
  Az ideális körülmények macskatartáshoz magukban foglalják a biztonságos, tágas környezetet, a természetes fényforráshoz való hozzáféréssel, a kiegyensúlyozott táplálékot, a rendszeres állatorvosi ellátást, valamint az elkötelezett játék- és interakciós időt. Egy szeretetteljes és türelmes hozzáállás, valamint egy rutin kialakítása biztosítja a boldog és kielégítő macskatársat.`;

  return (
    <>
      <Blog
        ownerName={NAME}
        petName="Kormi"
        headIMG={img}
        content={content}
      />
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: `${NAME} • figyma.`,
  meta: [
    {
      name: "description",
      content: "",
    },
    {
      name: "author",
      content: "Zoli • figyma."
    },
    {
      name: "og:image",
      content: "/favicon.svg"
    }
  ],
};
