import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Header from "~/components/header/header";
import Main from "~/components/main/main";
import Footer from "~/components/footer/footer";

export default component$(() => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "figyma.",
  meta: [
    {
      name: "description",
      content: "Üdvözöljük a Figyma csapat weboldalán! Célunk, hogy tapasztalatainkkal és tanácsainkkal segítsünk a háziállatok szerelmeseinek. Két kutyus és egy cica társaságában éljük mindennapjainkat, és most ezeket az élményeinket osztjuk meg Önnel. Lépjen be közénk és találja meg velünk a háziállatok boldogságának és egészségének kulcsait!",
    },
    {
      name: "author",
      content: "A NeumannNyx alcsapata, a figyma."
    },
    {
      name: "og:image",
      content: "/favicon.svg"
    }
  ],
};
