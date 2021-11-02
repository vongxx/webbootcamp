import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"

function App(){
  return <div>
    <Header/>
    <Note title="Hello" content="world"/>
    <Note title="Now" content="world"/>
    <Note title="Goodbye" content="world"/>
    <Footer />
  </div>;
}
export default App;