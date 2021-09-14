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
  const [data, setData] = useState([
    {
      seed: '',
      data: [],
    },
  ]);
  const [textSearch, setTextSearch] = useState('');
  const [page, setPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [clientDetails, setClientDetails] = useState('');

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        titles,
        setTitles,
        textSearch,
        setTextSearch,
        page,
        setPage,
        showModal,
        setShowModal,
        clientDetails,
        setClientDetails,
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
