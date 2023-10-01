import { component$ } from "@builder.io/qwik";

import Title from "../title/title";
import Description from "../description/description";
import Card from "../card/card";

import "./style.css";

import cat from "~/assets/cat.jpg";

const Main = component$(() => {
    return (
        <main>
            <div class="main-text-container col-sm-12">
                <Title level={2}>
                    háziállataink.
                </Title>
                <Description class="quote">
                    <p class="text">
                        Kisállataink örömet és társaságot hoznak az életünkbe. Az feltételen szeretetük gazdagítja napjainkat. Játékos kedvükkel és vigasztaló ölelésükkel  mérhetetlen boldogsággal töltik meg szívünket.
                    </p>
                </Description>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <Card
                        class="col-sm-12 col-md-4"
                        owner="Zoli"
                        type="cat"
                        petName="Kormi"
                        img={cat}
                        url="/zoli/"
                    />
                    <Card
                        class="col-sm-12 col-md-4"
                        owner="Zoli"
                        type="cat"
                        petName="Kormi"
                        img={cat}
                        url="/zoli/"
                    />
                    <Card
                        class="col-sm-12 col-md-4"
                        owner="Zoli"
                        type="cat"
                        petName="Kormi"
                        img={cat}
                        url="/zoli/"
                    />
                </div>
            </div>
        </main>
    );
});

export default Main;