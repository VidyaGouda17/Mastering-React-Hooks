import React, { useEffect, useState } from 'react';

function Counter() {
	// initialize the state , useState is the function and returns the array with two elements
	const [countValue, setCountValue] = useState(0);

	// to increment the count value
	const incrementCount = () => {
		setCountValue(countValue + 1);
	};

	// to increment the count value
	const decrementCount = () => {
		countValue > 0 ? setCountValue(countValue - 1) : null;
		// 1. when you want to decrement countValue with based on the previous value use the
		// callback function in the setCountValue
		// setCountValue((prevCountValue) => {
		// 	prevCountValue - 1;
		// });
		// countValue = 2
		setCountValue(countValue - 1);
		setCountValue(countValue - 1);
		// output :- 1
		//
	};

	// useEffect:-
	// 1. change in the any state
	// 2. call the asynchronous function like calling the API's etc..
	// 3. If no dependency added then the useEffect will run at least once when the component mount
	// useEffect(() => {
	// 	// write the code you want to run
	// 	// Optional return function:-whenever you want clean are remove any function when this component is unmount
	// 	// 1 . when there is no dependency then this function will run at unmount of this component , to clean up
	// 	// return () => {
	// 	// 	console.log('clean me,  when this component is unMount ');
	// 	// };
	// }, []); // dependency array

	useEffect(() => {
		console.log('Count Value is:-', countValue);
	}, [countValue]);
	return (
		<>
			<b style={{ textAlign: 'center', fontSize: '30px', margin: '20px' }}>
				Counter Project
			</b>
			<div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
				<button
					style={{ backgroundColor: 'red', color: 'white', fontSize: '18px' }}
					onClick={decrementCount}>
					Decrement
				</button>
				<p style={{ color: '#000', fontSize: '24px', fontWeight: 700 }}>
					{countValue}
				</p>
				<button
					onClick={incrementCount}
					style={{
						backgroundColor: 'green',
						color: 'white',
						fontSize: '18px',
					}}>
					Increment
				</button>
			</div>
			<h4>{`The count value is ${countValue}`}</h4>
		</>
	);
}

export default Counter;
