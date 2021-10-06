function pyramid(j) {
    for (let i = 2; i < j + 2; i++) {
        console.log(" ".repeat(j + 2 - i) + "*".repeat((i - 2) + (i - 1)));
    }
}
pyramid(4);






