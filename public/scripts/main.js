import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButtton = document.querySelector(".modal div button")

//Pegar todos os botões com a classe 'check'
const checkButtons = document.querySelectorAll(".actions a.check")
    
 checkButtons.forEach( button => {
     //Adicionar escuta
     button.addEventListener("click", event => {

        modalTitle.innerHTML = "Marcar como lida"
        modalDescription.innerHTML = "Tem certeza que deseja marcar essa pergunta como lida?"
        modalButtton.innerHTML = "Marcar como lida"
        
     //Abrir a modal
     modal.open()
     })
 })

 const deleteButton = document.querySelectorAll(".actions a.delete")
    
 deleteButton.forEach( button => {
     //Adicionar escuta
     button.addEventListener("click", event => {

        modalTitle.innerHTML = "Excluir pergunta"
        modalDescription.innerHTML = "Tem certeza que você deseja excluir esta pergunta?"
        modalButtton.innerHTML = "Sim, excluir"
     //Abrir a modal
     modal.open()
     })
 })

