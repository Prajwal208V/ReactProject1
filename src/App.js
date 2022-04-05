import React from 'react';
import { BlockProvider } from './components/block_context';
import { Ui } from './components/UI/UI';
import { Provider } from "react-redux";
import { Store } from './components/store/specificIteam';

const App = () => {
  return (
    <div>
      <Provider store={Store}>  {/*redux-store*/}
        <BlockProvider>
          <Ui />
        </BlockProvider>
      </Provider>
    </div>
  )
}

export default App;