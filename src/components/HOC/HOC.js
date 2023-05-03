export const  NewComponent = (OldComponent) =>{
    function NewComponentMaker(props){
        return <OldComponent {...props} name='Nasko'family='Sinapov'/>
    }
    return NewComponentMaker
}