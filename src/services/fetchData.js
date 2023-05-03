
const apiUrl = `${process.env.REACT_APP_API_URL}`;


 export const getDataByLocation = async (lat,long) =>{
    const res = await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
    let result = res.json();
    return result ;
};

export const getDataByLocationFiveDay = async (lat,long) =>{
    const res = await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}&cnt=5`);
    let result = res.json();
    return result ;
};



 export const getData = async (query) =>{
    const res = await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    let result = res.json();
    return result ;
};


export const getFiveDaysData = async (query) =>{
    const res = await fetch(`${process.env.REACT_APP_API_URL}/forecast?q=${query}&appid=${process.env.REACT_APP_API_KEY}&cnt=5`);
    let result = res.json();
    return result ;
}

