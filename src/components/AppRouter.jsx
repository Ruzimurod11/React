import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes";
import Login from "../pages/Login";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
	const {isAuth, isLoading} = useContext(AuthContext);
	console.log(isAuth)

	if (isLoading) {
		return <Loader />
	}
	return (
		isAuth
			?
			<Routes>
				{ privateRoutes.map((r, i) => {
					if (r.isPrivate) {
						return <Route key={i} path={r.path} element={r.element} />
					} else {
						return <Route key={i} path={r.path} element={r.element} />
					}
				})}
			</Routes>
			:
			<Routes>
				{ publicRoutes.map((r, i) => {
					return <Route key={i} path={r.path} element={r.element} />
				})}
				<Route path="*" element={<Login />}/>
			</Routes>
	);
};

export default AppRouter;
