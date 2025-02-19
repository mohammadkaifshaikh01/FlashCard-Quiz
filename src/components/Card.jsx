import React from 'react'
const flashcards = [
   {
     id: 1,
     question: "What is the capital of France?",
     answer: "Paris",
   },
   {
     id: 2,
     question: "What is 5 + 7?",
     answer: "12",
   },
   {
     id: 3,
     question: "Who wrote 'To Kill a Mockingbird'?",
     answer: "Harper Lee",
   },
   {
     id: 4,
     question: "What is the chemical symbol for water?",
     answer: "H2O",
   },
   {
     id: 5,
     question: "What is the speed of light in a vacuum?",
     answer: "299,792,458 meters per second",
   }
 ];

const Card = () => {
  
  return (
    <div>
      <div>
         {flashcards.map((elem)=>{
            return(
               <div key={elem.id}>
                  <h2>{elem.question}</h2>
                  <p>{elem.answer}</p>
                  <div className='flex  gap-2'>
                    <div>
                    <button>Prev</button>
                    </div>
                    <div>
                    <button>Next</button>
                    </div> 

                  </div>
               </div>
            )
         })}
      </div>
    </div>
  )
}

export default Card
