
let tournerImage = () => {
    let imgTemp2 = document.querySelector("#img2").src
    document.querySelector("#img2").src = document.querySelector("#img1").src
    let imgTemp3 = document.querySelector("#img3").src
    document.querySelector("#img3").src = imgTemp2
    let imgTemp4 = document.querySelector("#img4").src
    document.querySelector("#img4").src = imgTemp3
    document.querySelector("#img1").src = imgTemp4
}