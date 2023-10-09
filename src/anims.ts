
export function animCards() {

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

                element.style.transform = `rotateY(${-1 * rotationMultipier * disctancesPERCENT.x}deg) rotateX(${rotationMultipier * disctancesPERCENT.y}deg)`;

                const gradiantPos = {
                    x: boundingRect.width / 2 + disctancesPX.x,
                    y: boundingRect.height / 2 + disctancesPX.y
                }

                element.style.setProperty("--gradient-x", `${gradiantPos.x}`);
                element.style.setProperty("--gradient-y", `${gradiantPos.y}`);
            }

            element.addEventListener("mousemove", onmove);
            element.addEventListener("mouseleave", () => {
                element.style.transform = "";


                const gradiantPos = {
                    x: 0,
                    y: 0
                }

                element.style.setProperty("--gradient-x", `${gradiantPos.x}`);
                element.style.setProperty("--gradient-y", `${gradiantPos.y}`);
            })
        });
}