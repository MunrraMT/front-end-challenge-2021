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
  const [urlInfo, setUrlInfo] = useState({ seed: '', page: '', uuid: '' });

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
        urlInfo,
        setUrlInfo,
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
