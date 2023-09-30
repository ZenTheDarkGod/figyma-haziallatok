import { component$, useStylesScoped$ } from "@builder.io/qwik";

import Title from "../title/title";

const NavBar = component$(() => {

    return (
        <nav class="c-navbar">
            <Title level={2} isSpacingReduced={true}>
                <a href="/">figyma.</a>
            </Title>
        </nav>
    );
});

export default NavBar;