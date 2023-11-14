import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<div className="homepage">
			<section className="all-beers">
				<Link to="/beers">
					<img src="src\assets\beers.png" alt="" />
					<h1>All Beers</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Voluptatibus totam, est eveniet laudantium autem porro in eum
						aspernatur! Dolorum quasi, vero odit incidunt ut placeat sequi nam
						quidem sint quos, provident libero iusto in corporis veniam corrupti
						officiis nihil, fugiat totam quibusdam! Laborum maiores neque
						necessitatibus quod. Nihil, architecto quae!
					</p>
				</Link>
			</section>
			<section className="random-beer">
				<Link to="random-beer">
					<img src="src\assets\random-beer.png" alt="" />
					<h1>Random Beer</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Voluptatibus totam, est eveniet laudantium autem porro in eum
						aspernatur! Dolorum quasi, vero odit incidunt ut placeat sequi nam
						quidem sint quos, provident libero iusto in corporis veniam corrupti
						officiis nihil, fugiat totam quibusdam! Laborum maiores neque
						necessitatibus quod. Nihil, architecto quae!
					</p>
				</Link>
			</section>
			<section className="new-beer">
				<Link to="new-beer">
					<img src="src\assets\new-beer.png" alt="" />
					<h1>New Beer</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Voluptatibus totam, est eveniet laudantium autem porro in eum
						aspernatur! Dolorum quasi, vero odit incidunt ut placeat sequi nam
						quidem sint quos, provident libero iusto in corporis veniam corrupti
						officiis nihil, fugiat totam quibusdam! Laborum maiores neque
						necessitatibus quod. Nihil, architecto quae!
					</p>
				</Link>
			</section>
		</div>
	);
}

export default HomePage;
