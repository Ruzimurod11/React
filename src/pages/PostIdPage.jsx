import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import s from '../styles/PostIdPage.module.css';

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id)
		setPost(response.data);
	})

	const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id)
		setComments(response.data);
	})

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])
	return (
		<div>
			<h1>You opened page post's with id = {params.id}</h1>
			{isLoading
				? <Loader />
				: <h3> {post.id}. {post.title} </h3>
			}
			<h1>
				Commentaries
			</h1>
			{isComLoading
				? <Loader />
				: <div className={s.wrapper}>
						{comments.map(comm => 
							<div key={comm.id} style={{marginTop: 15}}>
								<h5>{comm.email}</h5>
								<div>{comm.body}</div>
							</div>
						)}
				</div>
			}
		</div>
	);
};

export default PostIdPage;
