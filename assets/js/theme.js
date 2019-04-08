let orangeDark = '#E94B3E'
let blackDark = '#232323'
let white = '#fff'
let transparent = 'transparent'

getColorDefault=()=>{

}
let header
getHeaderBackgroundColor=()=>{
    return document.querySelector('.main-header').style.backgroundColor
}

changeTheme=()=>{
    document.querySelector('#circle-dark').addEventListener('click', e=>{
        document.querySelector('.main-header').style.backgroundColor = blackDark
        
        document.querySelector('.card-top-conversor').style.backgroundColor = blackDark

        document.querySelector('.card-top-video').style.backgroundColor = blackDark

        document.querySelector('.content-container-center').style.backgroundColor = blackDark

        document.querySelector('.info').style.backgroundColor = blackDark

        document.querySelector('.contact').style.backgroundColor = blackDark
        

        document.querySelector('#input-value').style.borderBottom = '0 1px 0 0 #fff'
        
        document.querySelector('#input-value').style.color = '#fff'

        document.querySelector('#label-value').style.color = orangeDark
        
        
        document.querySelectorAll('.row .l')

        document.querySelector('body').style.color = white

        addEventMouseButtonCalc()
        addColorButtonCalc()
    })
}

addColorButtonCalc=()=>{
    let listButton = document.querySelectorAll('.buttons-letters .row .l')
    for(const button of listButton){
        button.style.color = orangeDark
    }
}

addEventMouseButtonCalc=()=>{
    let listButton = document.querySelectorAll('.buttons-letters .row div')
    for(const button of listButton){
        button.addEventListener('mouseover', e=>{
            button.style.backgroundColor = orangeDark
        })

        button.addEventListener('mouseout', e=>{
            button.style.backgroundColor = transparent
        })
    }

    listButton = document.querySelectorAll('.buttons-letters .row .l')
    for(const button of listButton){
        button.addEventListener('mouseover', e=>{
            button.style.color = white
        })

        button.addEventListener('mouseout', e=>{
            button.style.color = orangeDark
        })
    }
}


changeTheme()
