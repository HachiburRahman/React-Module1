
import './App.css'

function App() {
  

  return (
    <>
    <h1>React Core Concept</h1>
    <Developer  name="Hachib" tech="JavaScript"></Developer>
    <Developer name="Antu" tech="React"></Developer>
    <Developer name="Moon" tech="Java"></Developer>
    <Person name="Hachibur Rahman" hobby="Cricket"></Person>
      
    </>
  )
}

function Developer({name,tech}){
  return(
    <div className='developer'>
      <h2>Name:{name}</h2>
      <p>Technology:{tech}</p>
    </div>
  )
}

function Person ({name,hobby}){
  const personStyle={
    border:"2px solid red",
    borderRadius:"10px",
    margin:"10px",
    padding:"10px"
  }
  return(
    <div style={personStyle}>
      <h2>Name:{name}</h2>
      <p>Favourite Hobby:{hobby}</p>
    </div>
  )
}

export default App
