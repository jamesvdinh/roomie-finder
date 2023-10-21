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
  //     data => {
  //       console.log(data);
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
      <form action="/accounts" method='post'>
      <h1 className='title'>Roomie Finder</h1>
        <div className='criteria'>
            <input className='name-input' id="name-input" type="text" name="name" value={formData["name"]} onChange={handleChange} placeholder="Name"></input>
            <input className='age-input' id="age-input" type="number" name="age" value={formData["age"]} onChange={handleChange} placeholder="Age"></input>
            <select className='year' id="year-input" name="year" value={formData["year"]} onChange={handleChange}>
              {attributes["years"].map((item, index) => (
                <option value={item} key={index}>{item}</option>
              ))}
            </select>
            <label for="major">Major</label>
            <select className='major' id="major-input" name="major" value={formData["major"]}>
              {attributes["majors"].map((item, index) => (
                  <option value={item} key={index}>{item}</option>
                ))}
            </select>
            <select className='interests-input' id="intersts-input">
              {attributes["interests"].map((item, index) => (
                  <option value={item} key={index}>{item}</option>
                ))}
            </select>
        </div>
        <input type='submit' className='searchBtn' value='submit'></input>
      </form>
      <h2 className='results-heading'>Results</h2>
      {/* {data.map((account, i) => (
        <p key={i}>{account["name"]}</p>
      ))} */}
      <div className='results-container'></div>
    </header>
  );
}

export default App;
