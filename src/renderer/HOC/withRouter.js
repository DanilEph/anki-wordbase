import { MemoryRouter as Router } from 'react-router-dom';

const withRouter = (WrappedComponent) => {
  const WithRouter = (props) => {
    return (
      <Router>
        <WrappedComponent {...props} />
      </Router>
    );
  };

  return WithRouter;
};

export default withRouter;
