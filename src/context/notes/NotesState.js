
import Notecontext from "./noteContext";

const NoteState = (props)=>{

    const state ={
        "name" : "hitesh",
        "no."  : "13"
    }

    return(

        <Notecontext.Provider value={state}>
            {props.children}
        </Notecontext.Provider>
    )

}


export default NoteState;