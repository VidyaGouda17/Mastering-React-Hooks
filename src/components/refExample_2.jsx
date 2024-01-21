import { useEffect, useRef } from 'react';

export function RefExample2() {
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<div className='tutorial'>
			<h1>React with Ref</h1>
			<input
				style={{ width: '200px', height: '40px' }}
				ref={inputRef}
				type='text'
				placeholder='Type something...'
			/>
		</div>
	);
}
