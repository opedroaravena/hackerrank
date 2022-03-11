function timeConversion(s) {
    let horas = s.slice(0,2)
    let period = s.slice(8,10)

    let newWord = s.slice(2,8)
    let newHora = 0
    let newPeriod = ''

    if(horas === '12' && period === 'AM'){
        newHora = '00'
    } else if(horas === '12' && period === 'PM'){
        newHora = '12'
    }    
      else if(period === 'PM'){
        newHora = parseInt(horas) + 12
    } else if(period === 'AM'){
        newPeriod = ''
        newHora = horas
    }
    console.log(`${newHora}${newWord}${newPeriod}`)
}

timeConversion("06:40:03AM")