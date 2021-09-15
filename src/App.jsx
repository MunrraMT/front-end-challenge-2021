import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DataContext from './providers/DataContext';
import HomePage from './pages/HomePage';
import PatientsDetails from './components/PatientDetails';

const App = () => {
  const { setData } = useContext(DataContext);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=0&results=50`)
      .then((response) => response.json())
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
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/patient/:seed-:page-:uuid"
            component={PatientsDetails}
          />
        </Switch>

        <Route path="/" component={HomePage} />
      </BrowserRouter>
    </>
  );
};

export default App;
