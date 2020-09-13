let bagBtn = document.getElementById('header__purchases');
let catalogAcceptBtn = document.querySelector('.catalog__accept');
let catalogShowBtn = document.getElementById('catalog__wrapper');
let categories = Array.from(document.getElementsByClassName('category__name'))
let catalog = document.getElementById('catalog-block');
  
// close bag
document.getElementById('close-btn').addEventListener('click', ()=> {
    let allBodyEl = Array.from(document.body.children)

    allBodyEl.forEach(element => {
        element.style.opacity = "1"
    });

    document.getElementById('modal-buy').style.display = "none";
})

// open bag
bagBtn.addEventListener('click', ()=> {
    let allBodyEl = Array.from(document.body.children)

    allBodyEl.forEach(element => {
        element.style.opacity = "0.5"
    });

    document.getElementById('modal-buy').style.display = "block";
    document.getElementById('modal-buy').style.opacity = "1";
})


// openned catalog
catalog.addEventListener('click', () => {
    catalog.classList.add('show-catalog');
    catalogShowBtn.classList.add('hidden-catalog');
})

// opened category
categories.forEach(currentCategory => {
    currentCategory.addEventListener('click', ()=> {
        toggleCategory(currentCategory)
    })
});

function toggleCategory (currentCategory) {
    let subCategories = Array.from(currentCategory.parentNode.children[1].children)
    
    if(catalog.classList.contains('show-catalog')) {
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
    counter = 0
    subCategories.forEach(categoryEl => {

        if (categoryEl.classList.contains('category__elem--selected')) {
            currentCategory.parentNode.parentNode.classList.add('category--selected')
            counter++
        } 
        if (!categoryEl.classList.contains('category__elem--selected') && counter == 0) {
            currentCategory.parentNode.parentNode.classList.remove('category--selected')
        }
    })

}



catalogAcceptBtn.addEventListener('click', ()=> {
    catalog.classList.remove('show-catalog');
    catalogShowBtn.classList.remove('hidden-catalog');
})

