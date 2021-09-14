import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DataContext from './providers/DataContext';
import ClientDetails from './components/ClientDetails';
import HomePage from './pages/HomePage';

const App = () => {
  const { setData } = useContext(DataContext);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=0&results=50`)
      .then((response) => response.json())
      .then((data) => {
        setData([
          {
            seed: data.info.seed,
            data: data.results,
          },
        ]);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/patient/:id" component={ClientDetails} />
        </Switch>

        <Route path="/" component={HomePage} />
      </BrowserRouter>
    </>
  );
};

export default App;
