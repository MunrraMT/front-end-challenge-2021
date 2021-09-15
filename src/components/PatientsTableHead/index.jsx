import { TableCell, TableHead, TableRow } from '@material-ui/core';

import useStyles from './styles';

const PatientsTableHead = () => {
  const classes = useStyles();

  const titles = ['Nome', 'Gênero', 'Nascimento', 'Ações'];

  return (
    <TableHead>
      <TableRow>
        {titles.map((item) => (
          <TableCell
            className={`${classes.textColor} ${classes.textUpperCase} ${classes.backgroundColorBlue}`}
            align={item === 'Nome' ? 'left' : 'center'}
            key={item}
          >
            {item}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default PatientsTableHead;
