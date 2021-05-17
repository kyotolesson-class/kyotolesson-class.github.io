function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function genMultChoice(problem) {
    let htmlToInsert = `<h1 class="text-center">${problem.question}</h1><br>
                        <div class="d-flex justify-content-center">
                            <img width=600 src="${problem.image}">
                        </div>
                        <br>
                        <div class="d-flex justify-content-around w-100">`;
    let counter = 0;
    shuffle(problem.options).forEach(option => {
        htmlToInsert += `<div>
                            <button class="btn btn-primary btn-option" id="btn-option${counter}" data-answer="${option == problem.answer}">
                                ${option}
                            </button>
                        </div>`
        counter++;
    })
    return htmlToInsert += "</div>";
}

function newProblem() {
    const problem = problems[randNum(problems.length)]
    switch(problem.type) {
        case 'multiple choice':
            return genMultChoice(problem);
    }
}

function isCorrect(button) {
    return button.dataset.answer === "true";
}