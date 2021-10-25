import React, { useState, useEffect } from 'react';
import App from './Working_code';


// {
  
  // let friends = ["prasanna", "sai", "srinithi"]
  // console.log("friends", friends);
  // array of object
  
  
  
  
  const Array = () =>
  {
    
    const [frnds, setFrnds] = useState([
      { name: "sangeetha", age: "22", id: 1 },
      { name: "shruthi", age: "22", id: 2 },
      { name: "nivetha", age: "23", id: 3 },
      { name: "srinithi", age: "23", id: 4 },
      { name: "GOF", age: "22", id: 5 }
    ]);

    const [gf, setGf] = useState([{ name: "sangeetha", age: "22", id: 1 },
    { name: "shruthi", age: "22", id: 2 },
    { name: "nivetha", age: "23", id: 3 },
    { name: "srinithi", age: "23", id: 4 },
    { name: "GOF", age: "22", id: 5 }]);


    // let prasannaGF = [];
    // useEffect(() => {
    //   // Update the document title using the browser API
    //   onChange()
    // },[]);
    const onChange = () =>
    {
  setFrnds([])
      let prasannaGF = [
        { name: "sangeetha", age: "22", id: 1 },
        { name: "shruthi", age: "22", id: 2 },
        { name: "nivetha", age: "23", id: 3 },
        { name: "srinithi", age: "23", id: 4 },
        { name: "GOF", age: "22", id: 5 }
      ];


    const result = prasannaGF.filter(word => word.age === '22');
    setGf(result);

    console.log(result);

      // const values = prasannaGF;
      // setFrnds(values);
      // console.log(values);
      // console.log(frnds);
    }



  //  const prasannaGF1 = [
  //     { name: "sangeetha", age: "22", id: 1 },
  //     { name: "shruthi", age: "22", id: 2 },
  //     { name: "nivetha", age: "23", id: 3 },
  //     { name: "srinithi", age: "23", id: 4 },
  //     { name: "GOF", age: "22", id: 5 }
  //   ];

    // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // const result = prasannaGF1.filter(word => word.age === '22');
    // setGf(result);

    // console.log(result);


   

    
  //    prasannaGF = [
  //     { name: "sangeetha", age: "22", id: 1 },
  //     { name: "shruthi", age: "22", id: 2 },
  //     { name: "nivetha", age: "23", id: 3 },
  //     { name: "srinithi", age: "23", id: 4 },
  //     { name: "GOF", age: "22", id: 5 }
  // ];
  // setFrnds(prasannaGF)
  // console.log(prasannaGF) 
    
  // console.table("Prasanna's GF Console" , prasannaGF);
  // }



    return (
      <div>
        < App />
        {/* <button onClick={onChange}>Click</button> */}
            {/* <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
    </tr>
          </thead>
          

          <tbody>
    
            {frnds.map((e) =>
              <tr key={e.id}>
              <th>{e.id}</th>
              <td>{e.name}</td>
              <td>{e.age}</td>
            </tr>
            ) }
            
      

  </tbody>
        </table>

        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
          <tbody>
            
            {gf.map((el) =>
              <tr key={el.id}>
                <th>{el.id}</th>
                <td>{el.name}</td>
                <td>{el.age}</td>
              </tr>
            )}
   
  </tbody>
</table> */}


        </div>
    )
}

export default Array
