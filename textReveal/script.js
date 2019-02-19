setInterval(() => {
    const text = baffle(".data");
    text.set({
        characters:'❤☆✿♫❤☆✿♫',
        speed:130,
    });
    text.start();
    text.reveal(3000);
}, 2000);