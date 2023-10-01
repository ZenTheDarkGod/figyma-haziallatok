import { component$, Slot } from "@builder.io/qwik";

import "./style.css";

interface DescProps {
    class?: string | null,
}

const Description = component$((props: DescProps) => {
    return (
        <div class={`c-description ${props.class}`}>
            <Slot />
        </div>
    );
});

export default Description;