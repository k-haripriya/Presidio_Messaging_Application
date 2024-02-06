import './App.css';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import store,{persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
        <AppRoutes/>
      </PersistGate>
     
    </Provider>
  );
}

export default App;
