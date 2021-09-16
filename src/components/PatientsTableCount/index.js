import { useContext } from 'react';

import { Box, Typography } from '@material-ui/core';

import DataContext from '../../providers/DataContext';

const PatientsTableCount = () => {
  const { numberPatients } = useContext(DataContext);

  return (
    <Box component="section" display="flex" justifyContent="end">
      <Typography>Numero de paciente na tabela: {numberPatients}</Typography>
    </Box>
  );
};

export default PatientsTableCount;
