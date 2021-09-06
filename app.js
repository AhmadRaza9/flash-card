const AddQuestionBtn = document.querySelector('.add-ques-btn');
const QuestionCard = document.querySelector('.question-card');
const closeBtn = document.querySelector('.close-btn');
const saveQesAnsSec = document.querySelector('.add-question-sec')
const QuestionInput = document.getElementById('question-input');
const AnswerInput = document.getElementById('answer-input');
const SaveBtn = document.querySelector('.submitBtn');
const ErrorMessage = document.querySelector('.alert');

function addClass(btn, card, cls) {
    btn.addEventListener('click', () => {
        card.classList.add(cls);
        ErrorMessage.classList.add('hide');
        QuestionInput.value = '';
        AnswerInput.value = '';
    });
}
function removeClass(btn, card, cls) {
    btn.addEventListener('click', () => {
        card.classList.remove(cls);
    });
}
removeClass(AddQuestionBtn, QuestionCard, 'hide');
addClass(closeBtn, QuestionCard, 'hide');


SaveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(QuestionInput.value === '' || AnswerInput.value === ''){
        ErrorMessage.classList.remove('hide');
    }
    else if(QuestionInput.value && AnswerInput.value){
        ErrorMessage.classList.add('hide');
        const html = `
    <div class="form-data">
        <h1 class="Question">${QuestionInput.value}</h1>
        <p  class="show-hide-ans">Show/Hide Answer</p>
        <h3 class="Answer hide">${AnswerInput.value}</h3>
        <div class="edit-del-btn">
          <button class="edit">Edit</button>
         <button class="delete">Delete</button>
        </div>
    </div>`;
    saveQesAnsSec.insertAdjacentHTML('afterbegin',html);
    QuestionInput.value = '';
    AnswerInput.value = '';

    }
    const mainQuestion = document.querySelector('.Question')
    const showHide = document.querySelector('.show-hide-ans');
    const answer = document.querySelector('.Answer');
    const delBtn = document.querySelector('.delete');
    const editBtn = document.querySelector('.edit');
    if(showHide){
        showHide.addEventListener('click', (e) => {
            answer.classList.toggle('hide');
        });
    }
   
    if(delBtn){
        delBtn.addEventListener('click', () => {
            const result = delBtn.closest('.form-data');
            result.remove();
            
        });
    }
    if(editBtn){
        editBtn.addEventListener('click', () => {
            const result = delBtn.closest('.form-data');
            QuestionInput.value = mainQuestion.innerText;
            result.remove();
    
        });
    }
});

