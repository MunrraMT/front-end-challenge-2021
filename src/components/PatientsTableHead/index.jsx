import { TableCell, TableHead, TableRow } from '@material-ui/core';

import useStyles from './styles';

const PatientsTableHead = () => {
  const classes = useStyles();

  const titles = ['Nome', 'Gênero', 'Nascimento', 'Ações'];

  return (
    <TableHead>
      <TableRow className={classes.backgroundColorBlue}>
        {titles.map((item) => (
          <TableCell
            className={`${classes.textColor} ${classes.textUpperCase}`}
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
