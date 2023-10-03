import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

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
  title: "figyma.",
  meta: [
    {
      name: "description",
      content: "Oldal kiskedvenceinkől",
    },
    {
      name: "author",
      content: "A NeumannNyx alcsapata, a figyma."
    }
  ],
};
