import React from 'react';

const Post = ({ post }) => {
    return (
        <a href={post.url} key={post.id} className='post'>
            <article>
                <img src={post.social_image} alt={post.title} />
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
            </article>
        </a>
    );
};

export default Post;
