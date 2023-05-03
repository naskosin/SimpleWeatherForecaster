import {NewComponent} from '../HOC/HOC'

 const GreetingsOne=({name, family})=>{
     const tag = document.getElementsByClassName("nasko");
     const tagged = tag[0]
     console.log(tag[0])
     const exx = ()=>{
        tag[0].innerHTML="Nasko"

     };
     tagged.addEventListener('click', exx);
    return(
        <p className="nasko" style={{color:'red'}}>Hi, nice to meet you my friend <span>{name} {family}</span></p>
    )
}
export default NewComponent(GreetingsOne);