import React from 'react';
import ReactDOM from 'react-dom';
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web';
import FatalErrorPage from 'src/pages/FatalErrorPage';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import Routes from 'src/Routes';

import './index.scss';

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
);
