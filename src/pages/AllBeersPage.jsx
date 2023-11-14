import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllBeersPage() {
	const [allBeerList, setAllBeerList] = useState(null);
	useEffect(() => {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((response) => {
				console.log('success');
				setAllBeerList(response.data);
			})
			.catch((error) => {
				console.log('failed');
				console.log(error);
			});
	}, []);
	return (
		<>
			{allBeerList &&
				allBeerList.map((beer) => (
					<>
						<div key={beer._id}>
							<Link className="beer" to={`/beers/${beer._id}`}>
								<img src={`${beer.image_url}`} />
								<h2>{beer.name}</h2>
								<h3>{beer.tagline}</h3>
								<p>{beer.description}</p>
							</Link>
						</div>
						<div>
							<hr />
						</div>
					</>
				))}
		</>
	);
}
export default AllBeersPage;
