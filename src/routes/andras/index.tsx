import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Blog from "~/components/blog/blog";
import Footer from "~/components/footer/footer";

import img from "~/assets/pets/dogs/dog_rubi.jpg";


const NAME = "András";


export default component$(() => {

  const content = `
  
  ### Rubiról
  Rubi egy Amerikai Cocker Spániel,szuka kutya. 
  Nagyon játékos, kiváncsi és nagyon szereti az embereket. 
  Gyakran viszem sétálni, de a kertben is el tud játszani Cooperrel. 
  Séta közben mindenre kiváncsi és mindenkivel játszani akar és ez össze is jön neki, mert nagyon. aranyosan néz arra, akivel játszani akar. 
  
  ---

  ### Étkezése 
  Naponta Kétszer1 tál ételt eszik, néha szokott étkezések közt jutalom falatot kapni. 
  Ilyen táplálkozás mellett egészséges és erős tud maradni. 
  
  ---
  
  ### Tisztitása
  Cooperhez hasonlóan havonta egy fürdést igényel Rubi, természetesen ha nagyon koszos akkor muszáj megfürdenie. 
  
  ---

  ### Egyéb információk Rubi most 4éves, Oroszlányról hoztuk el, és születésnapomra kaptam.`;

  return (
    <>
      <Blog
        ownerName={NAME}
        petName="Rubi"
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
