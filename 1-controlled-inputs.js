import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');

  const [person, setPerson] = useState({ firstName: '', email: '' });
  const [people, setPeople] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (firstName && email) {
  //     const person = { id: new Date().getTime().toString(), firstName, email };
  //     console.log(person);
  //     setPeople((people) => {
  //       return [...people, person]
  //     })
  //     setFirstName('');
  //     setEmail('');
  //   }
  //   else {
  //     console.log("Empty value");
  //   }
  // }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log({ ...person });
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '' });
    }

  }
  return <>
    <article>
      <form action="" className='form'>
        <div className='form-control'>
          <label htmlFor="firstName">Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={person.email}
            onChange={handleChange} />
        </div>
        <button className='btn' type='submit' onClick={handleSubmit}>Add Person</button>
      </form>
      {
        people.map((person) => {
          const { id, firstName, email } = person
          return <div className='item' key={id} >
            <h4 >{firstName}</h4>
            <p>{email}</p>
          </div>
        })
      }
    </article>
  </>
};

export default ControlledInputs;
