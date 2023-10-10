
function wait(miliseconds: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, miliseconds);
    })
}

function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export { wait, randomIntFromInterval };