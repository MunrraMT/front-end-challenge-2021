import { node } from 'prop-types';
import { useState } from 'react';

import DataContext from './DataContext';

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [textSearch, setTextSearch] = useState('');

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        textSearch,
        setTextSearch,
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
