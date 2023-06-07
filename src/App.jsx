import './App.css';
import Contacts from './contacts.json';
import { useState } from 'react';

const mapContactData = contacts => {
  return contacts.map(contact => {
    return {
      ...contact
    };
  });
};

function App() {
  let slice = Contacts.slice(0, 4);
  const [contacts, setContacts] = useState(mapContactData(Contacts));
  const [slicedArray, setSlicedArray] = useState(slice);
  const [sortOrder, setSortOrder] = useState('asc');

  const addHandler = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length - 5) + 5);
    const randomContact = contacts[randomIndex];

    if (!slicedArray.includes(randomContact)) {
      const updatedSlicedArray = [...slicedArray, randomContact];
      setSlicedArray(updatedSlicedArray);
    }
  };

  const deleteContact = contactId => {
    const filteredSlicedArray = slicedArray.filter(contact => {
      return contactId !== contact.id;
    });

    setSlicedArray(filteredSlicedArray);
  };

  const sortName = () => {
    const sortedArray = [...slicedArray].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setSlicedArray(sortedArray);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortPopularity = () => {
    const sortedArray = [...slicedArray].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.popularity - b.popularity;
      } else {
        return b.popularity - a.popularity;
      }
    });

    setSlicedArray(sortedArray);
    setSortOrder(sortOrder === 'asc' ? 'des' : 'asc');
  };

  return (
    <div className='App'>
      <div className='head'>
        <h2>IronContacts</h2>
        <div className='but'>
          {' '}
          <button onClick={addHandler}>Add Random Contact</button>
          <button onClick={sortName}>Sort By Name</button>
          <button onClick={sortPopularity}>Sort By Popularity</button>
        </div>
      </div>
      <table>
        <thead>
          <tr className='trr'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete Contact</th>
          </tr>
        </thead>
        <tbody>
          {slicedArray.map(contact => (
            <tr key={contact.id} className='contact'>
              <td style={{ width: '20%' }}>
                {' '}
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{
                    width: '30%',
                    height: '100%',
                    borderRadius: '200px'
                  }}
                />{' '}
              </td>
              <td>
                <b>{contact.name}</b>
              </td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <p>🏆</p>}</td>
              <td>{contact.wonEmmy && <p>🏆</p>}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete Contact
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
