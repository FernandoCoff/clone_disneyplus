document.addEventListener('DOMContentLoaded', ()=>{
    const buttons = document.querySelectorAll('[data-tab-button]')
    const question = document.querySelectorAll('[data-faq-question]')

    const hero = document.querySelector('.hero')
    const heroHeigth = hero.clientHeight

    window.addEventListener('scroll', ()=>{
        const scrollY = window.scrollY
        const header = document.querySelector('.header')

        if(scrollY < heroHeigth){
            header.classList = "header --is-hidden"
        }else{
            header.classList = "header"
        }
    })

    for(let i =0; i < buttons.length; i++){
        buttons[i].addEventListener('click', (button)=>{
            const tabs = button.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabs}]`)
            tabRemoveAll()
            tab.classList.add('shows__list--is-active')
            buttonRomoveAll()
            button.target.classList.add('shows__tabs__button--is-active')
        })
    }

    for(let i = 0; i < question.length; i++){
        question[i].addEventListener('click', openOrClose)
    }
})

const openOrClose = (element)=>{
    const questionClass ='faq__questions__item--is-open'
    const elementDad = element.target.parentNode

    elementDad.classList.toggle(questionClass)
}

const buttonRomoveAll = () =>{
    const buttons = document.querySelectorAll('[data-tab-button]')
    for(let i =0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

const tabRemoveAll = ()=> {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}