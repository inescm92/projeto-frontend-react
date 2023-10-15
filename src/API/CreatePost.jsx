import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../components/PostForm';

import axios from 'axios';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const navigate = useNavigate();
	const { dispatch } = usePosts();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:3000/posts', { title, body });

			const data = response.data;
			console.log(data);

			dispatch({ type: 'ADD_POST', payload: data });

			// Redirecionar para a página principal ou mostrar mensagem de sucesso
			alert('novo post criado');
			navigate('/');
		} catch (error) {
			console.error('Erro ao criar post:', error);
		}
	};

	return (
		<>
			<PostForm action='create' id={null} title={title} body={body} onTitleChange={setTitle} onBodyChange={setBody} onSubmit={handleSubmit} />
		</>
	);
};

export default CreatePost;
