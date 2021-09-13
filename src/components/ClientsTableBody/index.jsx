import { useContext } from 'react';

import DataContext from '../../providers/DataContext';
import filterList from './filter-list';
import TableFormatter from './TableFormatter';

const ClientsTableBody = () => {
  const { data, textSearch } = useContext(DataContext);

  if (textSearch.length > 0)
    return <TableFormatter list={filterList(data, textSearch)} />;

  return data.length > 0 && <TableFormatter list={data} />;
};

export default ClientsTableBody;
