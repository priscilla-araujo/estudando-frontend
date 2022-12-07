const questions = Array.from(document.querySelectorAll('.question'))

questions.forEach((item, id) => {
    item.dataset.item = id;
    item.addEventListener('click', expand)
})


function expand( element ) {

    const question = element.target.closest('.question')

    question.classList.toggle('active')

    questions.forEach(item => {
        if(question.dataset.item != item.dataset.item) {
            item.classList.remove('active')
        }
    })
}