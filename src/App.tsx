import { FC } from 'react';

import { Header } from './components/Header';
import CVForm from './components/CVForm';

const App: FC = () => {
  return (
    <>
      <Header />
      <CVForm />
    </>
  );
};

export default App;
