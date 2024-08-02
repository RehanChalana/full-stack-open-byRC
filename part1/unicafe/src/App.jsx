import {useState} from 'react';

const StatisticLine = ({name,value}) => <tr><td>{name}</td><td>{value}</td></tr>

const Statistics = ({data}) => {
  if(data.all==0) return <p>No feedback given</p>
  return (
  <table>
  <tbody>
    <StatisticLine name="good" value={data.good}></StatisticLine>
    <StatisticLine name="neutral" value={data.neutral}></StatisticLine>
    <StatisticLine name="bad" value={data.bad}/>
    <StatisticLine name="all" value={data.all}/>
    <StatisticLine name="average" value={(data.good-data.bad)/data.all}/>
    <StatisticLine name="positive" value={`${(data.good/data.all)*100} %`} />
    </tbody>
  </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    setAll(all+1)
  }

  const handleBad = () => {
    setBad(bad+1)
    setAll(all+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }

  const data = {"good" : good , "bad" : bad , "neutral" : neutral , "all" : all}

  return (
    <div>
    <h1>give feedback</h1>
    <button onClick={handleGood}>good</button>
    <button onClick={handleNeutral}>neutral</button>
    <button onClick={handleBad}>bad</button>
    <h1>Statistics</h1>
    <Statistics data={data}/>
    </div>
  )
}

export default App;