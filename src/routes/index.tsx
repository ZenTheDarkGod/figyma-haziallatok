import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Title from "~/components/title/title";
import Header from "~/components/header/header";

export default  component$(() => {
  return (
    <>
      <Header/>
      <main>
      <Title level={2} isSpacingReduced={true}>asd</Title>
      <Title level={2} isSpacingReduced={true}>asd</Title>
      <Title level={2} isSpacingReduced={true}>asd</Title>
      </main>
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
