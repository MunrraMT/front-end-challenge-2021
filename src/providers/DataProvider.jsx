import { node } from 'prop-types';
import { useState } from 'react';

import DataContext from './DataContext';

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [error, setError] = useState(false);
  const [filterSearch, setFilterSearch] = useState({
    text: '',
    gender: '',
    type: '',
  });
  const [numberPatients, setNumberPatients] = useState(0);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        dataFiltered,
        setDataFiltered,
        numberPatients,
        setNumberPatients,
        filterSearch,
        setFilterSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: node.isRequired,
};

export default DataProvider;
