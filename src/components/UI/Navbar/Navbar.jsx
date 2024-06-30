import React, { useContext } from "react";
import '../../../styles/App.css';
import { Link } from "react-router-dom";
import Mybutton from "../button/Mybutton";
import { AuthContext } from "../../../context";
import s from './Navbar.module.css';

const Navbar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth')
	}
	return (
		<div className="navbar">
			<Mybutton onClick={logout}>
				Logout
			</Mybutton>
			<div className="navbar__links">
				<Link className={s.nav} to="/about">About this site</Link>
				<Link className={s.nav + ' ' + s.navPost} to="/posts">Posts</Link>
			</div>
		</div>
	);
};

export default Navbar;
