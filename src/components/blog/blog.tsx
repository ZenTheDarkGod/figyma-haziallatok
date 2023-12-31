import { component$ } from "@builder.io/qwik";

import { parse } from "marked";

import "./style.css";

import cat_logo from "~/assets/undraw_Cat_epte.png";
import dog_logo from "~/assets/undraw_Dog_c7i6.png";

interface BlogProps {
    ownerName: string,
    petName: string,
    headIMG: string,
    content: string,
    type?: "dog" | "cat"
}

const Blog = component$((props: BlogProps) => {
    return (
        <main class="subsite-main blog">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item" aria-current="page"><a href="/">Főoldal</a></li>
                    <li class="breadcrumb-item active" aria-current="page"> {props.ownerName} </li>
                </ol>
            </nav>
            <img src={props.headIMG} alt="Kép az állatról"/>
            <div class="card-body">
                <img src={props.type === "cat" ? cat_logo : dog_logo} class={props.type} alt="macska logó" />
                <div class="detail-wrapper">
                    <p>{props.ownerName} háziállata</p>
                    <p class="highlight">{props.petName}</p>
                </div>
            </div>
            <div class="content" dangerouslySetInnerHTML={parse(props.content)}>
            </div>
        </main>
    );
});

export default Blog;