import { useState, useEffect } from 'react';
import Language from './Language';
import Spinner from '../Spinner';

const Languages = ({ isHome = false }) => {
	const [languages, setLanguages] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchLanguages = async () => {
			const apiUrl = isHome
				? '/api/languages?_limit=3'
				: '/api/languages';

			try {
				const res = await fetch(apiUrl);
				const data = await res.json();
				setLanguages(data);
			} catch (error) {
				console.log('Error fetching data', error);
			} finally {
				setLoading(false);
			}
		};
		fetcLanguages();
	}, []);

	return (
		<>
			<section className=''>
				<div className=''>
					<h2 className=''>
						Available Programming Languages
					</h2>

					{loading ? (
						<Spinner loading={loading} />
					) : (
						<div className=''>
							{languages.map((language) => (
								<LanguageListing key={language.id} language={language} />
							))}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Languages;
