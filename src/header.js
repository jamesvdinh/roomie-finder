import React, {useState, useEffect} from 'react';
import './header.scss';
import {attributes} from './data/attributes.js'

function App() {
  const [formData, setFormData] = useState({
    "name": '',
    "year": '',
    "major": '',
    "age": '',
    "gender": '',
    "religion": '',
    "dietpref": '',
  });
  const [accounts, setAccounts] = useState(
    [
      {
          "name": "Fake Mark",
          "age": 19,
          "gender": "male",
          "num_roommates": 4,
          "year": 1,
          "major": "CS",
          "interests": "no",
          "religion": "budd",
          "instagram": "@fakemark"
  
      },
      {
          "name": "Real Mark",
          "age": 25,
          "gender": "male",
          "num_roommates": 4,
          "year": 3,
          "major": "CS",
          "interests": "la",
          "religion": "chr",
          "instagram": "@realmark"
      },
      {
          "name": "Mark Bot",
          "age": 27,
          "gender": "female",
          "num_roommates": 4,
          "year": 1,
          "major": "Data",
          "interests": "ball",
          "religion": "dao",
          "instagram": "@markbot"
      },
      {
          "name": "Not Mark",
          "age": 22,
          "gender": "female",
          "num_roommates": 4,
          "year": 4,
          "major": "CS",
          "interests": "play",
          "religion": "chr",
          "instagram": "@notmark"
      }]
  );
  const [data, setData] = useState();
  const keys = Object.keys(accounts[0]);

  // to display accounts data
  // useEffect(() => {
  //   fetch("/accounts", {
  //     method:"GET", headers: {
  //       "Content-Type": "application/json",
  //       'Accept': 'application/json'
  //     },
  // }).then(
  //     res => res.json()
  //   ).then(
  //     jsondata => {
  //       setData(jsondata);
  //       console.log(jsondata);
  //     }
  //   )
  // }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log('Data successfully posted to Flask API');
        // You can reset the form or perform any other action here
        fetch("/accounts", {
          method:"GET", headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
          },
        }).then(
            res => res.json()
          ).then(
            data => {
              console.log(data);
            }
          )
      } else {
        console.error('Failed to post data to Flask API');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <header className='header'>
      <form onSubmit={handleSubmit}>
      <h1 className='title'>Roomie Finder</h1>
        <div className='criteria'>
          <div className="input_container">
            <label htmlFor="name">Name</label>
            <input className='name-input' id="name-input" type="text" name="name" value={formData["name"]} onChange={handleChange} placeholder="Name"></input>
          </div>
          <div className="input_container">
            <label htmlFor="age">Age</label>
            <input className='age-input' id="age-input" type="number" name="age" value={formData["age"]} onChange={handleChange} placeholder="Age"></input>
          </div>
          <div className="input_container">
            <label htmlFor="year">Year</label>
            <select className='year' id="year-input" name="year" value={formData["year"]} onChange={handleChange}>
              {attributes["years"].map((item, index) => (
                <option value={item} key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className="input_container">
            <label htmlFor="major">Major</label>
            <select className='major' id="major-input" name="major" value={formData["major"]} onChange={handleChange}>
              {attributes["majors"].map((item, index) => (
                  <option value={item} key={index}>{item}</option>
                ))}
            </select>
          </div>
          <div className="input_container">
            <label htmlFor="religion">Religion</label>
            <select className='religion' id="religion-input" name="religion" value={formData["religion"]} onChange={handleChange}>
              {attributes["religion"].map((item, index) => (
                  <option value={item} key={index}>{item}</option>
                ))}
            </select>
          </div>
          <div className="input_container">
            <label htmlFor="interests">Interest Cat.</label>
            <select className='interests-input' id="intersts-input" name="interests" value={formData["interests"]} onChange={handleChange}>
              {attributes["interests"].map((item, index) => (
                  <option value={item} key={index}>{item}</option>
                ))}
            </select>
          </div>
          <div className="input_container">
            <label htmlFor="gender">Gender</label>
            <select className='gender-input' id="gender-input" name="gender" value={formData["gender"]} onChange={handleChange}>
              {attributes["gender"].map((item, index) => (
                  <option value={item} key={index}>{item}</option>
                ))}
            </select>
          </div>
          <div className="input_container">
            <label htmlFor="diet">Diet</label>
            <select className='diet-input' id="diet-input" name="diet" value={formData["diet"]} onChange={handleChange}>
              {attributes["diet"].map((item, index) => (
                  <option value={item} key={index}>{item}</option>
                ))}
            </select>
          </div>
        </div>
        <input type='submit' className='searchBtn' value='submit'></input>
      </form>
      <h2 className='results-heading'>Your Matches</h2>
      <div className='results-container'>
        {accounts.map((item, i) => (
          <div key={i} className="person-entry">
            <h2>{item["name"]}</h2>
            <ul>
              {keys.map((key, index) => (
                <li key={index}>{key}: {item[key]}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </header>
  );
}

export default App;
