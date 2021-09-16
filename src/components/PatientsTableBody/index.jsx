import { useContext, useEffect } from 'react';

import { TableBody } from '@material-ui/core';

import DataContext from '../../providers/DataContext';
import filterList from './filter-list';
import formatList from './format-list';

const PatientsTableBody = () => {
  const { data, setDataFiltered, textSearch, setNumberPatients } =
    useContext(DataContext);

  const newData = filterList(data, textSearch);

  useEffect(() => {
    setDataFiltered(newData);
    setNumberPatients(newData.length);
  }, [textSearch, data]);

  return <TableBody>{formatList(newData)}</TableBody>;
};

export default PatientsTableBody;
