export const dateBuilder = (d)=>{
    const day = d.getDay();
    const date = d.getDate();
    const month = d.getMonth();
    const year = d.getYear();
    return `${date}`
}