import $ from 'jquery'
class folder{
    name
    constructor(name) {
        this.name = name;
    }
}

export default class{
    title
    url
    deep = 0
    toView= []
    constructor(){
    }

    setup(){
        this.title=window.location.toString().split('/')[4]
        this.url = window.location.toString().split('/').slice(0,5).join('/')
    }
    async getFolderOfFileInBlob(blob,href=''){
        if (this.deep>100)
            return ''
        let toReturn = ``
        await blob.text()
            .then(async html=>{
                let ob = document.createElement('html')
                ob.innerHTML = html

                let links = $(ob).find('.js-details-container .Box-row')
                // links = links.filter((link)=> { link.childElementCount < 4})
                links = links.filter((index, el)=>{return el.childElementCount ===4})
                this.toView = this.toView.filter(el=>el!==href)
                $.each(links,async (index)=>{
                    let title = $(links[index]).find('a').first()[0].innerText;
                    let href = $(links[index]).find('a').first()[0].href;
                    let svg = $(links[index]).find('svg').first()[0];
                    if (title.split('.').filter(el=>el.length>0).length <2){
                        this.toView.push(href)
                        fetch(href,{
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                            },
                        })
                            .then( res =>  res.blob())
                            .then(async blob=>{
                                console.log(href)
                                toReturn += `
                                    <li>
                                        ${this.convertHtmlToString(svg)}
                                              ${title}
                                        <ul>
                                            ${await this.getFolderOfFileInBlob(blob)}
                                        </ul>
                                    </li>
                                `
                            })
                    }else{
                        toReturn += `
                            <li>
                                ${this.convertHtmlToString(svg)}
                                    <a href="${href}">
                                                   ${title}
                                    </a>
                            </li>
                        `
                    }
                })
            })

        this.deep+=1
        return(toReturn)

    }
    convertHtmlToString(DOMObject){
        let tmp = document.createElement("div");
        tmp.appendChild(DOMObject.cloneNode(true));
        return (tmp.innerHTML); // <p>Test</p>
    }
    proceed(){
    }
    inject(){
        this.setup();
        require('./style.scss')


        fetch(this.url,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
        })
            .then(res => res.blob())
            .then(async blob=>{
                let repositoryThree = await $(`
                <div class="repositoryThree">
                    <div class="repositoryThree__header">
                         <div class="repositoryThree__header__title">
                            ${this.title}
                         </div>
                    </div>
                    <div class="repositoryThree__body">
                        <ul>
                            ${await this.getFolderOfFileInBlob(blob)}
                        </ul>
                    </div>
                </div>
                `);

                setTimeout(()=>{
                    $('html').prepend(repositoryThree)
                },10000)

            })



    }


}