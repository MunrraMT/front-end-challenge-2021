import { useContext } from 'react';

import { TableBody } from '@material-ui/core';

import DataContext from '../../providers/DataContext';
import filterList from './filter-list';
import formatList from './format-list';

const PatientsTableBody = () => {
  const { data, textSearch } = useContext(DataContext);

  return (
    <TableBody>
      {textSearch ? formatList(filterList(data, textSearch)) : formatList(data)}
    </TableBody>
  );
};

export default PatientsTableBody;
