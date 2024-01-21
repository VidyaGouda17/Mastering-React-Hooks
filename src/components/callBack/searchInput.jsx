import { memo } from 'react';

function SearchInput({ onChange }) {
	console.log('Search rendered!');

	return (
		<input
			style={{ marginLeft: '20px', width: '200px', height: '40px' }}
			type='text'
			placeholder='Search users...'
			onChange={(e) => onChange(e.target.value)}
		/>
	);
}

export default memo(SearchInput);
