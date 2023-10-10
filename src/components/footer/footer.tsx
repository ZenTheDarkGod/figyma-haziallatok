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
                    <Title level={3}>
                        hozzájárulók
                    </Title>
                    <Title level={4}>
                        csapattagok
                    </Title>
                    <ul>
                        <li>Arató András Dávid</li>
                        <li>Szudor Tamás Gábor</li>
                        <li>Takács Zoltán</li>
                    </ul>
                    <Title level={4}>
                        segítség
                    </Title>
                    <ul>
                        <li>
                            <a href="https://github.com/WarstekHUN">Balogh Levente</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Title level={3}>
                        kapcsolat
                    </Title>
                    <Title level={4}>
                        email
                    </Title>
                    <a href="mailto:neumann.nyx.team@gmail.com">
                        neumann.nyx.team@gmail.com
                    </a>
                    <Title level={4}>
                        telefon
                    </Title>
                    <p>
                        +36 20 441 7588
                    </p>
                </div>
                <div>
                    <Title level={3}>
                        licenc
                    </Title>
                    <a href="">Saját képeink licenc-je</a>
                </div>
            </div>
        </footer>
    );
});

export default Footer;