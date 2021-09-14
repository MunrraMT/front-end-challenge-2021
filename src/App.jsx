import { useContext, useEffect } from 'react';

import DataContext from './providers/DataContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ClientDetails from './components/ClientDetails';

const App = () => {
  const { setData, showModal } = useContext(DataContext);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=1&results=50`)
      .then((response) => response.json())
      .then(({ results }) => setData(results));
  }, []);

  return (
    <>
      <Header />
      <MainContent />

      {showModal && <ClientDetails />}
    </>
  );
};

export default App;
