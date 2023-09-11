import { useEffect, useState } from 'react';
import Bottle from './components/bottle';
import {
  addLocalStorage,
  getLocalStorage,
  saveLocalStorage,
} from './assets/LS';
import LSbottle from './components/LSbottle';

function App() {
  const [data, setData] = useState([]);
  const [purchase, setPurchase] = useState(0);
  const [localStorage, setLocalStorage] = useState([]);

  useEffect(() => {
    fetch('/public/bottleData.json')
      .then((response) => response.json())
      .then((data) => setData(data));

    const localStorageProducts = getLocalStorage();
    setLocalStorage(localStorageProducts);
  }, []);

  useEffect(() => {
    saveLocalStorage(localStorage);
    setPurchase(localStorage);
  }, [localStorage]);

  const handleRemove = (id) => {
    const filerData = data.filter((item) => item.id !== id);
    setData(filerData);

    const updateLocalStorage = localStorage.filter((itemId) => itemId !== id);
    setLocalStorage(updateLocalStorage);
  };

  const handlePurchase = (id) => {
    if (id) {
      setPurchase(purchase + 1);
      addLocalStorage(id);
      setLocalStorage((prevData) => [...prevData, id]);
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center font-bold my-8">
        React bottle Project
      </h1>
      <h1>Count the purchase : {purchase.length}</h1>
      <h1>Count the Product : {data.length}</h1>
      <h1>Local Storage length : {localStorage.length}</h1>
      <LSbottle localStorage={localStorage} data={data} />
      <div className="grid grid-cols-3">
        {data.map((perData) => (
          <Bottle
            perData={perData}
            key={perData.id}
            handleRemove={handleRemove}
            handlePurchase={handlePurchase}
          />
        ))}
      </div>
    </>
  );
}

export default App;
