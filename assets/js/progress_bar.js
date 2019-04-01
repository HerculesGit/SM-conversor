

animationProgressBar =()=>{
    let bar = document.querySelector('#bar')
    let body = document.querySelector('body')
    body.style.backgroundColor = '#323232'

    let width = 1

    let idInterval = setInterval(() => {
        if (width <= 50){
            width+= getRandomInt(1,5)
            bar.style.width = width + '%'
            console.log('size-max' + width)
        } else {
            stopInterval(idInterval)
            console.log('parou')
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