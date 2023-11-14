import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BeerDetailsPage() {
	const [beerDetail, setBeerDetail] = useState(null);

	const { beerId } = useParams();

	useEffect(() => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
			.then((response) => {
				setBeerDetail(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			{beerDetail && (
				<>
					<div className="beer-detail" key={beerDetail._id}>
						<br />
						<br />
						<img src={`${beerDetail.image_url}`} />
						<h2>{beerDetail.name}</h2>
						<h3>{beerDetail.tagline}</h3>
						<sub>First Brewed: {beerDetail.first_brewed}</sub>
						<small>Attenuation Level: {beerDetail.attenuation_level}</small>
						<p>{beerDetail.description}</p>
						<mark>Contributed By: {beerDetail.contributed_by}</mark>
					</div>
				</>
			)}
		</>
	);
}

export default BeerDetailsPage;
