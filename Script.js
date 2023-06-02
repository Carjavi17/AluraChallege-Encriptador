const textArea = document.querySelector(".area-del-texto");
const mensaje = document.querySelector(".area-del-mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    copia.style.display = "block"

}

function botonDesencriptar(){
    const textoDesencriptado = desEncriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";    
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" ,"ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desEncriptar(stringDesencriptada){
    let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" ,"ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


