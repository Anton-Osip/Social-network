import React from 'react'
import banner from '../images/banner.jpg'


export default function Profile() {
	return (
		<div className='content'>
			<div>
				<img src={banner} alt='banner' className='banner-img' />
			</div>
			<div>ava + description</div>
			<div>
				My post
				<div>New Post</div>
			</div>
			<div>
				<div>post 1</div>
				<div>post 2</div>
			</div>
		</div>
	)
}
