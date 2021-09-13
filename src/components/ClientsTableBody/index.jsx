import { Button, TableBody, TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { arrayOf, shape, string } from 'prop-types';

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

const ClientsTableBody = ({ rows }) => {
  const classes = useStyles();

  return (
    <TableBody>
      {rows.map(({ id, name, gender, birth }) => (
        <TableRow hover key={id}>
          <TableCell align="left">{name}</TableCell>
          <TableCell align="center">{gender}</TableCell>
          <TableCell align="center">{birth}</TableCell>
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
  );
};

ClientsTableBody.propTypes = {
  rows: arrayOf(
    shape({
      id: string,
      name: string,
      gender: string,
      birth: string,
    }),
  ).isRequired,
};

export default ClientsTableBody;
