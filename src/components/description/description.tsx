import { component$, useStylesScoped$ } from "@builder.io/qwik";

import Title from "../title/title";

const Description = component$(() => {
    return (
        <p class="c-navbar">
            <Title level={1}>
                háziállatok.
            </Title>
        </p>
    );
});

export default Description;