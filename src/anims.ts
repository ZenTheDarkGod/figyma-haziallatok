
import { randomIntFromInterval } from "./tools";

export function anim() {

    /**
     * caluculate disctance between cursor and card middle
     * convert to percentage
     * set transform to "transform: rotateY($DISTPERCENT) rotateX($DISTPERCENT);"
     */

    document.querySelectorAll<HTMLElement>(".card").forEach(
        (element: HTMLElement) => {
            function onmove(event: MouseEvent) {
                const rotationMultipier = 10;

                const boundingRect = element.getBoundingClientRect();
                const boundingRectMiddle = {
                    x: boundingRect.left + boundingRect.width / 2,
                    y: boundingRect.top + boundingRect.height / 2,
                };

                const disctancesPX = {
                    x: (boundingRectMiddle.x - event.clientX) * -1,
                    y: (boundingRectMiddle.y - event.clientY) * -1
                }

                const disctancesPERCENT = {
                    x: disctancesPX.x / (boundingRect.width / 2),
                    y: disctancesPX.y / (boundingRect.height / 2)
                }

                // element.style.transform = `rotateY(${-1 * rotationMultipier * disctancesPERCENT.x}deg) rotateX(${rotationMultipier * disctancesPERCENT.y}deg)`;

                element.style.setProperty("rotate", `${disctancesPERCENT.y} ${-1 * disctancesPERCENT.x} 0 ${rotationMultipier}deg`)

                const gradiantPos = {
                    x: boundingRect.width / 2 + disctancesPX.x / 2,
                    y: boundingRect.height / 2 + disctancesPX.y / 2
                }

                element.style.setProperty("--rotate-y", `${disctancesPERCENT.y}`);
                element.style.setProperty("--rotate-x", `${-1 * disctancesPERCENT.x}`);

                element.style.setProperty("--gradient-x", `${gradiantPos.x}`);
                element.style.setProperty("--gradient-y", `${gradiantPos.y}`);
            }

            element.addEventListener("mousemove", onmove);
            element.addEventListener("mouseleave", () => {
                element.style.setProperty("rotate", `0 0 0 0deg`)


                const gradiantPos = {
                    x: 0,
                    y: 0
                }

                element.style.setProperty("--gradient-x", `${gradiantPos.x}`);
                element.style.setProperty("--gradient-y", `${gradiantPos.y}`);
            })
        });

    /**
     * SCROLLING ANIM
     */

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("onScreen");
            } else {
                // entry.target.classList.remove("hidden");
            }
        })
    });

    document.body.querySelectorAll<HTMLElement>("*").forEach((element) => {
        element.classList.add("hidden");
        console.log("element added");
    });

    setTimeout(() => {
        const hidden = document.querySelectorAll(".hidden");
        hidden.forEach((el) => observer.observe(el));
    }, 200);

    /**
     * BLOB
     */

    const blob = document.querySelector<HTMLElement>(".following-blob");
    if (!blob) {
        console.log("No blob");
        
        return;
    }

    window.addEventListener("mousemove", (event: MouseEvent) => {
        console.log("ysd");
        
        blob.style.setProperty("left", `${event.clientX}px`);
        blob.style.setProperty("top", `${event.clientY}px`);

        blob.style.setProperty("rotate", `0 0 ${randomIntFromInterval(0, 1)} ${randomIntFromInterval(0, 360)}deg`)
    })
}