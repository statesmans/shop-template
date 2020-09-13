let catalogAcceptBtn = document.querySelector('.catalog__accept');
let catalogShowBtn = document.getElementById('catalog__wrapper');
let categories = Array.from(document.getElementsByClassName('category__name'))
let catalog = document.getElementById('catalog-block');
  


catalog.addEventListener('click', () => {
    catalog.classList.add('show-catalog');
    catalogShowBtn.classList.add('hidden-catalog');
})

categories.forEach(currentCategory => {
    currentCategory.addEventListener('click', ()=> {
        toggleCategory(currentCategory)
    })
});


function toggleCategory (currentCategory) {
    if(catalog.classList.contains('show-catalog')) {
        let subCategories = Array.from(currentCategory.parentNode.children[1].children)
            // activate category
            if(currentCategory.classList.contains('category--active')) {
                subCategories.forEach(categoryEl => {
                    categoryEl.classList.remove('category__elem--visible')
                })
                currentCategory.classList.remove('category--active')        
            } else {

            subCategories.forEach(categoryEl => {
                categoryEl.classList.add('category__elem--visible')
            })
            currentCategory.classList.add('category--active')

            subCategories.forEach(categoryEl => {
                categoryEl.addEventListener('click', ()=> {
                    if(currentCategory.classList.contains('category--active') && categoryEl.classList.contains('category__elem--selected')) {
                        categoryEl.classList.remove('category__elem--selected')
                    } else {
                        categoryEl.classList.add('category__elem--selected')
                    }
                })
            })
        }
    }
}



catalogAcceptBtn.addEventListener('click', ()=> {
    catalog.classList.remove('show-catalog');
    catalogShowBtn.classList.remove('hidden-catalog');
})

