import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Blog from "~/components/blog/blog";
import Footer from "~/components/footer/footer";

import img from "~/assets/pets/dogs/dog_cooper.jpg";


const NAME = "Tamás";


export default component$(() => {

  const content = `
  *Sajnos Cooper nem az én háziállatom, hanem a csapattarsamé Andrisé.*
  
  ### Cooperről
  
  Cooper egy Németjuhász Husky keverék hím kutya. Nagyon játékos, kiváncsi és nagyon szereti az embereket. Sétálni ritkan kell elvinni mivel a kertben el tud játszani Rubival, és amikor mégis el kell akkor nagyon nehéz bírni vele séta közben mert mindenre kiváncsi és mindenkivel játszani akar és ez össze is jön neki mert nagyo. aranyosan néz arra akivel játszani akar.
  
  ---
  
  ### Étkezése
  naponta háromszor 1 tál ételt eszik, néha szokott étkezések közt jutalom falatot kapni.
  Ilyen táplálkozás mellett egészséges és erős tud maradni.
  
  ---
  
  ### Tisztitása
  Havonta egy fürdést igényel Cooper, természetesen ha nagyon koszos akkor muszáj megfürdenie.`;

  return (
    <>
      <Blog
        ownerName={NAME}
        petName="Cooper"
        headIMG={img}
        content={content}
        type="dog"
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
      content: `${NAME} • figyma.`
    },
    {
      name: "og:image",
      content: "/favicon.svg"
    }
  ],
};