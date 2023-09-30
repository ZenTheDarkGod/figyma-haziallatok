import { component$, IntrinsicElements, Slot } from "@builder.io/qwik";

type level = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface titleProps {
    level: level;
    logo?: boolean;
}

const levelLookupDict = {
    1 : <h1 class="title"> <Slot /> </h1>,
    2 : <h2 class="title"> <Slot /> </h2>,
    3 : <h3 class="title"> <Slot /> </h3>,
    4 : <h4 class="title"> <Slot /> </h4>,
    5 : <h5 class="title"> <Slot /> </h5>,
    6 : <h6 class="title"> <Slot /> </h6>,
    7 : <h7 class="title"> <Slot /> </h7>
}

const Title = component$((props: titleProps) => {
    if (!props.logo) {
        return (
            <>
                {levelLookupDict[props.level]}
            </>
        );
    }
    return (
        <>
            <h1 class="title logo-title"> <Slot /> </h1>
        </>
    );
});

export default Title;