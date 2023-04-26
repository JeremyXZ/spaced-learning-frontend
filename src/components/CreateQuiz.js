
import React, {useState} from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const CreateQuiz =  ({userInput, setQuestions, questions}) => {    

    // const [quizQuestions, setQuizQuestions] = useState([])
    const {task} = userInput

    const createQuestions = async (task) => {
      console.log('task:', task);    
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: "text-davinci-003",
            prompt: `Generate quiz questions based on the following text: '${task}'\n\nQuestion:
            - Answer:`,
            max_tokens: 1024,
            n: 1,
            stop: ['Question:'],
            temperature: 0.6
        }, {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
            }
        });
        console.log('raw data:', response.data.choices);
        // const questions = response.data.choices
        //     .map(choice => choice.text.trim().split('\n'))
        //     .filter(pair => pair.length === 2)
        //     .map(pair => ({ question: pair[0], answer: pair[1] }));

        const newQuestions = response.data.choices.map(choice => {
          const [question, answer] = choice.text.trim().split('\n');
          return { question, answer };
        });




        console.log('newQuestions', newQuestions)
       
        setQuestions(newQuestions)
        // setQuizQuestions(questions)  
        console.log("newQuestionss", newQuestions)
    }
        
      return (
        <div>          
          <button onClick={() => createQuestions(task)}>Generate Questions</button>
          {questions.length > 0 && questions.map((question, index) => (
            <div key={index}>
              <h3>Questions generated</h3>
              <p>{question.question}</p>
              <p>{question.answer}</p>
            </div>
          ))}
        </div>
      )       
}
    
export default CreateQuiz






  

