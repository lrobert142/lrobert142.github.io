let page_type = document.body.dataset.pageType;

if (page_type === '404') {
    let quotes = [
        "There are 10 people in the world, those who can read BINARY and those who cannot.",
        "A clever person solves a problem. A wise person AVOIDS it.",
        "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
        "Before software can be reusable it first has to be usable.",
        "The significant problems we face cannot be solved by the same level of thinking that created them.",
        "Why do we never have time to do it right, but always have time to DO IT OVER?",
        " It’s hard enough to find an error in your code when you’re looking for it; its even harder when you’ve ASSUMED your code is ERROR-FREE.",
        "FAST. GOOD. CHEAP. Choose any two.",
        "Adding manpower to a late software project makes it later.",
        "It is not enough for code to work.",
    ];

    document.getElementsByClassName('quote')[0].innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}
