import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/">
				{
					<img src="https://www.pngkey.com/png/full/497-4970297_edpmedia-white-home-button-icon.png" />
				}
			</Link>
		</nav>
	);
}
export default Navbar;
