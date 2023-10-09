import { Route, Routes } from 'react-router-dom';
import HomePage from './Client/Homepage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
