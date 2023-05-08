var angka1 = document.getElementById("angka1");
var angka2 = document.getElementById("angka2");

var hasil = document.getElementById("hasil");

function tambah(){
    hasil.value = parseInt(angka1.value) + parseInt(angka2.value)
}

function kurang(){
    hasil.value = parseInt(angka1.value) - parseInt(angka2.value)
}

function kali(){
    hasil.value = parseInt(angka1.value) * parseInt(angka2.value)
}

function bagi(){
    hasil.value = parseInt(angka1.value) / parseInt(angka2.value)
}

function reset(){
    document.getElementById("angka1").value = ""
    document.getElementById("angka2").value = ""
    document.getElementById("hasil").value = ""
}