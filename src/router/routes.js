import About from "../pages/About"
import Posts from "../pages/Posts"
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";


export const privateRoutes = [
	{ path: '*', name: 'Home', element: <Posts />, isPrivate: true },
	{ path: '/posts', name: 'Posts', element: <Posts />, isPrivate: true },
	{ path: '/about', name: 'About', element: <About />, isPrivate: true },
	{ path: '/posts/:id', name: 'Posts', element: <PostIdPage />, isPrivate: true },
]

export const publicRoutes = [
	{ path: '/login', name: 'Login', element: <Login />, isPrivate: false },
]