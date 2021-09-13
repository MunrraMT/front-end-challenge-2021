import { TableCell, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useContext } from 'react';

import DataContext from '../../providers/DataContext';

const useStyles = makeStyles(() => ({
  backgroundColorBlue: {
    backgroundColor: '#209cee',
  },
  textColor: {
    color: '#ffffff',
  },
  textUpperCase: {
    textTransform: 'uppercase',
  },
}));

const ClientsTableHead = () => {
  const { titles } = useContext(DataContext);

  const classes = useStyles();

  return (
    <TableHead>
      <TableRow className={classes.backgroundColorBlue}>
        {titles.map((item) => (
          <TableCell
            className={`${classes.textColor} ${classes.textUpperCase}`}
            align={item === 'Nome' ? 'left' : 'center'}
            key={item}
          >
            {item}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ClientsTableHead;
