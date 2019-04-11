// DarkTheme
let orangeDark = '#E94B3E'
let blackDark = '#232323'
let bodyBackgroundDark = '#BEC3C7'

// Light Theme
let bodyBackgroundLight = '#EFF8FF'
let greenLight = '#1CBC9D'
let grayLight = '#707070'

// padrao
let currentTheme = undefined
let white = '#fff'
let transparent = 'transparent'

let isLight = true

setLightTheme=()=>{
    document.querySelector('body').style.backgroundColor = bodyBackgroundLight

    document.querySelector('.main-header').style.backgroundColor = grayLight
    
    document.querySelector('.card-top-conversor').style.backgroundColor = white

    document.querySelector('.card-top-video').style.backgroundColor = white

    document.querySelector('.content-container-center').style.backgroundColor = white

    document.querySelector('.info').style.backgroundColor = white

    document.querySelector('.contact').style.backgroundColor = white
    

    document.querySelector('#input-value').style.borderBottom = '1px solid #fff'
    
    document.querySelector('#input-value').style.color = '#000'

    document.querySelector('#label-value').style.color = greenLight
    
    
    document.querySelectorAll('.row .l')

    document.querySelector('body').style.color = '#000'

    document.querySelector('.contact button').style.backgroundColor = greenLight


    addEventMouseButtonCalcLight()
    addColorButtonCalcLight()
}
setDarkTheme=()=>{
    document.querySelector('body').style.backgroundColor = bodyBackgroundDark

    document.querySelector('.main-header').style.backgroundColor = blackDark
    
    document.querySelector('.card-top-conversor').style.backgroundColor = blackDark

    document.querySelector('.card-top-video').style.backgroundColor = blackDark

    document.querySelector('.content-container-center').style.backgroundColor = blackDark

    document.querySelector('.info').style.backgroundColor = blackDark

    document.querySelector('.contact').style.backgroundColor = blackDark
    

    document.querySelector('#input-value').style.borderBottom = '1px solid #fff'
    
    document.querySelector('#input-value').style.color = '#fff'

    document.querySelector('#label-value').style.color = orangeDark
    
    
    document.querySelectorAll('.row .l')

    document.querySelector('body').style.color = white

    document.querySelector('.contact button').style.backgroundColor = orangeDark


    addEventMouseButtonCalc()
    addColorButtonCalc()  
}

addColorButtonCalc=()=>{
    let listButton = document.querySelectorAll('.buttons-letters .row .l')
    for(const button of listButton){
        button.style.color = orangeDark
    }
}

addColorButtonCalcLight=()=>{
    let listButton = document.querySelectorAll('.buttons-letters .row .l')
    for(const button of listButton){
        button.style.color = greenLight
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
addEventMouseButtonCalcLight=()=>{
    let listButton = document.querySelectorAll('.buttons-letters .row div')
    for(const button of listButton){
        button.addEventListener('mouseover', e=>{
            button.style.backgroundColor = greenLight
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
            button.style.color = greenLight
        })
    } 
}

changeTheme=(theme)=>{

    // console.log('>'+theme)

    if(theme === 'dark'){
        setDarkTheme()
    } else {
        setLightTheme()
    }
}

document.querySelector('.circles').addEventListener('click', e=>{
    if(isLight){ // deixar dark
        changeTheme('dark')
        isLight = false
    } else { // deixar light
        changeTheme('light')
        isLight = true
    }
    console.log('>>>')
    
})
// document.querySelector('#circle-light').addEventListener('click', e=>{
//     changeTheme('light')
// })


// changeTheme()
