import { Paper, Table, TableContainer } from '@material-ui/core';

import useStyles from './styles';

import PatientsTableBody from '../PatientsTableBody';
import PatientsTableHead from '../PatientsTableHead';

const PatientsList = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.relative}>
      <Table
        className={classes.relative}
        size="small"
        aria-label="a dense table"
      >
        <PatientsTableHead />

        <PatientsTableBody />
      </Table>
    </TableContainer>
  );
};

export default PatientsList;
