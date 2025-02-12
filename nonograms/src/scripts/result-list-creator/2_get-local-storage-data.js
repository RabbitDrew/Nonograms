const getResultData = () =>{ 
    const getArrData = JSON.parse(localStorage.getItem('resultData'))
    return getArrData
}

export default getResultData