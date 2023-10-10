import { component$ } from "@builder.io/qwik";

import "./style.css";

const Blob = component$(() => {
    return (
        <div class={`following-blob`}></div>
    );
});

export default Blob;