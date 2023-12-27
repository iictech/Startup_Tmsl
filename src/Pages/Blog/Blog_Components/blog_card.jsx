import React from "react";

const Blog_Card = () => {
    return (
        <>


            <div className="custom-width bg-white">

                <figure className="relative text-center transition-all duration-300 cursor-pointer">
                    <a href="./blog-page">
                        <img className="imgb" src="https://th.bing.com/th/id/OIP.I2wUkbqqN3unZgAQaBZANwHaEK?w=700&h=394&rs=1&pid=ImgDetMain" alt="image description"/>
                    </a>
                    <figcaption className="absolute text text-white bottom-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempore.</p>
                    </figcaption>
                </figure>


                <div className="p-5">

                    <p className="mb-3 font-normal text-gray-700 dark:text-black-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto laudantium modi aperiam mollitia, dignissimos illum placeat, quidem doloremque velit consequuntur ipsum, asperiores cum ipsa sed quo! Ullam, deleniti officiis.</p>

                </div>
            </div>

        </>
    )
}
export default Blog_Card