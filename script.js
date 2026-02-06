console.log("test!")


const btnClick = document.querySelector("#btnClick")
const inputTxt = document.querySelector("#resultat-recherche")
const resultat = document.querySelector("#resultat")

btnClick.addEventListener('click', () => {
    console.log("Bouton cliqué !")
})

inputTxt.addEventListener('input', (e) => {
    resultat.textContent = e.target.value
})

const titre = document.querySelector('#title')
const zone = document.querySelector('#zone')
const btnAjouter = document.querySelector('#add')
const btnSupprimer = document.querySelector('#remove')

btnAjouter.addEventListener('click', () => {
    const p = document.createElement('p')
    p.textContent = `Nombre de ticket ouvert : 4`
    zone.appendChild(p)
})

btnSupprimer.addEventListener('click', () => {
    const paragraphes = zone.querySelectorAll('p')
    if (paragraphes.length > 0) {
        paragraphes[paragraphes.length -1].remove()
    }
})