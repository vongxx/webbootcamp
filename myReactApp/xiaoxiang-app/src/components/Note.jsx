import React from "react"

function Note(props){
    let randInt = Math.floor(Math.random() * 2000)
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}.</p>
        <img src="https://picsum.photos/id/{props.randInt}/200/300" alt="RandomImage"></img>
    </div>
}

export default Note;