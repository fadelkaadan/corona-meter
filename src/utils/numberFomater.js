const formatNumber = (num) => {
    if (num === undefined || num === null)
        return ''
    else if (isNaN(num))
        return num
        
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default formatNumber