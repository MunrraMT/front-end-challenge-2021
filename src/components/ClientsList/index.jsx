import { Paper, Table, TableContainer } from '@material-ui/core';
import ClientsTableBody from '../ClientsTableBody';
import ClientsTableHead from '../ClientsTableHead';

const ClientsList = () => (
  <TableContainer component={Paper}>
    <Table size="small" aria-label="a dense table">
      <ClientsTableHead />

      <ClientsTableBody />
    </Table>
  </TableContainer>
);

export default ClientsList;
