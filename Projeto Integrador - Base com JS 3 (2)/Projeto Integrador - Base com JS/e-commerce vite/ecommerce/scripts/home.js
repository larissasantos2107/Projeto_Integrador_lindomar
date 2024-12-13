// Importação da base de dados e das funçoes

import { database } from "./database.js";
import { getProdId, loadProducts} from "./functions.js";
import { getProdutos } from './fetch.js';

// -------- Variaveis do projeto ------------------------
const sectionNovidades = document.querySelector("#section-1 .carrousel")
const sectionMaisVendidos = document.querySelector("#section-2 .carrousel")
const sectionPromocoes = document.querySelector("#section-3 .carrousel")


const response = await fetch("http://localhost:8000/api/produtos");
const produtos = await response.json();

console.log(produtos);

//Fitros
let filtroCategoriaNovidades = database.filter(produto => produto.classificacaoProduto === "Novidades" && produto.exibirHome == true );
let filtroMaisVendidos = database.filter(produto => produto.classificacaoProduto === "Mais_Vendidos" && produto.exibirHome == true )
let filtroPromocoes = database.filter(produto => produto.classificacaoProduto === "Promocoes" && produto.exibirHome == true )


//Funçoes com parametros
loadProducts(produtos.slice(0, 4), sectionNovidades);
loadProducts(produtos.slice(4, 8),sectionMaisVendidos);
loadProducts(produtos.slice(8, 12),sectionPromocoes); 
getProdId()








// ------- carrousel de imagens home -------------------

document.querySelectorAll('.section-product').forEach( carrousel => {
const productCarousel = carrousel.querySelector('.carrousel');
const prevBtn = carrousel.querySelector('.prev');
const nextBtn = carrousel.querySelector('.next');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
  scrollAmount += 340; // Largura do produto + margem
  if (scrollAmount > productCarousel.scrollWidth - carrousel.offsetWidth) {
    scrollAmount = productCarousel.scrollWidth - carrousel.offsetWidth;
  }
  productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
  scrollAmount -= 340; // Largura do produto + margem
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
});
})