const question = [
    {
        'que': "Which of the following is a markup language?",
        'a': "HTML",
        'b': "CSS",
        'c': "JavaScript",
        'd': "PHP",
        'correct': "a"
    },
    {
        'que': "Which of the following is a markup language?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b"
    },
    {
        'que': "Which of the following is a markup language?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notion",
        'd': "Helicopters Terminal Motoboats Lamborginis",
        'correct': "b"
    },
]

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.option')
let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;

const loadQuestion = () => {
    if (index === total) {
        return endQuit()
    } else {
        reset()
        const data = question[index]
        console.log(data)
        quesBox.innerText = `${index + 1}) ${data.que}`;
        optionInputs[0].nextElementSibling.innerText = data.a;
        optionInputs[1].nextElementSibling.innerText = data.b;
        optionInputs[2].nextElementSibling.innerText = data.c;
        optionInputs[3].nextElementSibling.innerText = data.d;
    }
}

const sumbitQuiz = () => {
    const data = question[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    loadQuestion()
    return;
}



const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value
        }
    })
    return answer;
}

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    })
}

const endQuit = () =>{
    document.getElementById('box').style.height = '100px'
    document.getElementById('box').innerHTML = `
    <h3>Thanks for </div>
        <h2> ${right} / ${total} correct </h2>
    `
}

loadQuestion()