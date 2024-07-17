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
			<div className={s.wrapper}>
				<Mybutton onClick={logout}>
					Logout
				</Mybutton>
				<div className={s.navLinks}>
					<Link className={s.nav} to="/about">About this site</Link>
					<Link className={s.nav + ' ' + s.navPost} to="/posts">Posts</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
