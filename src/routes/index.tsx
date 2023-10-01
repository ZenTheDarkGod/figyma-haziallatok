import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Title from "~/components/title/title";
import Header from "~/components/header/header";
import Main from "~/components/main/main";
import Footer from "~/components/footer/footer";

export default  component$(() => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
