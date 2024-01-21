import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from './components/Counter';
import Lists from './components/callBack/users';
import RefExample from './components/refExample';
import { RefExample2 } from './components/refExample_2';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Counter />
			{/* <Lists /> */}
			{/* <RefExample /> */}
			{/* <RefExample2 /> */}
		</>
	);
}

export default App;
