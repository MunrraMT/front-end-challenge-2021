/* eslint-disable no-console */

import { useContext, useEffect } from 'react';

import DataContext from '../../providers/DataContext';
import Header from '../../components/Header';
import MainContent from '../../components/MainContent';

const HomePage = () => {
  const { setData, setError, urlInfo } = useContext(DataContext);

  useEffect(() => {
    let isCancelled = false;

    fetch(
      `${
        urlInfo.seed !== ''
          ? `https://randomuser.me/api/?page=${urlInfo.page}&results=50&seed=${urlInfo.seed}`
          : 'https://randomuser.me/api/?page=0&results=50'
      }`,
    )
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

        if (!isCancelled) {
          setData((prev) => [...prev, ...newData]);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });

    return () => {
      isCancelled = true;
    };
  }, [urlInfo]);

  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

export default HomePage;
