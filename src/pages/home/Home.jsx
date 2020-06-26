import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import TodoForm from "../../component/form/Form";

function Home (){
    return(
      <div>
       <Navbar />
       <TodoForm />
      </div>
    )
}

export default Home;