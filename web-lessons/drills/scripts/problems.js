const baseURL = './media/problems/'

const problems = [
    {
        type: 'multiple choice',
        question: 'What are these?',
        options: ['strings', 'numbers', 'objects'],
        answer: 'strings',
        image: 'test1.jpg',
        tip: 'Remember, strings use these guys: " !'
    },
    {
        type: 'multiple choice',
        question: 'What are these?',
        options: ['strings', 'numbers', 'objects'],
        answer: 'numbers',
        image: 'test2.jpg'
    },
    {
        type: 'multiple choice',
        question: 'What is this?',
        options: ['a string', 'a number', 'an object'],
        answer: 'an object',
        image: 'test3.jpg'
    },
    {
        type: 'multiple choice',
        question: "Who's your daddy?",
        options: ['Steve', 'Alex', 'God'],
        answer: 'Steve',
        image: 'pic.png'
    }
]

problems.forEach(problem => problem.image = baseURL + problem.image)