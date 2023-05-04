import { useState } from 'react';
import Modal from './components/modal/Modal';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [modal, setModal] = useState(null);
	return (
		<>
			<GlobalStyles />
			<h1>Núcleo de la aplicación</h1>
			<button onClick={() => setModal(<h1>Hola</h1>)}>Open portal</button>
			<button onClick={() => setModal(<h1>Adios</h1>)}>
				Open different portal
			</button>
			<Modal setModal={setModal}>{modal}</Modal>
		</>
	);
};

export default App;
