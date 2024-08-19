const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>
  
const Content = ({ parts }) => {
    return (
    <>
      {parts.map((x) => <Part key={x.id} part={x}></Part>)} 
    </>
    )
}
    

const Course = ({course}) => {

    
    let sum = course.parts.reduce((total,part) => total+part.exercises ,0)
    console.log(sum)

    return (
        <div>
        <Header course={course.name}></Header>
        <Content parts={course.parts}/>
        <Total sum={sum} />
        </div>
    )
    
}

export default Course