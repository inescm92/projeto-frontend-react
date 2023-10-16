import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Popular from './components/Popular';
import Explore from './components/Explore';
import Join from './components/Join';
import Footer from './components/Footer';
import Blog from './components/Blog';

// crud imports
import CreatePost from './API/CreatePost';
import UpdatePost from './API/UpdatePost';
import DeletePost from './API/DeletePost';

// styles
import './styles/styles.css';

function App() {
	return (
		<BrowserRouter>
			<div>
				<header>
					<Navbar />
				</header>
				<main>
					<Home />
					<About />
					<Popular />
					<Explore />
				</main>
				<Blog />
				<Routes>
					<Route path='/create' element={<CreatePost />} />
					<Route path='/update/:id' element={<UpdatePost />} />
					<Route path='/delete/:id' element={<DeletePost />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
				<Join />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
