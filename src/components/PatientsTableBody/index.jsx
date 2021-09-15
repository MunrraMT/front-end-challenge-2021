import { useContext, useEffect } from 'react';

import { TableBody } from '@material-ui/core';

import DataContext from '../../providers/DataContext';
import filterList from './filter-list';
import formatList from './format-list';

const PatientsTableBody = () => {
  const { data, setDataFiltered, textSearch } = useContext(DataContext);

  const newData = filterList(data, textSearch);

  useEffect(() => {
    setDataFiltered(newData);
  }, [textSearch]);

  return <TableBody>{formatList(newData)}</TableBody>;
};

export default PatientsTableBody;
