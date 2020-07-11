


/*
let selectedFashionId;

const fashionSelect = document.getElementById('fashion-select');
const fashionOptions = document.querySelectorAll('.fashion-select option');

for (let option of fashionOptions) {
    option.onclick(function(e) {
        if (selectedFashionId === e.id) {
            selectedFashionId = undefined;
            setName(fashionSelect, '');
        } else {
            selectedFashionId = e.id;
            setName(fashionSelect, e.innerText);
        }
    })
}

function setName(el, name) {
    el.innerText = name;
}

fashionSelect.onclick(function() {
    fashionSelect.classList.add('opened');
})

*/


let catalogBlock = getCatalogBlock();
let catalogAcceptBtn = document.querySelector('.catalog__accept');
let catalogShowBtn = document.getElementById('catalog__wrapper');
let bagBtn = document.getElementById('header__purchases');


window.onresize = getCatalogBlock;
function getCatalogBlock() {

  if (window.innerWidth <= 1023) {
    return document.getElementById('catalog-block');
  }

};

if (catalogBlock) {
    catalogBlock.onclick = function() {
        catalogBlock.classList.add('show-catalog');
        catalogShowBtn.classList.add('hidden-catalog');
    }
}

if (catalogAcceptBtn) {
    catalogAcceptBtn.onclick = function(e) {
        let catalogBlock = getCatalogBlock();
        if (catalogBlock) {
                catalogBlock.classList.remove('show-catalog');
                catalogShowBtn.classList.remove('hidden-catalog');
            }        

    }
}



let bagModal = document.getElementById('modal-buy');
let bagModalHide = document.getElementById('close-btn');
let container = document.getElementsByClassName('container');

if (bagBtn) {
    bagBtn.onclick = function() {
        bagModal.classList.add('modal-buy--active');
    } 
}

if (bagModalHide) {
    bagModalHide.onclick = function() {
        bagModal.classList.remove('modal-buy--active');
    }
}



