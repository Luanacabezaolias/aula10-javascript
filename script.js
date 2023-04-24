const usuarios=[
    {nome:"Luana", idade: 18},
    {nome:"Anny", idade: 17},
    {nome:"Camila", idade: 12},

];

let msg = document.getElementById('msg')

const nomeUsers = usuarios.length;

for(let i = 0; i <nomeUsers;i++){
    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}
/*declarando imagens*/
var imagens =[
    'img/img1.png',
    'img/img2.png',
    'img/img3.png',
];

var index = 0; /*iniciando a posição*/
var time = 2000; /*velocidade da imagem*/

function slideShow(){
    document.getElementById('image').src= imagens[index];
    index++;
    if(index == imagens.length){index = 0}
    setTimeout("slideShow()", time);

}
slideShow();