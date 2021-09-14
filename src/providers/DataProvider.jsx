import { node } from 'prop-types';
import { useState } from 'react';

import DataContext from './DataContext';

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [textSearch, setTextSearch] = useState('');
  const [page, setPage] = useState(0);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        textSearch,
        setTextSearch,
        page,
        setPage,
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
