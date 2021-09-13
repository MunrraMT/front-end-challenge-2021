import { Paper, Table, TableContainer } from '@material-ui/core';
import { arrayOf, shape, string } from 'prop-types';
import ClientsTableBody from '../ClientsTableBody';
import ClientsTableHead from '../ClientsTableHead';

const ClientsList = ({ columns, rows }) => (
  <TableContainer component={Paper}>
    <Table size="small" aria-label="a dense table">
      <ClientsTableHead columns={columns} />

      <ClientsTableBody rows={rows} />
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
