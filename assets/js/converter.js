
let d_b = 'd-b'
let b_d = 'b-d'
let d_h = 'd-h'
let h_d = 'h-d'

let url_d_b = 'https://www.youtube.com/embed/a8EaaCfa9hk' // pulse start
let url_b_d = 'https://www.youtube.com/embed/UTAeDoRIHaA' // godot
let url_d_h = 'https://www.youtube.com/embed/34K8YJOMDRY' // unity 3d
let url_h_d = 'https://www.youtube.com/embed/Um4HFzAewIg' // construct 3

let valueButton
let valueCurrentTypeConvert

convertToTypeExchange=()=>{
    document.querySelector('#select-type').addEventListener('change', e=>{
        toConvert()
        if(d_b == getConvertType()){
            changeStepByStep(decBin)
            changeVideo(url_d_b)

        } else if (b_d == getConvertType()){
            changeStepByStep(binDec)
            changeVideo(url_b_d)

        } else if (d_h == getConvertType()){
            changeStepByStep(decHex)
            changeVideo(url_d_h)

        } else if (h_d == getConvertType()){
            changeStepByStep(hexDec)
            changeVideo(url_h_d)
        }
    })
}

getInputValue=()=>{
    return getInput().value
}

getLabelDisplayValue=()=>{
    return document.querySelector('#label-value').innerHTML
}

getInput=()=>{
    return document.querySelector('#input-value')
}

getLabelResult=()=>{
    return document.querySelector('#label-value')
}

getConvertType=()=>{
    return document.querySelector('#select-type').value
}

getClickOnPressedButton=()=>{
    // let valueButton
    let listButton = document.querySelectorAll('.buttons-letters .row div')
    for(const button of listButton){
        button.addEventListener('click', e=>{
            valueButton = button.innerText
            getInput().value+= valueButton
            toConvert()
        })
    }
}

setResultDisplay=(value)=>{
    getLabelResult().innerText = value
}

 // ============================================
// Pegar valor, verificar se ele é válido conforme o tipo de conversão
validarEntrada=()=> {
    let typeConvert = getConvertType()
    let inputValue = getInputValue()
    if(inputValue === '') return false

    if(typeConvert === d_b || typeConvert == d_h) {
        return isNumber(inputValue)
    } else if (typeConvert == b_d) {
        return isBinary(inputValue)
    } else if (typeConvert === h_d){
        return isHexadecimal(inputValue)
    }
    return false;
}

isNumber=(value)=>{
    return !isNaN(value)
}

isBinary =(value)=>{
    let binary = value
    let letters = ['a','b','c', 'd', 'e', 'f']

    if(isNaN(value)){
        return false
    }

    for (let i = 0; i< value.length; i++){
        if (value[i] < 0 || value[i] > 1){
            return false
        }
    }

    for (let x = 0; x < binary.length; x++) {
        for(let j=0; j < letters.length; j++) {
            if (binary[x].toUpperCase() === letters[j].toUpperCase()){
                return false        
            }
        }
    }

    return true
}

isHexadecimal=(value)=>{
    let hexadecimal = value
    let letters = ['a','b','c', 'd', 'e', 'f']
    for (let x = 0; x < hexadecimal.length; x++) {
        for(let j=0; j < letters.length; j++) {
            if (hexadecimal[x].toUpperCase() === letters[j].toUpperCase()){
                return true          
            }
        }
    }

    return false
}

isEmptyInputValue=()=>{
    return getInputValue() === ''
}

// ===========================================
// converter valor
toConvert =() => {
    let result = ''
    if(validarEntrada()){
        if(d_b == getConvertType()){
            result = decimalToBinary(getInputValue())

        } else if (b_d == getConvertType()){
            result = binaryToDecimal(getInputValue())

        } else if (d_h == getConvertType()){
            result = decimalToHexadecimal(getInputValue())

        } else if (h_d == getConvertType()){
            result = hexadecimalToDecimal(getInputValue())
        }
    }
    setResultDisplay(result)
    console.log('s' + result)
}

// funções para converter
// ================ DECIMAL E BINÁRIO ================ 
decimalToBinary = (value) => {
    let binary = parseInt(value).toString(2)
    return binary
}

binaryToDecimal=(value)=>{
    let decimal = parseInt(value, 2)
    return decimal
}

// ================ DECIMAL E HEXADECIMAL ================ 
decimalToHexadecimal= (value) =>{
    let hexadecimal = parseInt(value).toString(16)
    return hexadecimal
}

hexadecimalToDecimal= (value) =>{
    let decimal = parseInt(value, 16)
    return decimal 
}

changeStepByStep=(type)=>{
    let paragrafo = document.querySelector('.content-container-center')
    paragrafo.innerHTML = type
}

changeVideo=(url)=>{
    document.querySelector('iframe').src = url
}

run=()=>{
    convertToTypeExchange()
    getClickOnPressedButton()
    getInput().addEventListener('input', e=>{
        toConvert()
    })
}

run()



// Binário decimal
let binDec = `
    <h2>Passo a Passo</h2>
    <h3>Binário - Decimal</h3>
    <p>
    O sistema binário só possui 2 algarismos. 
    Cada posição tem um peso de uma potência de 2 (base do sistema binário). 
    Sendo assim, para se converter um número de binário para decimal, deve-se multiplicar 
    cada bit pela potência de sua posição e somar os resultados. Simples assim!
    </p>

    <table>
        <!--Linha 1 -->
        <tr>
            <td><p><strong>Binário</strong></p></td> 
            <td><p>1</p></td>
            <td><p>0</p></td>
            <td><p>1</p></td>
            <td><p>1</p></td>
        <tr>
        <!--Linha 2 -->
        <tr>
            <td rowspan="2"><p><strong>Valor da oposição</strong></p></td>
            <td><p>1X2<sup>3</sup></p></td>
            <td><p>0X2<sup>2</sup></p></td>
            <td><p>1X2<sup>1</sup></p></td>
            <td><p>1X2<sup>0</sup></p></td>
        </tr>
        <!--Linha 3 -->
        <tr>
            <td><p>8</p></td>
            <td><p>0</p></td>
            <td><p>2</p></td>
            <td><p>1</p></td>
        </tr>

        <tr>
            <td><p><strong>Resultado</strong></p></td> 
            <td colspan="4"><p>(8 + 0 + 2 + 1) = 11 decimal</p></td>
        </tr>
    </table>`


//  Decimal - Binário
let decBin = `
    <h2>Passo a Passo</h2>
    <h3>Decimal - Binário</h3>
    <p>Para realizar a conversão de decimal para binário, realiza-se a divisão sucessiva por 2 (base do sistema binário). 
    O resultado da conversão será dado pelo último quociente (MSB) e o agrupamento dos restos de divisão será o número binário.<br></p>
    
    <p>Por exemplo, vamos converter o número 45 em binário:<br></p>
    
    <img src="https://www.embarcados.com.br/wp-content/uploads/2016/07/decimal-bin%C3%A1rio.jpg"/>
    
    <p>A leitura do resultado é feita do último quociente para o primeiro resto. 
    Sendo assim, o resultado da conversão do número 45 para binário é: 101101<sub>2</sub></p>
    `


//  Decimal - Hexadecimal
let decHex = `
    <h2>Passo a Passo</h2>
    <h3>Decimal - Hexadecimal</h3>
    <p>
    Para converter um número decimal em hexadecimal realiza-se a divisão 
    sucessiva por 16 (base do sistema hexadecimal), semelhante à conversão de decimal para binário. 
    <br></p>
    <p>Por exemplo, vamos converter o número 438 em hexadecimal:<br></p>
    
    <img src="https://www.embarcados.com.br/wp-content/uploads/2016/07/decimal-hexadecimal.jpg"/>
    
    <p>O resultado é lido da direita para a esquerda a partir do último quociente. 
    Assim. 438 é igual a 1B6<sub>16</sub></p>

    <p>Note que o resto da segunda divisão foi o número 11, que corresponde ao número B em Hexadecimal.</p>

    `

// Hexadecimal - Binário 
let hexDec = `
    <h2>Passo a Passo</h2>
    <h3>Hexadecimal- Decimal</h3>
    <p>
    A conversão de hexadecimal para decimal segue o mesmo princípio apresentado para o sistema binário. 
    Multiplica-se cada dígito pela potência de 16 relativa à posição e somam-se os resultados: 
    </p>

    <table>
        <!--Linha 1 -->
        <tr>
            <td><p><strong>Hexadecimal</strong></p></td> 
            <td><p>1</p></td>
            <td><p>2</p></td>
            <td><p>C</p></td>
        <tr>
        <!--Linha 2 -->
        <tr>
            <td rowspan="2"><p><strong>Valor da oposição</strong></p></td>
            <td><p>1X16<sup>2</sup></p></td>
            <td><p>2X16<sup>1</sup></p></td>
            <td><p>12X16<sup>0</sup></p></td>
        </tr>
        <!--Linha 3 -->
        <tr>
            <td><p>256</p></td>
            <td><p>32</p></td>
            <td><p>12</p></td>
        </tr>

        <!--Linha 4 -->
        <tr>
            <td><p><strong>Resultado</strong></p></td> 
            <td colspan="4"><p>(256 + 32 + 121) = 300 decimal</p></td>
        </tr>
    </table>`
    
/*
document.querySelector('select').addEventListener('change', event=>{
    let type= document.querySelector('option:checked').text
    setLabelTitleAndResult(type)
    setPassoAPasso()
})


clear=()=>{
    let label = document.querySelector('#label-result-value')
    let inputField = document.querySelector('#field-value')
    label.innerHTML = "0"
    inputField.value = ""

}

setPassoAPasso =()=>{
    let type= document.querySelector('option:checked').text
    let passoAPasso = document.querySelector('.step-scroll')
    
    switch (type.toUpperCase()) {
        // arquivo 1 (decimal - binario)
        case d_b:
            passoAPasso.innerHTML = `Explicação ${d_b}`
            changeVideo(url_d_b)
            break;

        // arquivo 2 (binario - decimal)
        case b_d:
            passoAPasso.innerHTML = `Explicação ${b_d}`
            changeVideo(url_b_d)
            break;
        
        // arquivo 3 (decimal - hexadecimal)
        case d_h:
            passoAPasso.innerHTML = `Explicação ${d_h}`
            break;

        // arquivo 4 (hexadecimal - decimal)
        case h_d:
            passoAPasso.innerHTML = `Explicação ${h_d}`
        break;

        default:
            break;
    }
    clear()
}

toConvert =() => {

    let select = document.querySelector('select')
    let selectedIndex = select.options[select.selectedIndex].text.toUpperCase()

    let result = 0;

    try {

        switch (selectedIndex) {

            // decimal - binario
            case d_b:
                result = decimalToBinary(getInputValue())
                setLabelValue(result)
                break;

            // binario - decimal
            case b_d:
                result = binaryToDecimal(getInputValue())
                setLabelValue(result)
                break;

            // decimal hexadecimal
            case d_h:
                result = decimalToHexadecimal(getInputValue())
                setLabelValue(result)  
                break;

            // hexadecimal - decimal
            case h_d: 
                result = hexadecimalToDecimal(getInputValue())
                setLabelValue(result)
                break;

            default:
                break;
        }
    } catch (e){
        setLabelValue(e)
    }
}

// 
function getInputValue(){
    return document.querySelector('#field-value').value
}

function setLabelValue(value){
    let textLabel = document.querySelector('#label-result-value')
    textLabel.innerHTML = value
}

setLabelTitleAndResult =(type)=> {
    let labelValue = document.querySelector('#label-value')
    let labelResult = document.querySelector('#label-result')

    // const d_b = 'DECIMAL - BINÁRIO'
    let arrayType = type.split('-')
    let from = arrayType[0]
    let to = arrayType[1]

    from = from.substring(0,from.length-1)
    to = to.substring(1)

    labelValue.innerHTML = from
    labelResult.innerHTML = to
}

// funções para converter

// ================ DECIMAL E BINÁRIO ================ 
decimalToBinary = (value) => {
    if(isNumber(value)){
        let binary = parseInt(value).toString(2)
        return binary
    }
    throw 'Error'
}

binaryToDecimal=(value)=>{
    if(isBinary(value)){
        let decimal = parseInt(value, 2)
        return decimal
    }
    throw 'Error'
}

// ================ DECIMAL E HEXADECIMAL ================ 
function decimalToHexadecimal(value){
    if(isNumber(value)){
        console.log(value+'<>' + isNumber(value))
        let hexadecimal = parseInt(value).toString(16)
        return hexadecimal

    }
    throw 'Error'
}

function hexadecimalToDecimal(value){
    
    if(isHexadecimal(value)){
        let decimal = parseInt(value, 16)
        return decimal 
    }
    throw 'Error'
}

// ================ DECIMAL E OCTAL ================ 

function isNumber(value){
    return !isNaN(value)
}

function isHexadecimal(value){
    let hexadecimal = value
    let letters = ['a','b','c', 'd', 'e', 'f']
    for (let x = 0; x < hexadecimal.length; x++) {
        for(let j=0; j < letters.length; j++) {
            if (hexadecimal[x].toUpperCase() === letters[j].toUpperCase()){
                return true          
            }
        }
    }

    return false
}

function isBinary (value){
    let binary = value
    let letters = ['a','b','c', 'd', 'e', 'f']

    if(isNaN(value)){
        return false
    }

    for (let i = 0; i< value.length; i++){
        if (value[i] < 0 || value[i] > 1){
            return false
        }
    }

    for (let x = 0; x < binary.length; x++) {
        for(let j=0; j < letters.length; j++) {
            if (binary[x].toUpperCase() === letters[j].toUpperCase()){
                return false        
            }
        }
    }

    return true
}

function isEmpty(){
    return (getInputValue() === '')
}




// load
setDefaultState=()=>{
    setPassoAPasso()
}

setDefaultState()

*/