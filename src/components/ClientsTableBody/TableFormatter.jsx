/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { Button, TableBody, TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import DataContext from '../../providers/DataContext';

import {
  isValidBirth,
  isValidGender,
  isValidId,
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
  const { setShowModal, setClientDetails } = useContext(DataContext);

  const classes = useStyles();

  const openModal = (data) => {
    setShowModal((prev) => !prev);
    setClientDetails(data);
  };

  return (
    <TableBody>
      {list.map((client) => (
        <TableRow hover key={isValidId(client.id.value)}>
          <TableCell align="left">
            {isValidName(client.name.first, client.name.last)}
          </TableCell>

          <TableCell align="center">{isValidGender(client.gender)}</TableCell>
          <TableCell align="center">{isValidBirth(client.dob.date)}</TableCell>

          <TableCell align="center">
            <Button
              className={`${classes.backgroundColorBlue} ${classes.textColor} ${classes.backgroundColorBlueHover}`}
              size="small"
              variant="contained"
              color="primary"
              onClick={() => openModal(client)}
            >
              Visualizar
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableFormatter;
