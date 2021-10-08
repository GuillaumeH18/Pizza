/*
_ je sauvegarde la 2 dans        let imgTemp2 = querySelector(#img2).src

_ img 2 prend la valeur de img 1       querySelector(#img2).src = querySelector(#img1).src

_ je sauvegarde la 3 dans imgTemp3

_ img 3 prend la valeur de imgTemp2

_ je sauvegarde la valeur de 4 dans imgTemp4

_ img 4 prend la veleur de imgTemp3

_ img 1 prend la valeur de imgTemp4
*/ 

let tournerImage = () => {
    let imgTemp2 = document.querySelector("#img2").src
    document.querySelector("#img2").src = document.querySelector("#img1").src
    let imgTemp3 = document.querySelector("#img3").src
    document.querySelector("#img3").src = imgTemp2
    let imgTemp4 = document.querySelector("#img4").src
    document.querySelector("#img4").src = imgTemp3
    document.querySelector("#img1").src = imgTemp4
}