import axios from 'axios';
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

export const createQuestions = async (input, updater) => {
   
    const response = await axios.post('https://api.openai.com/v1/completions', {
        engine: 'davinci',
        prompt: `Generate quiz questions based on the following text: '${input}'\n\nQuestion: Answer:`,
        max_tokens: 1024,
        n: 10,
        stop: null,
        temperature: 0.7
    }, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
        }
    });

    const questions = response.data.choices
        .map(choice => choice.text.trim().split('\n'))
        .filter(pair => pair.length === 2)
        .map(pair => ({ question: pair[0], answer: pair[1] }));

    updater(questions)
}

    

