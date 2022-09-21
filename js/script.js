const senha = document.querySelector("#inputSenha");
const slider = document.querySelector("#inputSlider");
const sliderLabel = document.querySelector("#inputLabel");
const btnGerar = document.querySelector("#btnGerar");
const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()+=0123456789";
const novaSenha = "";

sliderLabel.innerHTML = slider.value
slider.addEventListener("change", () =>{
    sliderLabel.innerHTML = slider.value
})


// function GerarSenha(){
//     let senha1 = "";
    
//     for(let x = 0, i = caracteres.length; x < slider.length; x++){
//         senha1 += caracteres.charAt(Math.floor(Math.random() * i));
//     }
  
//     senha.innerHTML = senha1
//     console.log(senha1)
// }
btnGerar.addEventListener("click", () =>{
        let senha1 = "";
    
        for(let x = 0, i = caracteres.length; x < slider.length; x++){
        senha1 += caracteres.charAt(Math.floor(Math.random() * i));
        }
  
    senha.innerHTML = senha1
    console.log(senha1)
})
