function encriptar() {
    var texto = document.getElementById('input').value;
    var textoEncriptado = '';
    if (/[^a-z\s]/g.test(texto)) {
        alert('No se aceptan mayúsculas ni caracteres especiales.');
        return;
    }
    for (var i = 0; i < texto.length; i++) {
        var codigoAscii = texto.charCodeAt(i);
        if (codigoAscii >= 97 && codigoAscii <= 122) {
            textoEncriptado += String.fromCharCode((codigoAscii - 97 + 3) % 26 + 97);
        } else {
            textoEncriptado += texto.charAt(i);
        }
    }
    document.getElementById('output').value = textoEncriptado;
}

function desencriptar() {
    var texto = document.getElementById('input').value;
    var textoDesencriptado = '';
    for (var i = 0; i < texto.length; i++) {
        var codigoAscii = texto.charCodeAt(i);
        if (codigoAscii >= 97 && codigoAscii <= 122) {
            textoDesencriptado += String.fromCharCode((codigoAscii - 97 - 3 + 26) % 26 + 97);
        } else {
            textoDesencriptado += texto.charAt(i);
        }
    }
    document.getElementById('output').value = textoDesencriptado;
}

function copiarAlPortapapeles() {
    var textoCopiado = document.getElementById('output').value;
    
    // Copiar al portapapeles
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            alert('Texto copiado al portapapeles');
    // Limpiar los campos de entrada y salida después de copiar
            document.getElementById('input').value = '';
            document.getElementById('output').value = '';
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
            alert('Error al copiar el texto');
        });
}
