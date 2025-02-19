import React, { useState } from 'react'
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
   const [inx ,setInx] = useState(0)
   const curr = flashcards[inx]
   const handlePrev=()=>{
      setInx(inx-1)

   }
   const handleNext = () =>{
      setInx(inx+1)
   }
  return (
    <div>
      <div>
         
            
               <div>
                  <h2>{curr.question}</h2>
                  <p>{curr.answer}</p>
                  <div className='flex  gap-2'>
                    <div>
                    <button 
                    disabled = {inx === 0}
                     onClick={handlePrev}>Prev</button>
                    </div>
                    <div>
                    <button
                    disabled = {inx === flashcards.length-1}
                     onClick={handleNext}>Next</button>
                    </div> 

                  </div>
               </div>
            
      
      </div>
    </div>
  )
}

export default Card
