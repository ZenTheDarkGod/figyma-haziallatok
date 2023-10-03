import { component$ } from "@builder.io/qwik";

import Title from "../title/title";


import "./style.css";


const Footer = component$(() => {
    return (
        <footer class="container-fluid">
            <div class="row row-cols-sm-1 row-cols-md-4">
                <div>
                    <Title level={2} isSpacingReduced={true}>
                        figyma.
                    </Title>
                    <p>
                        © 2023 Minden jog fenntartva
                    </p>
                </div>
                <div>
                        <Title level={4}>
                        csapattagok
                    </Title>
                    <ul>
                        <li>Szudor Tamás Gábor</li>
                        <li>Takács Zoltán</li>
                        <li>Arató András Dávid</li>
                    </ul>
                </div>
                <div>
                    <Title level={4}>
                        email
                    </Title>
                    <p>
                        neumann.nyx.team@gmail.com
                    </p>
                </div>
                <div>
                    <Title level={4}>
                        telefon
                    </Title>
                    <p>
                        +36 20 441 7588
                    </p>
                </div>
            </div>
        </footer>
    );
});

export default Footer;