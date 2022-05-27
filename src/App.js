import React from 'react'
import './App.css'

const App = () => {
	return (
		<div>
			<Header />
			<Technologis />
		</div>
	)
}
const Header = () => {
	return (
		<div>
			<a href='#'>Home</a>
			<a href='#'>News Feed</a>
			<a href='#'>Messages</a>
		</div>
	)
}
const Technologis = () => {
	return (
		<div>
			<ul>
				<li>CSS</li>
				<li>HTML</li>
				<li>JS</li>
				<li>REACT</li>
			</ul>
		</div>
	)
}

export default App
