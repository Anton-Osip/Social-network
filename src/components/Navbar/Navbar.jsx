import React from 'react'
import styles from './Navbar.module.css'
import uuid from 'react-uuid'

import Link from './Link/Link'
import FrendLink from './FrendLink/FrendLink'
import StoreContext from '../../StoreContext'

export default function Navbar() {
	return (
		<StoreContext.Consumer>
			{store => {
				const linksElements = store
					.getState()
					.sidebarPage.links.map(link => (
						<Link link={link.link} href={link.href} key={uuid()} />
					))
				const frendsElements = store
					.getState()
					.sidebarPage.frends.map(frend => (
						<FrendLink key={uuid()} name={frend.name} />
					))
				return (
					<nav className={styles.nav}>
						{linksElements}
						<div className={styles.frends}>{frendsElements}</div>
					</nav>
				)
			}}
		</StoreContext.Consumer>
	)
}
