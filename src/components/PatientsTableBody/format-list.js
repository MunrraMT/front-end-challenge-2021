import { Link, useLocation } from 'react-router-dom';

import { TableCell, TableRow } from '@material-ui/core';
import {
  isValidBirth,
  isValidGender,
  isValidName,
  isValidNationality,
} from '../../utils/validator';

import useStyles from './styles';

const formatList = (list) => {
  const location = useLocation();

  const classes = useStyles();

  return list.map((client) => (
    <TableRow hover key={client.login.uuid}>
      <TableCell align="left">
        {isValidName(client.name.first, client.name.last)}
      </TableCell>

      <TableCell align="center">{isValidNationality(client.nat)}</TableCell>
      <TableCell align="center">{isValidGender(client.gender)}</TableCell>
      <TableCell align="center">{isValidBirth(client.dob.date)}</TableCell>

      <TableCell align="center">
        <Link
          className={classes.link}
          to={{
            pathname: `/patient/${client.seed}-${client.page}-${client.login.uuid}`,
            state: {
              background: location,
            },
          }}
        >
          Visualizar
        </Link>
      </TableCell>
    </TableRow>
  ));
};

export default formatList;
