import { FatalErrorBoundary } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import './scaffold.css';
import './index.css';
import NavbarLayout from 'src/layouts/NavbarLayout/NavbarLayout';

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodApolloProvider>
      <NavbarLayout />
      <Routes />
    </RedwoodApolloProvider>
  </FatalErrorBoundary>
);

export default App;
