let inputA = document.getElementById('number1'); 
let inputB = document.getElementById('number2');
let tool = { tambah : function(A, B){
                  return A + B ;
            }, kurang : function(A, B){
                return A - B ;
            }, kali : function(A, B){
                return A * B ;
            }, bagi : function(A, B){
                return A / B ;
            }
}

function tambah() {
    document.querySelector('#hasil').value = tool.tambah(parseInt(inputA.value), parseInt(inputB.value));
}
function kurang() {
    document.querySelector('#hasil').value = tool.kurang(parseInt(inputA.value), parseInt(inputB.value));
}
function kali() {
    document.querySelector('#hasil').value = tool.kali(parseInt(inputA.value), parseInt(inputB.value));
}
function bagi() {
    document.querySelector('#hasil').value = tool.bagi(parseInt(inputA.value), parseInt(inputB.value));
}
function hapus() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('hasil').value = '';
}

