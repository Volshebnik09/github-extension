import $ from "jquery"
export default class {
    constructor() {
    }
    run(height){
        require("./style.scss")
        $('head').append(`
        <style>
        #repo-content-pjax-container > div > div > div.Box.mt-3 .text-center img {
          max-width: 100%;
          max-height: ${height};
        }
        </style>

        `)
    }
    inject(){
        chrome.storage.sync.get({
            "fix-img__enabled": true,
            "fix-img__height":450,
        },(items)=>{
            if (items["fix-img__enabled"]){
                let height = parseInt(items["fix-img__height"]) === 0? 'unset':items["fix-img__height"] +'px'
                this.run(
                    height
                )
            }
        })
    }
}