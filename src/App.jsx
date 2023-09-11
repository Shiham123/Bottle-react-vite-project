import { useEffect, useState } from 'react';
import Bottle from './components/bottle';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/public/bottleData.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center font-bold my-8">
        React bottle Project
      </h1>
      <div className="grid grid-cols-3">
        {data.map((perData) => (
          <Bottle perData={perData} key={perData.id} />
        ))}
      </div>
    </>
  );
}

export default App;
