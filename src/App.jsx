import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import DataContext from './providers/DataContext';
import HomePage from './pages/HomePage';
import PatientsDetails from './components/PatientDetails';
import theme from './theme';

const App = () => {
  const { setData, setError } = useContext(DataContext);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=0&results=50`)
      .then((response) => {
        if (!response.ok) setError(true);

        return response.json();
      })
      .then((dataFetch) => {
        const newData = dataFetch.results.map((patient) => ({
          ...patient,
          page: 0,
          seed: dataFetch.info.seed,
        }));

        setData(newData);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/patient/:seed-:page-:uuid"
            component={PatientsDetails}
          />

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>

        <Route path="/" component={HomePage} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
