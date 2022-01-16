export const conditionals = [
  {
    question: "What will the following code log to the console?",
    code: `
  const age = 18

  if (age >= 18) {
    console.log("You are allowed to have a drink")
  } else {
    console.log("You are not allowed to have a drink")
  }`,
    choices: [
      { value: "You are allowed to have a drink", id: 1 },
      { value: "You are not allowed to have a drink", id: 2 },
    ],
    correctChoiceId: 1,
  },
  {
    question: "What will the following code log to the console?",
    code: `
  const name = "Johnn"

  if (name == "John") {
    console.log("Your name is John")
  } else if (name == "Jon") {
    console.log("Your name is Jon")
  } else {
    console.log("Idk what your name is")
  }`,
    choices: [
      { value: "Your name is John", id: 1 },
      { value: "Your name is Jon", id: 2 },
      { value: "Idk what your name is", id: 3 },
    ],
    correctChoiceId: 3,
  },
  {
    question: "What will the following code log to the console?",
    code: `
  switch (10) {
    case 5:
      console.log("Your number is 5")
      break
    case 10:
      console.log("Your number is 10")
      break
    case 15:
      console.log("Your number is 15")
      break
    default:
      console.log("Idk what your number is")
      break
  }`,
    choices: [
      { value: "Your number is 5", id: 1 },
      { value: "Your number is 10", id: 2 },
      { value: "Your number is 15", id: 3 },
      { value: "Idk what your number is", id: 4 },
    ],
    correctChoiceId: 2,
  },
];
