import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import Description from "../description/description";
import { wait, randomIntFromInterval } from "~/tools";

interface quote {
    author: string,
    quote: string
}

const quotes: quote[] = [
    {
        author: "Peter Wohlleben",
        quote: '“Az ember csak azt védi, amit szeret. És hogyan fejlődhetne ki bennünk jobban az állatok iránti szeretet, mint ha szárnyaink alá veszünk és gondozgatunk egy jószágot?”'
    },
    {
        author: "Carl Gustav Jung",
        quote: '“Valahányszor érintkezésbe kerülünk a természettel, tiszták leszünk. A vadak nem piszkosak - csak mi vagyunk azok. A domesztikált állatok piszkosak, de a vadon élő állatok sohasem azok.”'
    },
    {
        author: "Karafiáth Orsolya",
        quote: '“Az állatot tisztelni kell. Tudni, mire van szüksége, és nem a mi kényünk-kedvünk szerint csak játszani velük.”'
    },
    {
        author: "Denis Avey",
        quote: '“Háziállatokkal szemben semmi értelme az erőszaknak. Ha az ember megtalálja velük a hangot, mindent elkövetnek, hogy teljesítsék, amit várunk tőlük.”'
    },
    {
        author: "Evelyn Underhill",
        quote: '“Közelebb van-e Isten elképzeléséhez az a tehén, amelyet mi tejgyárrá alakítottunk, vagy az a tyúk, amelyet tojásgyárrá, mint vad őseik?”'
    },
];

function getRandomQuote() {
    return quotes[randomIntFromInterval(0, quotes.length - 1)];
}

const Quote = component$(() => {
    const quote = useSignal<quote>(getRandomQuote());

    useVisibleTask$(() => {
        async function setQuote() {

            const newQuote = getRandomQuote();
            const htmlElement = document.querySelector<HTMLElement>(".quote");
            const ifcheck = (newQuote.quote === quote.value.quote) && (newQuote.author === quote.value.author);
            

            if (!htmlElement) return;
            if (ifcheck) {
                requestAnimationFrame(setQuote);
                return;
            }
            
            htmlElement.style.color = "transparent";
            
            await wait(400);
            
            quote.value = newQuote;
            
            await wait(200);
            
            htmlElement.style.color = "var(--color)";
            console.log(htmlElement.style.opacity);

            await wait(20000);
            requestAnimationFrame(setQuote);

        }

        setQuote();
    })


    return <Description class="quote">
        <p class="text">
            {quote.value.quote}
        </p>
        <p class="author">
            - {quote.value.author}
        </p>
    </Description>
})

export default Quote;