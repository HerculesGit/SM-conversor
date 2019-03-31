
// Pegar o tipo de conversão (pelo select). EX: Decimal - Binário
document.querySelector('#field-value').addEventListener('input', e=>{
    let select = document.querySelector('select')
    let selectedIndex = select.options[select.selectedIndex].text

    const d_b = 'DECIMAL - BINÁRIO'
    const b_d = 'BINÁRIO - DECIMAL'

    
    console.log('shazam' + selectedIndex)
    //console.log(selectedIndex.toUpperCase() === d_b)
    let result = 0;
    if (selectedIndex.toUpperCase() === d_b){
        result = decimalToBinary(getInputValue())
        let valueInput = getInputValue()
        setLabelValue(decimalToBinary(parseInt(valueInput)))

    } else if (selectedIndex.toUpperCase() === b_d){
        result = binaryToDecimal(getInputValue())
        setLabelValue(binaryToDecimal(getInputValue()))
    } 
    
})

// Converter o valor


// Atualizar a label

// Setar Tutorial


// 
function getInputValue(){
    return document.querySelector('#field-value').value
}

function setLabelValue(value){
    let textLabel = document.querySelector('#label-result-value')
    textLabel.innerHTML = value
}

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