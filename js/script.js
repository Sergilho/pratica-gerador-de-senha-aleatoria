
let senha = document.querySelector("#inputSenha");
let slider = document.querySelector("#inputSlider");
let sliderLabel = document.querySelector("#inputLabel");
let btnGerar = document.querySelector("#btnGerar");


    /*Interatividade da label com o slider*/
sliderLabel.innerHTML = slider.value
slider.addEventListener("change", () =>{
    sliderLabel.innerHTML = slider.value
})

    /* Função que é ativada com o botão ao clicar */
btnGerar.addEventListener("click", () =>{
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()+=0123456789";
    let senha1 = "";

    for(let x = 0; x < slider.value; x++){
        senha1 += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    senha.classList.remove("hide")
    senha.innerHTML = senha1; 
    console.log(senha1)
})
