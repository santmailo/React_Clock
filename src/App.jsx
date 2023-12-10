import './App.css'

function App() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
  <center>
    <h1>Bharat Clock</h1>
    <p>This is the clock that shows the time in bharat at all times</p>
    <p>This is the current time: {date} - {time}</p>
  </center>
  )
}

export default App;