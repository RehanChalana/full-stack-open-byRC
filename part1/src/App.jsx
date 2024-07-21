
const Header = (props) => {
  <>
    return (
      <h1>{props.course}</h1>
    )
  </>
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0]} exercise={props.exercise[0]}/> 
      <Part part={props.parts[1]} exercise={props.exercise[1]}/> 
      <Part part={props.parts[2]} exercise={props.exercise[2]}/> 
   </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercise[0] + props.exercise[1] + props.exercise[2]}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [part1,part2,part3]
  const exercise = [exercises1,exercises2,exercises3]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercise={exercise} />
      <Total exercise={exercise}/>
    </div>
  )
}

export default App
