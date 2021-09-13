import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { arrayOf, shape, string } from 'prop-types';

const useStyles = makeStyles(() => ({
  btn: {
    backgroundColor: '#209cee',
    color: '#FFFFFF',
  },
}));

const ClientsList = ({ columns, rows }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columns.map((item) => (
              <TableCell align={item === 'Nome' ? 'left' : 'center'} key={item}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, name, gender, birth }) => (
            <TableRow key={id}>
              <TableCell align="left">{name}</TableCell>
              <TableCell align="center">{gender}</TableCell>
              <TableCell align="center">{birth}</TableCell>
              <TableCell align="center">
                <Button
                  className={classes.btn}
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
      </Table>
    </TableContainer>
  );
};

ClientsList.propTypes = {
  columns: arrayOf(string).isRequired,
  rows: arrayOf(
    shape({
      id: string,
      name: string,
      gender: string,
      birth: string,
    }),
  ).isRequired,
};

export default ClientsList;
