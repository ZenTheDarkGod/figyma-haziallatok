import { component$, useVisibleTask$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style/_vars.css";
import "./style/shared.css";


import NavBar from "~/components/navbar/navbar";
import { animCards } from "./anims";

// import 'bootstrap/dist/js/bootstrap.bundle.min';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  // useStylesScoped$(vars);
  // useStylesScoped$(styles);

  useVisibleTask$(() => {
    animCards();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("onScreen");
        } else {
          // entry.target.classList.remove("hidden");
        }
      })
    });

    document.body.querySelectorAll<HTMLElement>("*").forEach((element) => {
      element.classList.add("hidden");
      console.log("element added");
    });

    setTimeout(() => {
      const hidden = document.querySelectorAll(".hidden");
      hidden.forEach((el) => observer.observe(el));
    }, 200);
  })

  return (

    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <NavBar />
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
