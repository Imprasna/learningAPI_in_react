import React, { useState } from 'react';
import axios from 'axios';

const PostComment = () =>
{
    const [comments, setComments] = useState({
        "postId": '',
        "id": '',
        "name": '',
        "email": '',
        "body": ''
    });

    const CommentHandler = (e) =>
    {
        const commentName = e.target.name;
        const value = e.target.value;

        let insertingValues = comments;
        insertingValues[commentName] = value;
        setComments({ ...comments });
    }

    const postComment = async () =>
    {
        console.log(comments);
        try {
            const comment = await axios.post('https://jsonplaceholder.typicode.com/comments', {comments})
            console.log(comment.data);  
            setComments(comment.data);
        }
        catch (error) {
            console.log(error);
         }
    }






    return (
        <div>
            {/* https://jsonplaceholder.typicode.com/comments */}
            <form key={comments.id}>
                <div>
                    <h1>This is POST Comment</h1>
                    <div class="mb-3">
                        <input type="number" placeholder="postid" class="form-control" name="postId" onChange={(e) => CommentHandler(e) } value={comments.postId} id="exampleInputEmail1"></input>
                    </div>
                    <div class="mb-3">
                        <input type="number" placeholder='id' class="form-control" name="id" onChange={(e) => CommentHandler(e) }  value={comments.id} id="exampleInputEmail1"></input>
                    </div>
                    <div class="mb-3">
                        <input type="text" placeholder="name" class="form-control" name="name" onChange={(e) => CommentHandler(e) }  value={comments.name} id="exampleInputEmail1"></input>
                    </div>
                    <div class="mb-3">
                        <input type="email" placeholder="email" class="form-control" name="email" onChange={(e) => CommentHandler(e) }  value={comments.email} id="exampleInputEmail1"></input>
                    </div>
                    <div class="mb-3">
                        <input type="text" placeholder="body" class="form-control" name="body" onChange={(e) => CommentHandler(e) }  value={comments.body} id="exampleInputPassword1"></input>
                    </div>
                    <button type="button" onClick={ postComment } class="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default PostComment;
