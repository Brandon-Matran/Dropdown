import "./App.css";
import Dropdown from "./Dropdown"

function App() {
  const options = [
    {value: 'green', label: 'Green'},
    {value: 'blue', label: 'Blue'},
    {value: 'red', label: 'Red'},
    {value: 'yellow', label: 'Yellow'},
    {value: 'orange', label: 'Orange'},
    {value: 'pink', label: 'Pink'},
    {value: 'purple', label: 'Purple'},
    {value: 'grey', label: 'Grey'},

  ]
  return (
    <div className="App">
      <Dropdown isMulti isSearchable onChange={(value) => console.log(value)} placeHolder="Select..." options={options} />
    </div>
  );
}

export default App;
