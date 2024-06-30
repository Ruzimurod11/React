import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import Mybutton from "./UI/button/Mybutton";

const PostForm = ({create}) => {
	const [post, setPost] = useState({title: '', body: ''});

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
		setPost({title: '', body: ''});
	}

	return (
		<form>
			<MyInput
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				type="text"
				placeholder="Name post's"
			/>
			<MyInput
				value={post.body}
				onChange={(e) => setPost({ ...post, body: e.target.value })}
				type="text"
				placeholder="Description post's"
			/>
			<Mybutton onClick={addNewPost}>Create post</Mybutton>
		</form>
	);
};

export default PostForm;
