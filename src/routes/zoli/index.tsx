import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Blog from "~/components/blog/blog";
import Footer from "~/components/footer/footer";

import img from "~/assets/pets/cats/black_cat.jpg";


const NAME = "Zoli";


export default component$(() => {

  const content = `### asd \n shdgfs`;

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
