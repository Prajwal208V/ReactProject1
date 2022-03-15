import React from 'react';
import { BlockProvider } from './components/block_context';
import {Ui} from './components/UI/UI';

const App = () => {
  return (
    <div>
      <BlockProvider>
        <Ui />
      </BlockProvider>
    </div>
  )
}

export default App;