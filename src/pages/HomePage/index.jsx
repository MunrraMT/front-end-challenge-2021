import { useContext, useEffect } from 'react';

import DataContext from '../../providers/DataContext';
import Header from '../../components/Header';
import MainContent from '../../components/MainContent';

const HomePage = () => {
  const { setData, setError } = useContext(DataContext);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=0&results=50`)
      .then((response) => {
        if (!response.ok) setError(true);

        return response.json();
      })
      .then((dataFetch) => {
        const newData = dataFetch.results.map((patient) => ({
          ...patient,
          page: 0,
          seed: dataFetch.info.seed,
        }));

        setData(newData);
      });
  }, []);

  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

export default HomePage;
