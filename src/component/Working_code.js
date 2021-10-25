import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [currentPage, setCurrentPage] = useState([]);

  const [filterData, setFilterData] = useState([]);

  const [getPost, setGetPost] = useState([{}]);

  useEffect(() => {
    d1();
    d2();
    getData();
  }, []);


// API calling
  const getData = async () =>
  {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      console.log(res.data);
      setGetPost(res.data);
    } catch (error) {
      console.log(error);
    }
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))
    // albumId: 1
// id: 1
// thumbnailUrl: "https://via.placeholder.com/150/92c952"
// title: "accusamus beatae ad facilis cum similique qui sunt"
// url:
  }

  console.log(getPost);
  console.log(getPost.map((item) => item.userId));

  const d1 = () => {
    let currentTableData = [
      {
        name: "sk",
        id: "1",
        age: "22",
        email: "sk@gmail.com",
        phone: "9876544560",
      },
      {
        name: "prasanna",
        id: "2",
        age: "23",
        email: "prasanna@sibbc.org",
        phone: "987654459494",
      },
      {
        name: "sai",
        id: "3",
        age: "22",
        email: "sai@gmail.com",
        phone: "98544560733",
      },
    ];
    console.log(currentTableData);
    setCurrentPage(currentTableData);
  };

  const d2 = () =>
  {
    let Ugh = [
      { name: "sangeetha", age: "22", id: 1 },
      { name: "shruthi", age: "22", id: 2 },
      { name: "nivetha", age: "23", id: 3 },
      { name: "sinithi", age: "23", id: 4 },
      { name: "GOF", age: "22", id: 5 }
    ];
    console.log(Ugh);
    
    const res = Ugh.filter(e => e!= null && e.name.length === 7 && e.age === '23');
    setFilterData(res);

    console.log(res);
    console.log(filterData);
  }



  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {currentPage.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* {console.log(filterData)} */}
      {console.log(getPost)}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {getPost.map((i) =>
          {
            return (
              <tr key={i.id}>
                <td>{i.albumId}</td>
                <td>{i.id}</td>
                <td><img src={i.thumbnailUrl}></img></td>
                <td>{i.title}</td>
                <td><img src={i.url} style={{ width: '100%', height: '100px'}}></img></td>
              </tr>
            )            
          })
          }
        </tbody>
      </table>
      
    </>
  );
}
export default App;
