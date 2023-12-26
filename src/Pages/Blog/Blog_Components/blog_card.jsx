import React from "react";

const Blog_Card = () => {
    return (
        <>


            <div class="custom-width bg-white">

                <figure class="relative text-center transition-all duration-300 cursor-pointer">
                    <a href="#">
                        <img class="imgb" src="https://th.bing.com/th/id/OIP.I2wUkbqqN3unZgAQaBZANwHaEK?w=700&h=394&rs=1&pid=ImgDetMain" alt="image description"/>
                    </a>
                    <figcaption class="absolute text text-white bottom-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempore.</p>
                    </figcaption>
                </figure>


                <div class="p-5">

                    <p class="mb-3 font-normal text-gray-700 dark:text-black-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto laudantium modi aperiam mollitia, dignissimos illum placeat, quidem doloremque velit consequuntur ipsum, asperiores cum ipsa sed quo! Ullam, deleniti officiis.</p>

                </div>
            </div>

        </>
    )
}
export default Blog_Card