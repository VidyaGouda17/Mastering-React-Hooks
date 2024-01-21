import { useRef, useState } from 'react';

export default function RefExample() {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);

	const handleIncrement = () => {
		//setCount(count + 1);
		countRef.current++;

		console.log('State:', count); // 0
		console.log('Ref:', countRef.current); // 1
	};

	return (
		<div className='tutorial'>
			<b> Count: {count}</b>
			<button
				style={{
					marginLeft: '10px',
					backgroundColor: 'green',
					color: 'white',
					fontSize: '18px',
				}}
				onClick={handleIncrement}>
				Increment
			</button>
			<div>{`The count state value is:  ${count}`}</div>
			<div>{`The count ref value is: ${countRef.current}`}</div>
		</div>
	);
}
