import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { arrayOf, shape, string } from 'prop-types';

const ClientsList = ({ columns, rows }) => (
  <TableContainer component={Paper}>
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          {columns.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableCell key={`col-${index}`}>{item}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(({ id, name, gender, birth }) => (
          <TableRow key={id}>
            <TableCell>{name}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{birth}</TableCell>
            <TableCell>Visualizar</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

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
