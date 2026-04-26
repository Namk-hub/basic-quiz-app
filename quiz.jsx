import react from 'react';


const currentQuestion =() => {
  const questions = [
  {
    question: "Capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Who is known as the Father of the Nation (India)?",
    options: ["Mahatma Gandhi", "Nehru", "Subhash Chandra Bose"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Largest ocean in the world?",
    options: ["Atlantic", "Indian", "Pacific"],
    answer: "Pacific"
  },
  {
    question: "National animal of India?",
    options: ["Lion", "Tiger", "Elephant"],
    answer: "Tiger"
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7"],
    answer: "7"
  },
  {
    question: "Which country invented paper?",
    options: ["India", "China", "Egypt"],
    answer: "China"
  },
  {
    question: "Fastest land animal?",
    options: ["Lion", "Cheetah", "Horse"],
    answer: "Cheetah"
  },
  {
    question: "Which is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Malta"],
    answer: "Vatican City"
  },
  {
    question: "Who wrote the national anthem of India?",
    options: ["Rabindranath Tagore", "Bankim Chandra", "Sarojini Naidu"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "Which gas do plants absorb?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Largest desert in the world?",
    options: ["Sahara", "Arctic", "Gobi"],
    answer: "Sahara"
  }
];

return(
  <>
  {questions.map(
    (questionf)=>{
      <questionf
      question={questionf.question}
      option={questionf.question}
      answer={questionf.answer}
      />
    }

  )}
  </>
)

}

const questionf=({question,option,answer})=>{
  

}


const option_button=()=>{

}

