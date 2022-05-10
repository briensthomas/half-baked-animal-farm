import { findById } from '../utils.js';
import { animals } from '../data.js';

const animalName = document.getElementById('animal-name');
const animalImg = document.getElementById('animal-image');
const animalSays = document.getElementById('animal-says');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'), animals);

const farmAnimals = findById(params.get('id'), animals);
console.log(farmAnimals);

animalName.textContent = farmAnimals.name;
animalImg.src = `../assets/${farmAnimals.type}.svg`;
animalSays.textContent = farmAnimals.says;