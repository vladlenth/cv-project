import { FC } from 'react';

import { Header } from '@widgets/header/ui/Header/Header';
import { CVCreatePage } from '@pages/cv-create';

const App: FC = () => {
	return (
		<>
			<Header />
			<CVCreatePage />
		</>
	);
};

export default App;
