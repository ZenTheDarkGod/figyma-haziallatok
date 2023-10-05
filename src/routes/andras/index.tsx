import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Blog from "~/components/blog/blog";
import Footer from "~/components/footer/footer";

import img from "~/assets/pets/dogs/dog_rubi.jpg";


const NAME = "András";


export default component$(() => {

  const content = `### Írás alatt`;

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
