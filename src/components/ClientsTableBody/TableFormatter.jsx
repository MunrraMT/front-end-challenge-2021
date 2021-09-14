/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TableBody, TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import DataContext from '../../providers/DataContext';
import {
  isValidBirth,
  isValidGender,
  isValidName,
} from '../../utils/validator';

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

const TableFormatter = ({ list }) => {
  const { page } = useContext(DataContext);

  const history = useHistory();

  const classes = useStyles();

  const openModal = (id) => {
    history.push(`/patient/${id}`);
  };

  return (
    <TableBody>
      {list.map(({ data, seed }) =>
        data.map((client) => {
          const id = `${seed}-${page}-${client.name.first}-${client.name.last}`;

          return (
            <TableRow hover key={id}>
              <TableCell align="left">
                {isValidName(client.name.first, client.name.last)}
              </TableCell>

              <TableCell align="center">
                {isValidGender(client.gender)}
              </TableCell>
              <TableCell align="center">
                {isValidBirth(client.dob.date)}
              </TableCell>

              <TableCell align="center">
                <Button
                  className={`${classes.backgroundColorBlue} ${classes.textColor} ${classes.backgroundColorBlueHover}`}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => openModal(id)}
                >
                  Visualizar
                </Button>
              </TableCell>
            </TableRow>
          );
        }),
      )}
    </TableBody>
  );
};

export default TableFormatter;
