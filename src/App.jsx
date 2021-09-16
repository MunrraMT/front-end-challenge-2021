import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import HomePage from './pages/HomePage';
import PatientsDetails from './components/PatientDetails';
import theme from './theme';

const App = () => (
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

export default App;
