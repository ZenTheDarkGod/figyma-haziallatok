import { component$ } from "@builder.io/qwik";

import "./style.css";

import dog_logo from "~/assets/undraw_Dog_c7i6.png";
import cat_logo from "~/assets/undraw_Cat_epte.png";

interface cardProps {
    owner: string, 
    type: "cat" | "dog",
    petName: string,
    img: string, 
    url: string,
    class?: string
}

const Card = component$((props: cardProps) => {
    return (
        <div class={`card ${props.class}`} style="width: 18rem;">
            <img src={props.img} class="card-img-top"/>
                <div class="card-body">
                    <img src={ props.type === "cat" ? cat_logo : dog_logo } alt="macska logó" />
                    <div class="detail-wrapper">
                        <p>{props.owner} háziállata</p>
                        <a href={props.url} class="stretched-link">{props.petName}</a>
                    </div>
                </div>
        </div>
    );
});

export default Card;