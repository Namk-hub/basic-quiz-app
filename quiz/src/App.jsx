import { useState,useEffect } from 'react'
//questions
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
//main functions
function App() {
    const [currentQ,setCurrentQ]=useState(0)
    const[score,setScore]=useState(0)
    const[showResult,setShowResult]=useState(false)
    const [time,setTime]=useState(10);
      //gotonxt functiond make the page go to next question
    const goToNext = () => {
      const next = currentQ + 1;

      if (next < questions.length) {
        setCurrentQ(next);
        setTime(10);
      } else {
        setShowResult(true);
      }
    };
    //options and quetions function
    const handleAnswer=(option)=>{
      if (option===questions[currentQ].answer){
        setScore(score+1)
      }
      
      goToNext();
    };
     //useeffect
    useEffect(() => {
    if (showResult) return;

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev === 1) {
          clearInterval(interval);
        goToNext();
        return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQ, showResult]);
  
  
    if (showResult) {
      return (
        <div>
          <h1>Your Score: {score}/12</h1>

          <button
            onClick={() => {
              setCurrentQ(0);
              setScore(0);
              setShowResult(false);
            }}
          >
            Restart
          </button>
        </div>
      );
    }
    return (
    <div>
      <h1>Quiz App</h1>
      <h2>{questions[currentQ].question}</h2>
      {questions[currentQ].options.map((opt,index)=>{
        return(
          <button key={index} onClick={()=>handleAnswer(opt)}>{opt}</button>
        )
        })}
      <h6>time left:-{time}sec</h6>
    </div>
    )
}


export default App
