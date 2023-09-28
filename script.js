const truthQuestions = [
    "What's your biggest pet peeve?",
    "Have you ever had a crush on a teacher?",
    "Have you ever cheated on a partner?",
    "What's the most embarrassing thing you've done while drunk?",
    "Have you ever stolen something?",
    "Have you ever lied on your resume?",
    "What's the weirdest dream you've ever had?",
    "Have you ever been in a physical fight?",
    "What's your guilty pleasure?",
    "Have you ever snooped through someone else's phone or computer?",
    "What's the most trouble you've ever been in with the law?",
    "Have you ever faked being sick to get out of something?",
    "Have you ever cheated on a test or exam?",
    "What's the most embarrassing text message you've sent to the wrong person?",
    "Have you ever had a one-night stand?",
    "What's the most embarrassing thing your parents have caught you doing?",
    "Have you ever sent a naughty picture to someone?",
    "Have you ever had a secret crush on someone in this room?",
    "What's the worst date you've ever been on?",
    "Have you ever lied to your best friend?",
    "What's the most childish thing you still do?",
    "Have you ever had a near-death experience?",
    "Have you ever shoplifted?",
    "What's your weirdest habit?",
    "Have you ever had a crush on a coworker?",
    "What's your most irrational fear?",
    "Have you ever been caught picking your nose?",
    "What's the most embarrassing thing you've Googled?",
    "Have you ever lied about your age?",
    "Have you ever eavesdropped on a conversation you weren't supposed to hear?",
    "What's the strangest food you've ever eaten?",
    "Have you ever had a crush on someone much older or younger than you?",
    "Have you ever broken something and blamed it on someone else?",
    "What's the most embarrassing thing you've posted on social media?",
    "Have you ever had a crush on a fictional character?",
    "Have you ever been in love with someone who didn't love you back?",
    "What's the most embarrassing nickname you've ever had?",
    "Have you ever lied about your income?",
    "What's the grossest thing you've ever eaten?",
    "Have you ever been caught talking to yourself?",
    "Have you ever been fired from a job?",
    "What's the worst lie you've ever told and got away with?",
    "Have you ever had a paranormal experience?",
    "What's the most embarrassing thing you've done in front of a crush?",
    "Have you ever pretended to know something you had no clue about?",
    "What's the most embarrassing thing you've worn in public?",
    "Have you ever cheated in a game or contest?",
    "What's the most embarrassing song on your playlist?",
    "Have you ever had a crush on a friend's sibling?",
    "Have you ever had a crush on someone of the same gender?"
];


const dareChallenges = [
    "Sing a song in front of everyone.",
    "Do the Chicken Dance.",
    "Call a random contact from your phone and say you love them.",
    "Wear your clothes backward for the next 5 minutes.",
];

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

document.getElementById("truth-button").addEventListener("click", () => {
    const questionText = document.getElementById("question-text");
    const dingSound = document.getElementById("ding-sound");
    const randomTruth = getRandomItem(truthQuestions);
    
    questionText.textContent = randomTruth;
    dingSound.currentTime = 0;
    dingSound.play();
});

document.getElementById("dare-button").addEventListener("click", () => {
    const questionText = document.getElementById("question-text");
    const dingSound = document.getElementById("ding-sound");
    const randomDare = getRandomItem(dareChallenges);
    
    questionText.textContent = randomDare;
    dingSound.currentTime = 0;
    dingSound.play();
});
