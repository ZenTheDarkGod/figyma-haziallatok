import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Blog from "~/components/blog/blog";
import Footer from "~/components/footer/footer";

import img from "~/assets/pets/dogs/dog_cooper.jpg";


const NAME = "Tomi";


export default component$(() => {

  const content = `### asd \n shdgfs`;

  return (
    <>
      <Blog
        ownerName={NAME}
        petName="Cooper"
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