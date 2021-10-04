function calculImc(e) {
    e.preventDefault()
    let poids = document.getElementById('poids').value
    let taille = document.getElementById('taille').value

    let imc = poids / (taille / 100 * taille / 100)

    if (imc < 18.5) {
        document.querySelector('.res').style.backgroundColor = "rgb(97, 201, 219)"
    } else if (imc < 25) {
        document.querySelector('.res').style.backgroundColor = "rgb(97, 219, 172)"
    } else if (imc < 30) {
        document.querySelector('.res').style.backgroundColor = "rgb(201, 219, 97)"
    } else if (imc < 35) {
        document.querySelector('.res').style.backgroundColor = "rgb(219, 191, 97)"
    } else if (imc < 40) {
        document.querySelector('.res').style.backgroundColor = "rgb(219, 111, 97)"
    } else {
        document.querySelector('.res').style.backgroundColor = "rgb(95, 15, 5)"
        document.querySelector('.res').style.color = "white"
    }
    document.querySelector('.res').innerHTML = "Votre IMC est de : " + parseFloat(imc).toFixed(2)
}