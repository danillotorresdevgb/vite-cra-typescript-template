import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import { useState } from 'react';
import { PersonItemList } from 'components/Person';

function App() {
  console.log('Pagina Renderizada');
  const [render, setRender] = useState(false);
  const [person, setPerson] = useState([
    { name: 'Max', age: 28, status: true },
    { name: 'Manu', age: 29, status: false },
    { name: 'Stephanie', age: 26, status: true },
    { name: 'Lena', age: 30, status: false },
  ]);
  function handleChange(index: number) {
    const newPerson = person;
    console.log(newPerson[index]);
    newPerson[index].status = !newPerson[index].status;
    setPerson(newPerson);
    setRender(!render);
  }

  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <Header title="Poc render list" />
        <Logo height={100} width={100} />
      </div>
      <ul>
        {person.map((person, index) => (
          <PersonItemList
            key={index}
            name={person.name}
            age={person.age}
            status={person.status}
            onClick={() => handleChange(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
