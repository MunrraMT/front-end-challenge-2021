import { TableCell, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  backgroundColorBlue: {
    backgroundColor: '#209cee',
  },
  textColor: {
    color: '#ffffff',
  },
  textUpperCase: {
    textTransform: 'uppercase',
  },
}));

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
