// message-generator.js

// Arrays for random selection

const subject2 = [
    "Willis", 
    "Nora",
    "Tyre",
    "Flokus",
    "Flaunt"
];

const action2 = [
    "plays",
    "flaunts",
    "kills",
    "reads",
    "educates"
]

const outcome2 = [
    "ball",
    "foot",
    "barney",
    "Nelson Mandela",
    "soup"
]

const getRandomItem2 = array2 => {
    return array2[Math.floor(Math.random() * array2.length)];
}

const getRandomMessage2 = () => {
    const subjectFinal = getRandomItem2(subject2);
    const actionFinal = getRandomItem2(action2);
    const outcomeFinal = getRandomItem2(outcome2);
  
    const message2 = `${subjectFinal} ${actionFinal} ${outcomeFinal}`;
    console.log("\n✨ Your Random Message ✨\n");
    console.log(message2);
}

// Run the message generator
getRandomMessage2();









const subjects = [
    "Your spirit animal",
    "The universe",
    "An ancient wizard",
    "A forgotten fortune cookie",
    "Your future self"
  ];
  
  const actions = [
    "whispers a secret to you",
    "predicts an unusual event",
    "warns of strange happenings",
    "offers you a powerful gift",
    "laughs mysteriously"
  ];
  
  const outcomes = [
    "you'll discover hidden talent.",
    "you'll dance in the rain.",
    "you'll meet a talking cat.",
    "you'll win a race against a snail.",
    "you'll find treasure in your backyard."
  ];
  
  // Function to pick a random item from array
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  // Function to generate a full message
  function generateMessage() {
    const subject = getRandomItem(subjects);
    const action = getRandomItem(actions);
    const outcome = getRandomItem(outcomes);
  
    const message = `${subject} ${action}, and ${outcome}`;
    console.log("\n✨ Your Random Message ✨\n");
    console.log(message);
  }
  
  // Run the message generator
  generateMessage();
  