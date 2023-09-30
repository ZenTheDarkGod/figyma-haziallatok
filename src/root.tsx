import { component$, useStylesScoped$ } from "@builder.io/qwik";
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