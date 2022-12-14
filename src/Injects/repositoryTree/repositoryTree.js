import $ from 'jquery'


export default class{
    title
    url
    hashedURL
    deep = 0
    toView= []
    maxDeep = 100
    deepAlerted = false
    eventsAdded = false
    enabled = true;
    settings = $(`<div class="settings">
                    <div class="reload">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_2)">
                        <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C10.2 16 12.24 15.14 13.68 13.68L12.24 12.24C11.16 13.32 9.66 14 7.98 14C4.66 14 1.98 11.32 1.98 8C1.98 4.68 4.66 2 7.98 2C9.64 2 11.08 2.72 12.16 3.82L9.98 6H15.98V0L13.6 2.38C12.16 0.94 10.18 0 7.98 0H8Z"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_2">
                        <rect width="16" height="16"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <div class="pin">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_2)">
                        <path d="M4.146 0.146C4.19252 0.099598 4.24773 0.0628199 4.30847 0.0377682C4.36921 0.0127165 4.4343 -0.000117503 4.5 -1.56181e-07H11.5C11.6326 -1.56181e-07 11.7598 0.0526783 11.8536 0.146446C11.9473 0.240215 12 0.367392 12 0.5C12 1.18 11.658 1.674 11.354 1.979C11.228 2.104 11.104 2.203 11 2.277V6.708L11.078 6.756C11.281 6.883 11.554 7.07 11.829 7.311C12.36 7.775 13 8.527 13 9.5C13 9.63261 12.9473 9.75979 12.8536 9.85355C12.7598 9.94732 12.6326 10 12.5 10H8.5V14.5C8.5 14.776 8.276 16 8 16C7.724 16 7.5 14.776 7.5 14.5V10H3.5C3.36739 10 3.24021 9.94732 3.14645 9.85355C3.05268 9.75979 3 9.63261 3 9.5C3 8.527 3.64 7.775 4.17 7.311C4.4287 7.08636 4.70641 6.88461 5 6.708V2.277C4.8739 2.18771 4.75548 2.08803 4.646 1.979C4.342 1.674 4 1.179 4 0.5C3.99988 0.434295 4.01272 0.369211 4.03777 0.308469C4.06282 0.247728 4.0996 0.192519 4.146 0.146V0.146ZM5.726 1.554L5.724 1.553L5.726 1.554ZM5.724 1.553L5.726 1.554C5.80842 1.59576 5.87766 1.65955 5.92603 1.73828C5.97439 1.81701 6 1.9076 6 2V7C6 7.09278 5.97418 7.18373 5.92544 7.26267C5.87669 7.34161 5.80695 7.40544 5.724 7.447H5.722L5.71 7.454L5.656 7.484C5.36117 7.64846 5.08405 7.84282 4.829 8.064C4.511 8.342 4.244 8.66 4.104 9H11.896C11.756 8.66 11.489 8.342 11.171 8.064C10.9004 7.82917 10.605 7.62462 10.29 7.454L10.278 7.448H10.276C10.1929 7.40636 10.1231 7.34238 10.0743 7.26324C10.0255 7.18411 9.99982 7.09295 10 7V2C9.99962 1.90331 10.0273 1.80858 10.0796 1.72729C10.132 1.64601 10.2068 1.58164 10.295 1.542C10.4229 1.46669 10.5408 1.37565 10.646 1.271C10.726 1.191 10.801 1.101 10.86 1H5.14C5.2 1.1 5.273 1.191 5.354 1.271C5.46447 1.38078 5.58886 1.47559 5.724 1.553Z"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_2">
                        <rect width="16" height="16"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                </div>
`)

    inject(){
        chrome.storage.sync.get({
            "Tree-View__enabled":true,
            "Tree-View__depth": 100,
        },(items)=>{
            this.enabled = items["Tree-View__enabled"]
            this.maxDeep = items["Tree-View__depth"]
            this.run()
        })
    }
    constructor(){
        this.checkurl()
        this.hashedURL = window.location.toString().split('/').slice(0,5).join('/')
        this.url = window.location.toString().split('/').slice(0,5).join('/')
    }
    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    setup(){
        this.title=window.location.toString().split('/')[4]
        this.url = window.location.toString().split('/').slice(0,5).join('/')
        this.deep = 0
    }
    checkThisIsRepo(){
        let header = $('#repository-container-header')
        if (!header.length){
            return false
        }
        return true
    }
    getFolderOfFileInBlob(blob,parent=''){
        if (this.deep>this.maxDeep){
            if (!this.deepAlerted){
                alert(`???????????????????? ???????????????????????? ??????-???? ?????????? ${this.maxDeep}`)
                this.deepAlerted = true
            }
            this.deep++
            return ''
        }
        let toReturn = ``
        blob.text()
            .then(async html=>{
                let ob = document.createElement('html')
                ob.innerHTML = html

                let links = $(ob).find('.js-details-container .Box-row')
                // links = links.filter((link)=> { link.childElementCount < 4})
                links = links.filter((index, el)=>{return el.childElementCount ===4})
                $.each(links,async (index)=>{
                    let title = $(links[index]).find('a').first()[0].innerText;
                    if (title === '')
                        return
                    let href = $(links[index]).find('a').first()[0].href;
                    let svg = $(links[index]).find('svg').first()[0];
                    if (title.split('.').filter(el=>el.length>0).length <2){
                        this.deep+=1
                        let id = this.uuidv4()
                        toReturn = `
                                    <li id="${id}-parent" class="parent-li">
                                        <a href="${href}" class="folder">
                                        ${this.convertHtmlToString(svg)}
                                        </a>
                                              ${title}
                                        <ul id="${id}">

                                        </ul>
                                    </li>
                                `
                        $(parent).append(toReturn)
                        $('#'+id+'-parent').click((e)=>{
                            if (e.target === e.currentTarget){
                                e.stopPropagation()
                                $('#'+id+'-parent').toggleClass('active')
                                this.hashTree($('.repositoryTree').html())
                            }
                        })

                        fetch(href,{
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                            },
                        })
                            .then( res =>  res.blob())
                            .then(async blob=>{
                                this.getFolderOfFileInBlob(blob,'#'+id)
                            })
                    }else{
                        toReturn = `
                            <li>
                                ${this.convertHtmlToString(svg)}
                                    <a href="${href}">
                                                   ${title}
                                    </a>
                            </li>
                        `
                        $(parent).append(toReturn)
                    }
                    this.hashTree($('.repositoryTree').html())
                })
            })

        return 1

    }
    convertHtmlToString(DOMObject){
        let tmp = document.createElement("div");
        tmp.appendChild(DOMObject.cloneNode(true));
        return (tmp.innerHTML); // <p>Test</p>
    }
    proceed(){
        if (localStorage.getItem('repositoryTree-pinned') === 'true'){
            this.pin()
        }
        $('.repositoryTree .settings .pin').click(()=>{
            this.togglePin()
        })
        $('.repositoryTree .settings .reload').click(()=>{
            $('.repositoryTree').remove()
            localStorage.removeItem('repositoryTree-hash/'+this.url, null)
            this.inject()
        })
    }
    togglePin(){
        $('.repositoryTree .settings .pin').toggleClass('pinned')
        $('.repositoryTree').toggleClass('pinned')
        $('html').toggleClass('repositoryTree-pinned')
        localStorage.setItem('repositoryTree-pinned', $('.repositoryTree').hasClass('pinned'))
    }
    pin(){
        $('.repositoryTree .settings .pin').addClass('pinned')
        $('.repositoryTree').addClass('pinned')
        $('html').addClass('repositoryTree-pinned')
        localStorage.setItem('repositoryTree-pinned', true)
    }
    hashTree(tree){
        this.hashedURL = this.url
        localStorage.setItem('repositoryTree-hash/'+this.url, tree)
    }
    checkhash(){
        this.url = window.location.toString().split('/').slice(0, 5).join('/')
        return !!localStorage.getItem('repositoryTree-hash/'+this.url);
    }
    addClickEvent(){
        // if (this.eventsAdded){
        //     return
        // }
        this.eventsAdded = true
        let liys = $('.parent-li')
        $.each(liys,(index)=>{
            liys[index].addEventListener('click',(e)=>{
                if ((e.target !== liys[index]))
                    return
                e.stopPropagation()
                liys[index].classList.toggle('active')
                this.hashTree($('.repositoryTree').html())
            })
        })

    }
    build(repositoryTree){
        $('.repositoryTree').remove()
        $('html').prepend(repositoryTree)
        if (!$('.repositoryTree .settings').length)
            $('.repositoryTree').prepend(this.settings)
        $('#repositoryTree__search').on('input', (e)=>{
            let value = $('#repositoryTree__search').val()
            let liys = $('.repositoryTree__body li')
            $.each(liys, (index)=>{
                let text = liys[index].innerText
                let li = liys[index]
                if (text.includes(value)){
                    $(li).removeClass('hiddenBySearch')
                } else{
                    $(li).addClass('hiddenBySearch')
                }
            })
        })

        this.proceed()
    }
    run(){
        if(!this.enabled){
            return
        }
        require('./style.scss')
        if (!this.checkThisIsRepo())
            return
        if (this.checkhash()){
            console.log('loaded from hash')
            let tree = $("<div class='repositoryTree'>"+ localStorage.getItem('repositoryTree-hash/'+this.url)+ "</div>")
            this.build(tree)
            this.addClickEvent()
            return;
        }
        this.setup();
        fetch(this.url,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
        })
            .then(res => res.blob())
            .then(async blob=>{
                let repositoryTree = $(`
                <div class="repositoryTree">
                    <div class="repositoryTree__header">
                         <div class="repositoryTree__header__title">
                            ${this.title}
                         </div>
                         <input id="repositoryTree__search" type="text" placeholder="search"/>
                    </div>
                    <div class="repositoryTree__body">
                        <ul id="main-ul-repositoryTree">
                        </ul>
                    </div>
                </div>
                `);
                this.getFolderOfFileInBlob(blob,'#main-ul-repositoryTree')
                this.build(repositoryTree)


            })



    }

    checkurl(){
        if (window.location.toString().split('/').slice(0, 5).join('/') !== this.url){
            $('.repositoryTree').remove()
            $('html').removeClass('repositoryTree-pinned')
        }
        setTimeout(()=>{
            this.checkurl()
        },1000)
    }
}