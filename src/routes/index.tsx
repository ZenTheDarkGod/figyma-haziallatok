import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Title from "~/components/title/title";
import NavBar from "~/components/navbar/navbar";

export default  component$(() => {
  return (
    <>
      <main>
      <Title level={1} logo={true}>asd</Title>
      <Title level={1} logo={true}>asd</Title>
      <Title level={1} logo={true}>asd</Title>
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
