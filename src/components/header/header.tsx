import { component$, useStylesScoped$ } from "@builder.io/qwik";

import Title from "../title/title";
import Description from "../description/description";


import "./style.css";

import fishBowl from "~/assets/fish_bowl.svg";

const Header = component$(() => {
    return (
        <header class="header container-fluid">
            <div class="row">
                <div class="header-text-container col-sm-12 col-md-6">
                    <Title level={1}>
                        háziállatok.
                    </Title>
                    <Description class="quote">
                        <p class="text">
                            “Az ember csak azt védi, amit szeret. És hogyan fejlődhetne ki bennünk jobban az állatok iránti szeretet, mint ha szárnyaink alá veszünk és gondozgatunk egy jószágot?”
                        </p>
                        <p class="author">
                            — Peter Wohlleben
                        </p>
                    </Description>
                </div>
                <img class="col-sm-12 col-md-6" src={fishBowl} alt="illusztráció" />
            </div>
        </header>
    );
});

export default Header;