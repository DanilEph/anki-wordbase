import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import routes from './routes';
import lightTheme from './Themes/lightTheme';
import UserStore from './store/userStore';
import { AUTH, HOME } from './constants';
import withRouter from './HOC/withRouter';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';

const store = {
  user: new UserStore(),
};
export const Context = createContext(store);

const App = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  const login = user.getLogin();

  useEffect(() => {
    if (login == 'null' | null) {
      navigate(AUTH);
    } else {
      navigate(HOME);
    }
  }, [login]);

  return (
    <Context.Provider value={store}>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          {routes.map(({ component, path }) => (
            <Route path={path} element={component} />
          ))}
        </Routes>
      </ThemeProvider>
    </Context.Provider>
  );
});

export default withRouter(App);
