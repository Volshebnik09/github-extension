import $ from 'jquery';
let options = $('.tab__group__option');

let opt = {
    "download-btn__enabled": $('#download-btn__enabled')[0],
    "Tree-View__enabled": $("#Tree-View__enabled")[0],
    "Tree-View__depth" : $("#Tree-View__depth")[0],
    "fix-img__enabled": $("#fix-img__enabled")[0],
    "fix-img__height": $("#fix-img__height")[0],
}
options.each((index)=>{
    let input = options[index].querySelector('input.tab__group__option__input')
    let inputNumber = options[index].querySelector('input.tab__group__option__input[type=number]')
    let checkbox = options[index].querySelector('input.tab__group__option__checkbox')

    if (inputNumber){
        inputNumber.addEventListener('input',()=>{
            if (parseFloat(inputNumber.value) > parseFloat(inputNumber.getAttribute('max')))
                inputNumber.value = inputNumber.getAttribute('max')
        })
    }

    options[index].addEventListener('click',()=>{
        if (options[index].querySelector('input.tab__group__option__input'))
            options[index].querySelector('input.tab__group__option__input').focus()
    })

    if (input){
        input.addEventListener('input',()=>{
            save()
        })
    }
    if (checkbox){
        checkbox.addEventListener("change",()=>{
            save()
        })
    }
})

function load(){
    chrome.storage.sync.get({
        "download-btn__enabled": true,
        "Tree-View__enabled":true,
        "Tree-View__depth": 100,
        "fix-img__enabled": true,
        "fix-img__height":450,
    }, (items)=>{
        for (let itemsKey in items) {
            opt[itemsKey].checked = items[itemsKey]
            opt[itemsKey].value = items[itemsKey]
        }
    })
}

function save(){
    let options = {}
    for (let itemsKey in opt) {
        options[itemsKey] = opt[itemsKey].value
        if (opt[itemsKey].getAttribute('type') === 'checkbox')
            options[itemsKey] = opt[itemsKey].checked
    }
    saveToStore(options)
}
function saveToStore(options){
    chrome.storage.sync.set(options,()=>{
        console.log('saved')
    })
}

let liys = $('header ul li')
let tabs = $('main .tab')

tabs[0].classList.add('active')
liys[0].classList.add('active')

liys.each((index)=>{
    liys[index].addEventListener('click',()=>{
        tabs.each((index)=>{
            tabs[index].classList.remove('active')
            liys[index].classList.remove('active')
        })
        tabs[index].classList.add('active')
        liys[index].classList.add('active')
    })
})

load()