import { node } from 'prop-types';
import { useState } from 'react';

import DataContext from './DataContext';

const DataProvider = ({ children }) => {
  const [titles, setTitles] = useState([
    'Nome',
    'Gênero',
    'Nascimento',
    'Ações',
  ]);
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData, titles, setTitles }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: node.isRequired,
};

export default DataProvider;
