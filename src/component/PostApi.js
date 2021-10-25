import React, {useEffect, useState} from 'react';
import axios from "axios";

const PostApi = () =>
{
    const [values, setValues] = useState({
        userId: '',
        id: '',
        title: '',
        body: '',
    });

    const [submit, setSubmit] = useState([]);
    const [putValues, setPutValues] = useState([]);


    const empytIt = () =>
    {
        setValues({
            userId: '',
            id: '',
            title: '',
            body: '',
        })
    }

    const Handler = (e) =>
    {
        const name = e.target.name;
        const value = e.target.value;

        let inputValues = values;
        inputValues[name] = value;
        setValues({...values});
    }

    const submitHandler = async () =>
    {
        console.log("hello");
        console.log(values);
        const red = values;
        console.log(red);
        try {
            const result = await axios.post('https://jsonplaceholder.typicode.com/posts', { red });
            console.log(result.data.red);
            setSubmit(result.data.red)
            empytIt();
        } catch(err) {
            console.log(err);
        }
    }

    // UPDATE Function in API
    const putHandler = async () =>
    {
        const purple = values;
        try {
            const response = await axios.put('https://jsonplaceholder.typicode.com/posts/4', { purple });
            console.log(response.data.purple);
            setPutValues(response.data.purple);
            empytIt();
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="container" style={{ marginTop: '2rem'}}>
            <form>
                <div className="form">
                <input className="form-control mb-3" type="text" name="userId" placeholder="Name" onChange={ (e)=> Handler(e) } id="name" value={values.userId}  />
                </div>
                <div>
                    <input className="form-control mb-3" type="number" name="id" placeholder="Id" onChange={ (e)=> Handler(e) } id="date" value={values.id} />
                </div>
                <div>
                    <input className="form-control mb-3" type="date" name="title" placeholder="Date" onChange={ (e)=> Handler(e) } id="date" value={values.title} />
                </div>
                <div>
                    <input className="form-control mb-3" type="text" name="body" placeholder="body" onChange={ (e)=> Handler(e) } id="email" value={values.body} />
                </div>
                <button className="btn btn-secondary" onClick={ submitHandler } type="button">Submit</button>
                <button className="btn btn-primary" onClick={ putHandler } type="button">Update</button>
            </form>
            
            <h1>Resulted Values</h1>
            <h4>{ }</h4>
            <h3>
               User ID: {!putValues.userId ?  putValues.userId :  submit.userId}
            </h3>
            <h3>
               ID : {putValues.id}
            </h3>
            <h3>
              Title :  {putValues.title}
            </h3>
            <h3>
               Body : {putValues.body}
                </h3>

        </div>
    )
}

export default PostApi;