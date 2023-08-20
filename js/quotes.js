const quotes = [
    {
        quote: "The bird of paradise alights only upon the hand that does not grasp.",
        author: "John Berry",
    },
    {
        quote: "Dreams that do come true can be as unsettling as those that don't.",
        author: "Brett Butler",
    },
    {
        quote: "Never bend your head. Hold it high. Look the world straight in the eye.",
        author: "Helen Keller",
    },
    {
        quote: "If we all did the things we are capable of doing, we would literally astound ourselves.",
        author: "Thomas A. Edison",
    },
    {
        quote:"Only actions give life strength; only moderation gives it a charm.",
        author: "Jean Paul Richter",
    },
    {
        quote: "Friendship make prosperity more shining and lessens adversity by dividing and sharing it.",
        author: "Cicero",
    },
    {
        quote: "Always read stuff that will make you look good if you die in the middle of it.",
        author: "P. J. O'Rourke",
    },
    {
        quote: "The covers of this book are too far apart.",
        author: "Ambrose Bierce",
    },
    {
        quote: "How many a man has dated a new era in his life from the reading of a book.",
        author: "Henry David Thoreau",
    },
    {
        quote: "I've never known any trouble that an hour's reading didn't assuage.",
        author: "Charles De Secondat",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
