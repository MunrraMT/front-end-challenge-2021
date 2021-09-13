import { useContext } from 'react';
import { Button, TableBody, TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import DataContext from '../../providers/DataContext';
import {
  birthIsValid,
  genderIsValid,
  idIsValid,
  nameIsValid,
} from './validator';

const useStyles = makeStyles(() => ({
  backgroundColorBlue: {
    backgroundColor: '#209cee',
  },
  textColor: {
    color: '#ffffff',
  },
  backgroundColorBlueHover: {
    '&:hover': {
      backgroundColor: '#146296',
    },
  },
}));

const ClientsTableBody = () => {
  const { data } = useContext(DataContext);

  const classes = useStyles();

  return (
    data.length > 0 && (
      <TableBody>
        {data.map((client) => (
          <TableRow hover key={idIsValid(client.id.value)}>
            <TableCell align="left">
              {nameIsValid(client.name.first, client.name.last)}
            </TableCell>

            <TableCell align="center">{genderIsValid(client.gender)}</TableCell>
            <TableCell align="center">
              {birthIsValid(client.dob.date)}
            </TableCell>

            <TableCell align="center">
              <Button
                className={`${classes.backgroundColorBlue} ${classes.textColor} ${classes.backgroundColorBlueHover}`}
                size="small"
                variant="contained"
                color="primary"
              >
                Visualizar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    )
  );
};

export default ClientsTableBody;
