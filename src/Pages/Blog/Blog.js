import React from 'react'
import Blog_Card from './Blog_Components/blog_card'
import './Blog.css'
const Blog = () => {
  return (
    <>
    <section className='bg'>
      <div>
        <div className='blog'>
          <div className='header2'></div>
        </div>
        <h1 className='heading'>Blogs</h1>
        <div className='cards'>
          <Blog_Card></Blog_Card>
          <Blog_Card></Blog_Card>
          <Blog_Card></Blog_Card>
        </div>
      </div>
      </section>
    </>

  )
}

export default Blog