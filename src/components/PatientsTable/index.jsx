import { useContext } from 'react';

import { Paper, Table, TableContainer } from '@material-ui/core';

import useStyles from './styles';

import DataContext from '../../providers/DataContext';
import PatientsTableBody from '../PatientsTableBody';
import PatientsTableHead from '../PatientsTableHead';
import ErrorMessage from '../ErrorMessage';
import PatientsTableCount from '../PatientsTableCount';

const PatientsTable = () => {
  const { filterSearch, numberPatients } = useContext(DataContext);

  const classes = useStyles();

  return (
    <>
      <TableContainer
        component={Paper}
        className={
          numberPatients > 0 ? classes.container : classes.containerEmpty
        }
      >
        <Table stickyHeader size="small">
          <PatientsTableHead />
          <PatientsTableBody />
        </Table>
      </TableContainer>

      {numberPatients > 0 && <PatientsTableCount />}

      {filterSearch.name.length > 0 && numberPatients === 0 && (
        <ErrorMessage message="Paciente não encontrado na tabela." />
      )}
    </>
  );
};

export default PatientsTable;
