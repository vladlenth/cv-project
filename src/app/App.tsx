import { FC } from 'react';

import { ui } from '@widgets/header';
import { CVCreatePage } from '@pages/cv-create';

const App: FC = () => {
	return (
		<>
			<ui.Header />
			<CVCreatePage />
		</>
	);
};

export default App;
