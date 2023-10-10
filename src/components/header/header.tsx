import { component$ } from "@builder.io/qwik";

import Title from "../title/title";
import Quote from "../quote/quote";


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
                    <Quote />
                </div>
                <img class="col-sm-12 col-md-6" src={fishBowl} alt="illusztráció" />
            </div>
        </header>
    );
});

export default Header;