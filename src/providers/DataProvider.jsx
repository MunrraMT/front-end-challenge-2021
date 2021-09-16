import { node } from 'prop-types';
import { useState } from 'react';

import DataContext from './DataContext';

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [error, setError] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const [numberPatients, setNumberPatients] = useState(0);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        textSearch,
        setTextSearch,
        dataFiltered,
        setDataFiltered,
        numberPatients,
        setNumberPatients,
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
