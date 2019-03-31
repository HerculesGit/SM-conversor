// Pegar o tipo de conversão (pelo select). EX: Decimal - Binário
let select = document.querySelector('select')
let selectedIndex = select.options[select.selectedIndex].text

const d_b = 'DECIMAL - BINÁRIO'
const b_d = 'BINÁRIO - DECIMAL'

// Converter o valor
if (selectedIndex.toUpperCase === d_b){
    console.log(d_b)

} else if (selectedIndex.toUpperCase === b_d){
    console.log(b_d)
}


// Atualizar a label

// Setar Tutorial


// funções para converter

// ================ DECIMAL E BINÁRIO ================ 
function decimalToBinary (value) {
    if(isNumber(value)){
        let binary = value.toString(2)
        return binary
    }
    return -1
}

function binaryToDecimal(value){
    let decimal = parseInt(value, 2)
    return decimal
}

// ================ DECIMAL E HEXADECIMAL ================ 
function decimalToHexadecimal(value){
    if(isNumber(value)){
        let hexadecimal = value.toString(16)
        return hexadecimal

    }
    return -1
}

function hexadecimalToDecimal(value){
    
    if(isHexadecimal(value)){
        let decimal = parseInt(value, 16)
        return decimal 
    }
    return -1
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
                console.log('achou:' + hexadecimal[x] + ' - ' + letters[j])
                return true          
            }
        }
    }

    return false
}

function isBinary (){
    
}