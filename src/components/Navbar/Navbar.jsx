import React from 'react'
import styles from './Navbar.module.css'
import uuid from 'react-uuid'

import Link from './Link/Link'
import FrendLink from './FrendLink/FrendLink'

export default function Navbar(props) {
	const linksElements = props.links.map(link => (
		<Link link={link.link} href={link.href} key={uuid()} />
	))
	const frendsElements = props.frends.map(frend => (
		<FrendLink key={uuid()} name={frend.name} />
	))
	return (
		<nav className={styles.nav}>
			{linksElements}
			<div className={styles.frends}>{frendsElements}</div>
		</nav>
	)
}
