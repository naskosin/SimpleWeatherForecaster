export const getData = async (query) =>{
    const res = await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    let result = res.json();
    return result ;
}