import { useContext, useEffect } from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import DataContext from './providers/DataContext';

const App = () => {
  const context = useContext(DataContext);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=1&results=50`)
      .then((response) => response.json())
      .then(({ results }) => context.setData(results));
  }, []);

  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

export default App;
