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
    constructor(){
    }

    setup(){
        this.title=window.location.toString().split('/')[4]
        this.url = window.location.toString().split('/').slice(0,4)
    }
    inject(){
        this.setup();
        require('./style.scss')

        let repositoryThree = $(`
<div class="repositoryThree">
    <div class="repositoryThree__header">
         <div class="repositoryThree__header__title">
            ${this.title}
        </div>
    </div>
    <div class="repositoryThree__body">
        
    </div>
</div>
        `);

        $('html').prepend(repositoryThree)
    }
}