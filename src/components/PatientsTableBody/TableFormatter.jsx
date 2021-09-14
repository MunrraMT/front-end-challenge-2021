/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { TableBody, TableCell, TableRow } from '@material-ui/core';

import useStyles from './styles';

import DataContext from '../../providers/DataContext';
import {
  isValidBirth,
  isValidGender,
  isValidName,
} from '../../utils/validator';

const TableFormatter = ({ list }) => {
  const { page } = useContext(DataContext);

  const location = useLocation();

  const classes = useStyles();

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
                <Link
                  className={classes.link}
                  to={{
                    pathname: `/patient/${id}`,
                    state: {
                      background: location,
                    },
                  }}
                >
                  Visualizar
                </Link>
              </TableCell>
            </TableRow>
          );
        }),
      )}
    </TableBody>
  );
};

export default TableFormatter;
