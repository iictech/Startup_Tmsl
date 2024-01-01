import React from "react";

const Blog_Page_Card = () => {
    return (
        <>
        <div>
            <div className='header'>

                <a href='./Blog'>
                    <h1 className='head'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="35" width="40" viewBox="0 0 448 512" className='arrow' style={{ fill: 'white' }}><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>Blogs
                    </h1>
                </a>
                
                <figure className="relative imgp max-w-sm transition-all duration-300 cursor-pointer ">
                    <a href="#">
                        <img className="rounded-lg text-center" src="https://th.bing.com/th/id/OIP.I2wUkbqqN3unZgAQaBZANwHaEK?w=700&h=394&rs=1&pid=ImgDetMain" alt="image description" />
                    </a>
                    <figcaption className="absolute px-4 textp text-white bottom-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </figcaption>
                </figure>

            </div>

            <div className='blogtxt'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto laudantium modi aperiam mollitia, dignissimos illum placeat, quidem doloremque velit consequuntur ipsum, asperiores cum ipsa sed quo! Ullam, deleniti officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto laudantium modi aperiam mollitia, dignissimos illum placeat, quidem doloremque velit consequuntur ipsum, asperiores cum ipsa sed quo! Ullam, deleniti officiis. Ullam, deleniti officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto laudantium modi aperiam mollitia, dignissimos illum placeat.</p>
            </div>

        </div>
        </>
    )
}
export default Blog_Page_Card