function tambah(){
    let inputA = document.getElementById('number1'); 
    let inputB = document.getElementById('number2');
    var tambah = parseInt(inputA.value) + parseInt(inputB.value) ;
    document.querySelector('#hasil').value = tambah;
}

function kurang(){
    let inputA = document.getElementById('number1'); 
    let inputB = document.getElementById('number2');
    var kurang = parseInt(inputA.value) - parseInt(inputB.value) ;
    document.querySelector('#hasil').value = kurang;
}

function kali(){
    let inputA = document.getElementById('number1'); 
    let inputB = document.getElementById('number2');
    var tambah = parseInt(inputA.value) * parseInt(inputB.value) ;
    document.querySelector('#hasil').value = tambah;
}

function bagi(){
    let inputA = document.getElementById('number1'); 
    let inputB = document.getElementById('number2');
    var tambah = parseInt(inputA.value) / parseInt(inputB.value) ;
    document.querySelector('#hasil').value = tambah;
}

function hapus(){
    document.getElementById('number1').value = ''; 
    document.getElementById('number2').value = '';
    document.getElementById('hasil').value = '';
}
