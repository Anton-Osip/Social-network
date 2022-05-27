import React from 'react'
import banner from '../../images/banner.jpg'
import ava from '../../images/ava.jpg'
import styles from './Profile.module.css'

export default function Profile() {
	return (
		<div className={styles.content}>
			<div>
				<img src={banner} alt='banner' className={styles.banner__img} />
			</div>
			<div className={styles.me}>
				<div className={styles.me__ava}>
					<img src={ava} alt='ava' className={styles.me__avaImg} />
				</div>
				<div className={styles.me__info}>
					<h3 className={styles.me__name}>Osipchyk Anton</h3>

					<p className={styles.me__text}>Date of Birth: 2 january</p>
					<p className={styles.me__text}>City: Minsk</p>
					<p className={styles.me__text}>
						City: Minsk Education: BNTU '21
					</p>
					<p className={styles.me__text}>
						Web Site: https://it-kamasutra.com
					</p>
				</div>
			</div>
			<div className={styles.newPost}>
				<h3 className={styles.newPost__title}>My posts</h3>
				<form className={styles.newPost__form}>
					<input
						type='text'
						placeholder='your news...'
						className={styles.newPost__input}
					/>
					<button className={styles.newPost__btn}>Send</button>
				</form>
			</div>
			<div className={styles.posts}>
				<div className={styles.post}>
					<div className={styles.post__ava}>
						<img
							src={ava}
							alt='ava'
							className={styles.post__avaImg}
						/>
					</div>
					<p className={styles.post__text}>
						Hey, why nobody love me?
					</p>
				</div>
				<div className={styles.post}>
					<div className={styles.post__ava}>
						<img
							src={ava}
							alt='ava'
							className={styles.post__avaImg}
						/>
					</div>
					<p className={styles.post__text}>
						It's our new program! Hey!
					</p>
				</div>
			</div>
		</div>
	)
}
