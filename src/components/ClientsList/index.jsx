import { Paper, Table, TableContainer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ClientsTableBody from '../ClientsTableBody';
import ClientsTableHead from '../ClientsTableHead';

const useStyles = makeStyles(() => ({
  relative: {
    position: 'relative',
  },
}));

const ClientsList = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.relative}>
      <Table
        className={classes.relative}
        size="small"
        aria-label="a dense table"
      >
        <ClientsTableHead />

        <ClientsTableBody />
      </Table>
    </TableContainer>
  );
};

export default ClientsList;
