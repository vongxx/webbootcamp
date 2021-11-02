import React from "react";
import Entry from "./Entry"
import emojipedia from "../emojipedia"

function createEntry(myEmoji){
  return (
    <Entry 
      key={myEmoji.id}
      emoji={myEmoji.emoji} 
      name={myEmoji.name} 
      meaning={myEmoji.meaning}
    />
  );

}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
