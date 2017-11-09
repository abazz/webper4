'use strict';

const ekap = document.querySelector('p');
const tokap = document.querySelector('p:nth-child(2)');
const kolmasp = document.querySelector('p:nth-child(3)');

const lisaa = document.querySelector('#lisaa');
const vaihda = document.querySelector('#vaihda');
const toggle = document.querySelector('#toggle');

lisaa.addEventListener('click', (evt) => {
    ekap.classList.add('punainen');
});



vaihda.addEventListener('click', (evt) => {
    if(tokap.classList.contains('punainen')) {
        tokap.classList.replace('punainen', 'sininen');
    }else {
        tokap.classList.replace('sininen', 'punainen');
}});


toggle.addEventListener('click', (evt) => {
    kolmasp.classList.toggle('vihrea');
});