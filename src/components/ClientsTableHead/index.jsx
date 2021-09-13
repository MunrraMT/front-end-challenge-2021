import { TableCell, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { arrayOf, string } from 'prop-types';

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

const ClientsTableHead = ({ columns }) => {
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow className={classes.backgroundColorBlue}>
        {columns.map((item) => (
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

ClientsTableHead.propTypes = {
  columns: arrayOf(string).isRequired,
};

export default ClientsTableHead;
