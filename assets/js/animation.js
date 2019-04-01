

animationProgressBar =()=>{
    let bar = document.querySelector('#bar')
    let body = document.querySelector('body')
    let percent = document.querySelector('body a')
    let progress = document.querySelector('.progress')

    body.style.backgroundColor = '#323232'

    let width = 1

    let idInterval = setInterval(() => {
        if (width <= 50){

            width+= getRandomInt(1,5)
            if(width > 50){
                width = 50
                stopInterval(idInterval)
                progress.innerHTML = ''
                progress.className = 'null'
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