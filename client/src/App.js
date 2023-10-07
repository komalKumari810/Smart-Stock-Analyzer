

import Header from './components/header/Header';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Header />
    </DataProvider>
  );
}

export default App;
