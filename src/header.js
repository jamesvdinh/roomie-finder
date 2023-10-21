import './header.scss';
import {data} from './data/data.js'

function App() {
  return (
    <header className='header'>
      <div className='criteria'>
        <input className='name-input' id="name-input" type="text" placeholder="Name"></input>
        <input className='age-input' id="age-input" type="number" placeholder="Age"></input>
        <select className='year' id="year-input">
          {data["years"].map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
        <select className='major' id="major-input">
          {data["majors"].map((item, index) => (
              <option value={item} key={index}>{item}</option>
            ))}
        </select>
        
        <select className='interests-input' id="intersts-input">
          {data["interests"].map((item, index) => (
              <option value={item} key={index}>{item}</option>
            ))}
        </select>
      </div>
      <button className='searchBtn'>Search</button>
      <h2 className='results-heading'>Results</h2>
      <div className='results-container'></div>
      <py-script>
        name = document.getElementbyID('name-input').value
        data.json += name
      </py-script>
    </header>
  );
}

export default App;
