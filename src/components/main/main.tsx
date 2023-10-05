import { component$ } from "@builder.io/qwik";

import Title from "../title/title";
import Description from "../description/description";
import Card from "../card/card";

import "./style.css";

import kormi from "~/assets/pets/cats/black_cat.jpg";
import rubi from "~/assets/pets/dogs/dog_rubi.jpg"
import cooper from "~/assets/pets/dogs/dog_cooper.jpg"

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
                        img={kormi}
                        url="/zoli/"
                    />
                    <Card
                        class="col-sm-12 col-md-4"
                        owner="András"
                        type="dog"
                        petName="Rubi"
                        img={rubi}
                        url="/andras/"
                    />
                    <Card
                        class="col-sm-12 col-md-4"
                        owner="Tomi"
                        type="dog"
                        petName="Cooper"
                        img={cooper}
                        url="/tomi/"
                    />
                </div>
            </div>
        </main>
    );
});

export default Main;