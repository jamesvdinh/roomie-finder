import React, {useState, useEffect} from 'react';
import './header.scss';
import {attributes} from './data/attributes.js'

function App() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/accounts").then(
      res => res.json()
    ).then(
      data => {
        setAccounts(data);
      }
    )
  }, [])

  return (
    <header className='header'>
      <div className='criteria'>
        <form action="http://localhost:5000/accounts" method='post'>
          <input className='name-input' id="name-input" name="name" type="text" placeholder="Name"></input>
          <input className='age-input' id="age-input" type="number" name="age" placeholder="Age"></input>
          <select className='year' id="year-input">
            {attributes["years"].map((item, index) => (
              <option value={item} key={index}>{item}</option>
            ))}
          </select>
          <select className='major' id="major-input">
            {attributes["majors"].map((item, index) => (
                <option value={item} key={index}>{item}</option>
              ))}
          </select>
          
          <select className='interests-input' id="intersts-input">
            {attributes["interests"].map((item, index) => (
                <option value={item} key={index}>{item}</option>
              ))}
          </select>
        </form>
      </div>
      <button className='searchBtn'>Search</button>
      <h2 className='results-heading'>Results</h2>
      {accounts.map((account, i) => (
        <p key={i}>{account["name"]}, {account["age"]}</p>
      ))}
      <div className='results-container'></div>
    </header>
  );
}

export default App;
