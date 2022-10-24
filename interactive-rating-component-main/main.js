const escolha = document.querySelector(".list").value;
//const escolhido = document.querySelector("escolhido").value;
const itens = document.querySelector('.itens');

console.log(itens);
itens.addEventListener('click', (evt) =>{
    const element = evt.target;
    document.querySelectorAll('dt').forEach(item => {
        item.classList.remove('selecionado')
    }) 
    element.classList.add('selecionado')
    console.log(evt)

    localStorage.setItem('id', element.id)
})


