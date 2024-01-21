import { useCallback, useState } from 'react';

import SearchInput from './searchInput';

const allUsers = ['john', 'alex', 'george', 'simon', 'james'];

export default function Lists() {
	const [users, setUsers] = useState(allUsers);

	// useCallback (()=> {}, [])
	// useCallback return an function which we have passed to it
	//pass the dependency whenever you want to cache changes function into memory
	const handleSearch = useCallback(
		(text) => {
			console.log(users[0]);

			const filteredUsers = allUsers.filter((user) => user.includes(text));
			setUsers(filteredUsers);
		},
		[users]
	);

	return (
		<div className='tutorial'>
			<b style={{ textAlign: 'center', fontSize: '30px', margin: '20px' }}>
				List of Users
			</b>
			<div className='align-center mb-2 flex'>
				<button
					style={{
						backgroundColor: '#6600FF',
						color: '#ffffff',
						fontSize: '18px',
					}}
					onClick={() => setUsers(shuffle(allUsers))}>
					Shuffle
				</button>

				<SearchInput onChange={handleSearch} />
			</div>
			<ol type='1'>
				{users.map((user) => (
					<li key={user}>{user}</li>
				))}
			</ol>
		</div>
	);
}
