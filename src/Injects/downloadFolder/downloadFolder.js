import $ from 'jquery'
import JSZip from 'jszip';

export default (()=>{
let zip = new JSZip();
let downloadedFiles = false;
let filesToDownload = ['unknown'];
let allFilesLoaded = false;
let downloadStart = false;
let archiveName = ''
setInterval(()=>{
    if ((filesToDownload.length < 1) && (downloadStart === true)){
        filesToDownload = ['unknown']
        downloadStart = false;
        downloadedFiles = true;
        zip.generateAsync({type:'blob'}).then((content)=> {
            let a = document.createElement('a')
            a.href = window.URL.createObjectURL(content)
            a.download = archiveName + '.zip'
            a.click()
            $('.ext-download-folder-btn').removeAttr('disabled')
            // console.log('Архив создан')
        })
    }
},1000)
zip.ob


const createDownloadBtn = async ()=>{

    await $('#repo-content-pjax-container > div > div > div.file-navigation.mb-3.d-flex.flex-items-start > div.d-flex')
        .prepend('<button class="ext-download-folder-btn">Download</button>')
    await $('#repo-content-turbo-frame > div > div > div.file-navigation.mb-3.d-flex.flex-items-start > div.d-flex')
        .prepend('<button class="ext-download-folder-btn">Download</button>')

    if ($('#style-download-folder-btn').length < 1)
    $('head').prepend(`
<style type="text/css" id="style-download-folder-btn"> 
    .ext-download-folder-btn{
        text-decoration: none;
        background: #21262d; 
        border-radius: 5px;
        border: 1px solid;
        font-weight: 500;
        color: var(--color-btn-text);
        border-color: var(--color-btn-border);
        transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
        transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
        height: 100%;
        margin-right: 8px;
        padding: 5px 16px;
        min-width: 100px;
        cursor: pointer;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    }
     .ext-download-folder-btn:hover{
         text-decoration: none;
         background: #30363d;
         border-color: var(--color-btn-hover-border);
     }
     .ext-download-folder-btn:disabled{
         text-decoration: none;
         background: black;
         border-color: var(--color-btn-hover-border);
     }
</style>`)



    $('.ext-download-folder-btn').click(()=>{
        filesToDownload= ['firstDownload'];
        downloadedFiles = false;
        downloadStart = true;
        let links = $('#repo-content-pjax-container  div  div  div.Box.mb-3  div.js-details-container.Details  div  div.flex-auto.min-width-0.col-md-2.mr-3  span  a')
        if (links.length < 1) {
            links = $('#repo-content-turbo-frame div  div  div.Box.mb-3  div.js-details-container.Details div   div.flex-auto.min-width-0.col-md-2.mr-3  span  a')
        }
        let downloaded = 0;
        archiveName = $('#repo-content-pjax-container > div > div > div.file-navigation.mb-3.d-flex.flex-items-start > div.flex-1.mx-2.flex-self-center.f4 > div > strong').html()
        if (archiveName == undefined) {
            archiveName = $('#repo-content-turbo-frame > div > div > div.file-navigation.mb-3.d-flex.flex-items-start > div.flex-1.mx-2.flex-self-center.f4 > div strong')
            archiveName = archiveName[archiveName.length - 1]
        }
        if (archiveName.innerText?.length>0){
            archiveName= archiveName.innerText
        }
        // console.log(archiveName)
        $.each(links, (index)=>{
            let href = links[index].href;
            href = href.split('/')
            href[5] = 'raw'
            let name = href[href.length - 1]
            href = href.join('/')
            filesToDownload.push(href);
            name = links[index].innerText
            // console.log(name)
            fetch(href,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
            })
                .then( res => res.blob() )
                .then( async blob => {
                    if (name.split('.').length < 2){
                        await dFolder(blob,name)
                        filesToDownload=filesToDownload.filter(el=>(el!=href))
                    } else{
                        zip.file(name,blob)
                        filesToDownload=filesToDownload.filter(el=>(el!=href))
                    }
                    filesToDownload=filesToDownload.filter(el=>(el!='firstDownload'))
                    $('.ext-download-folder-btn').prop('disabled',true)
                    $('.ext-download-folder-btn').html(Math.round(((downloaded + 1) / (links.length) * 100)*100)/100  + '%')
                    downloaded++;
                    // if (index === links.length -1){
                    //      interval = setInterval(()=>{
                    //         console.log(filesToDownload)
                    //         if (downloaded == true){
                    //             return
                    //         }
                    //         if (filesToDownload < 1) {
                    //             // zip.generateAsync({type:'blob'}).then((content)=>{
                    //             //     let a = document.createElement('a')
                    //             //     a.href = window.URL.createObjectURL(content)
                    //             //     a.download = archiveName + '.zip'
                    //             //     a.click()
                    //             //     $('.ext-download-folder-btn').removeAttr('disabled')
                    //             //     console.log('Архив создан')
                    //             //     downloaded = true;
                    //             // })
                    //             return
                    //         }
                    //     },2000)
                    // }
                })
        })
    })
    const dFolder = (blob,path) =>{
        blob.text()
            .then(async html => {
                let ob = document.createElement('html')
                ob.innerHTML = html
                setTimeout(()=>{
                    let links = ob.querySelectorAll('#repo-content-pjax-container > div > div > div.Box.mb-3 > div.js-details-container.Details > div > div.Box-row.Box-row--focus-gray.py-2.d-flex.position-relative.js-navigation-item > div.flex-auto.min-width-0.col-md-2.mr-3 > span a ')
                    // console.log(links)
                    // let links = $(ob > '#repo-content-pjax-container > div > div > div.Box.mb-3 > div.js-details-container.Details > div  div.flex-auto.min-width-0.col-md-2.mr-3 > span > a')
                    if (links.length < 1) {
                        // console.log('ALert!')
                        links = ob.querySelectorAll('#repo-content-pjax-container div div div.Box.mb-3  include-fragment div.js-details-container.Details div  div.flex-auto.min-width-0.col-md-2.mr-3  span  a')
                        // console.log(links)
                        // console.log(html)
                    }
                    $.each(links, (index)=> {
                        let href = links[index].href;
                        href = href.split('/')
                        href[5] = 'raw'
                        let name = href[href.length - 1]
                        href = href.join('/')
                        filesToDownload.push(href);
                        fetch(href,{
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                            },
                        })
                            .then( res => res.blob() )
                            .then(async blob=>{
                                if (name.split('.').length < 2){
                                    await dFolder(blob,path+'/'+name)
                                } else{
                                    zip.file(path+'/'+name,blob)
                                }
                                // console.log(path+'/'+name)
                                filesToDownload=filesToDownload.filter(el=>(el!=href))
                            })
                    })
                },0)

            })
    }
}

setInterval(()=>{;
    if($('.ext-download-folder-btn').length < 1) {
        downloadedFiles = false;
        filesToDownload = ['unknown'];
        allFilesLoaded = false;
        downloadStart = false;
        archiveName = ''
        zip = new JSZip()
        zip.filter((path,file)=>{
            return false
        })
        createDownloadBtn()
    }
},1000)

})()
