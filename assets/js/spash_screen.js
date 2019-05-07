

goToPage=()=>{
    window.location.href = 'home.html'
}

animationProgressBar =()=>{
    let bar = document.querySelector('#bar')
    let body = document.querySelector('body')
    let percent = document.querySelector('body a')
    let progress = document.querySelector('.progress')
    let container = document.querySelector('.container-bar-progress')

    body.style.backgroundColor = '#323232'

    let width = 1

    let idInterval = setInterval(() => {
        if (width <= 50){

            width+= getRandomInt(1,5)
            if(width > 50){
                width = 50
                stopInterval(idInterval)
                // progress.innerHTML = ''
                // progress.className = 'null'

                fadeOut('.progress', 0.1)
                fadeOut('.container-bar-progress', 1.2)
                fadeOut('.gif-logo', 0.2)

                setTimeout(() => {
                    goToPage()
                }, 1000);
                

            }
            bar.style.width = width + '%'
            percent.textContent = (width*2) + '%'
            console.log('size-max' + width)
        }
        console.log('<<')
    }, 100);
}

getRandomInt=(min, max)=>{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min+1)) + min
}

stopInterval=(idInterval)=>{
    clearInterval(idInterval);
}

animationProgressBar()


fadeOut=(id, time)=> {
    fade(id, time, 100, 0);
}

fadeIn=(id, time)=> {
    fade(id, time, 0, 100);
}

fade=(id, time, ini, fim)=>{
    let target = document.querySelector(id)
    let alpha = ini
    let inc

    if (fim >= ini){
        inc = 2
    } else {
        inc = -2
    }

    time = (time * 1000) / 50
    let interval = setInterval(() => {
       if((inc >0 && alpha >= fim) || (inc <0 && alpha <=fim)){
           stopInterval(interval)
       } 
       setAlpha(target, alpha)
       alpha += inc

    }, time);
}

setAlpha=(target, alpha)=>{
    target.style.filter = 'alpha(opacity'+alpha+')'
    target.style.opacity = alpha / 100
}

// testa=()=>{
//     fadeOut('#btn-submit', 1)
// }
// testa()
