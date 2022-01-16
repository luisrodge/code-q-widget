export const operators = [
  {
    question: "What will the following code print to the console?",
    code: `
  const a = true
  const b = true
  
  console.log(a && b)
  `,
    choices: [
      { value: "true", id: 1 },
      { value: "false", id: 2 },
    ],
    correctChoiceId: 1,
  },
  {
    question: "What will the following code print to the console?",
    code: `
  const a = true
  const b = false
  
  console.log(a && b)
  `,
    choices: [
      { value: "true", id: 1 },
      { value: "false", id: 2 },
    ],
    correctChoiceId: 2,
  },
  {
    question: "What will the following code print to the console?",
    code: `
  const a = false
  const b = true
  
  console.log(a || b)
  `,
    choices: [
      { value: "true", id: 1 },
      { value: "false", id: 2 },
    ],
    correctChoiceId: 1,
  },
  {
    question: "What will the following code print to the console?",
    code: `
  const a = false
  const b = false
  
  console.log(a || b)
  `,
    choices: [
      { value: "true", id: 1 },
      { value: "false", id: 2 },
    ],
    correctChoiceId: 2,
  },
  {
    question: "What will the following code print to the console?",
    code: `
  let x = 5

  x += 5  

  console.log(x)
  `,
    choices: [
      { value: "5", id: 1 },
      { value: "15", id: 2 },
      { value: "10", id: 3 },
    ],
    correctChoiceId: 3,
  },
  {
    question: "What will the following code print to the console?",
    code: `
  const x = 5
  const y = 10

  console.log(x == y)
  `,
    choices: [
      { value: "false", id: 1 },
      { value: "true", id: 2 },
    ],
    correctChoiceId: 1,
  },
  {
    question: "What will the following code print to the console?",
    code: `
  const x = 5
  const y = 5

  console.log(x == y)
  `,
    choices: [
      { value: "true", id: 1 },
      { value: "false", id: 2 },
    ],
    correctChoiceId: 1,
  },
  {
    question: "What will the following code print to the console?",
    code: `
  const x = 5
  const y = 5

  console.log(x > y)
  `,
    choices: [
      { value: "true", id: 1 },
      { value: "false", id: 2 },
    ],
    correctChoiceId: 2,
  },
  {
    question: "What will the following code print to the console?",
    code: `
  const x = 5
  const y = 10

  console.log(x >= y)
  `,
    choices: [
      { value: "true", id: 1 },
      { value: "false", id: 2 },
    ],
    correctChoiceId: 2,
  },
  {
    question: "What will the following code print to the console?",
    code: `
  const x = 10
  const y = 20

  console.log(x <= y)
  `,
    choices: [
      { value: "true", id: 1 },
      { value: "false", id: 2 },
    ],
    correctChoiceId: 1,
  },
  {
    question: "What will the following code print to the console?",
    code: `
  const x = true

  console.log(!x)
  `,
    choices: [
      { value: "true", id: 1 },
      { value: "false", id: 2 },
    ],
    correctChoiceId: 2,
  },
];
