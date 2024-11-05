import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "./redux/store";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <>
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </div>
    </>
  )
}

export default App
