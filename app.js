// La función que permite cifrar el mensaje de acuerdo a las especificaciones
function cipher() {
    
    let resulText = '';
    let textToCipher = document.getElementById('textImput').value;
    for (let i = 0; i < textToCipher.length; i++) {
        switch (textToCipher[i]) {
            case 'e':
                resulText += 'enter';
                break;
            case 'i':
                resulText += 'imes';
                break;
            case 'a':
                resulText += 'ai';
                break;
            case 'o':
                resulText += 'ober';
                break;
            case 'u':
                resulText += 'ufat';
                break;
            default:
                resulText += textToCipher[i];
        }
    }
    return resulText;
}


// La función que permite descifrar el mensaje cifrado
function decipher() {
    let resulText = '';
    let textToDecipher = document.getElementById('textImput').value;
    for (let i = 0; i < textToDecipher.length; i++) {
        if (textToDecipher.startsWith('enter', i)) {
            resulText += 'e';
            i += 4; // Saltar los siguientes 4 caracteres ('enter')
        } else if (textToDecipher.startsWith('imes', i)) {
            resulText += 'i';
            i += 3; // Saltar los siguientes 3 caracteres ('imes')
        } else if (textToDecipher.startsWith('ai', i)) {
            resulText += 'a';
            i += 1; // Saltar los siguientes 2 caracteres ('ai')
        } else if (textToDecipher.startsWith('ober', i)) {
            resulText += 'o';
            i += 3; // Saltar los siguientes 4 caracteres ('ober')
        } else if (textToDecipher.startsWith('ufat', i)) {
            resulText += 'u';
            i += 3; // Saltar los siguientes 4 caracteres ('ufat')
        } else {
            resulText += textToDecipher[i];
        }
    }
    return resulText;
}

// Función para validar si el texto contiene solo letras minúsculas y sin acentos
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/; // Expresión regular que permite solo letras minúsculas y espacios
    return regex.test(texto);
}

// La función que muestra el mensaje cifrado y oculta la imagen y las etiquetas <p>
function showEncryptedText() {
    let content = document.getElementById('textImput').value;

    // Validar texto antes de cifrar
    if (!validarTexto(content)) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        return;
    }

    let encryptedText = cipher(content);
    document.getElementById('result').textContent = encryptedText;
    document.getElementById('copy').removeAttribute('hidden'); // Mostrar botón copiar
    document.getElementById('cipheredImage').style.display = 'none'; // Ocultar imagen
    document.getElementById('nomensaje1').style.display = 'none'; // Ocultar primer <p>
    document.getElementById('nomensaje2').style.display = 'none'; // Ocultar segundo <p>
}

// La función que muestra el mensaje descifrado y oculta la imagen y las etiquetas <p>
function showDecryptedText() {
    let content = document.getElementById('textImput').value;

    // Validar texto antes de descifrar
    if (!validarTexto(content)) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        return;
    }

    let decryptedText = decipher(content);
    document.getElementById('result').textContent = decryptedText;
    document.getElementById('copy').removeAttribute('hidden'); // Mostrar botón copiar
    document.getElementById('cipheredImage').style.display = 'none'; // Ocultar imagen
    document.getElementById('nomensaje1').style.display = 'none'; // Ocultar primer <p>
    document.getElementById('nomensaje2').style.display = 'none'; // Ocultar segundo <p>
}

// Asignar los eventos de clic a los botones
document.getElementById('showResult').addEventListener('click', showEncryptedText);
document.getElementById('showDecryptedResult').addEventListener('click', showDecryptedText);
document.getElementById('copy').addEventListener('click', copyText);

// La función que permite copiar un texto mostrado en pantalla
function copyText() {
    let textToCopy = document.getElementById('result').textContent;
    
    navigator.clipboard.writeText(textToCopy).then(
        () => {
            alert("Texto copiado: " + textToCopy);
        },
        () => {
            console.log('Error al copiar');
        }
    );
}