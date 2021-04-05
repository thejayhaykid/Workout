import { AuthProvider } from '@redwoodjs/auth';
import netlifyIdentity from 'netlify-identity-widget';
import { isBrowser } from '@redwoodjs/prerender/browserUtils';
import { FatalErrorBoundary } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import './scaffold.css';
import './index.css';
import NavbarLayout from 'src/layouts/NavbarLayout/NavbarLayout';

isBrowser && netlifyIdentity.init();

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={netlifyIdentity} type="netlify">
      <RedwoodApolloProvider>
        <NavbarLayout />
        <Routes />
      </RedwoodApolloProvider>
    </AuthProvider>
  </FatalErrorBoundary>
);

export default App;
