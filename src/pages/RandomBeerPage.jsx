import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RandomBeerPage() {
	const [randomBeer, setRandomBeer] = useState({});

	useEffect(() => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers`)
			.then((response) => {
				const BeerIdArray = response.data.map((beer) => beer._id);
				const randomId =
					BeerIdArray[Math.floor(Math.random() * BeerIdArray.length)];

				const selectedBeer = response.data.find(
					(beer) => beer._id === randomId
				);
				setRandomBeer(selectedBeer);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			{randomBeer && (
				<>
					<div className="beer-detail" key={randomBeer._id}>
						<br />
						<br />
						<img src={`${randomBeer.image_url}`} />
						<h2>{randomBeer.name}</h2>
						<h3>{randomBeer.tagline}</h3>
						<sub>First Brewed: {randomBeer.first_brewed}</sub>
						<small>Attenuation Level: {randomBeer.attenuation_level}</small>
						<p>{randomBeer.description}</p>
						<mark>Contributed By: {randomBeer.contributed_by}</mark>
					</div>
				</>
			)}
		</>
	);
}

export default RandomBeerPage;
