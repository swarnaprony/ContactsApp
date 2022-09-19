import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import Avatar from "./Avatar";


function App() {
  return (<div>
    <h1 className="heading">My Contacts</h1>
    <Avatar img="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg" />
  
    <Card 
      name={contacts[0].name}
      img={contacts[0].imgURL}
      tel={contacts[0].tel}
      email = {contacts[0].email}     
      />

    <Card 
      name={contacts[1].name}
      img={contacts[1].imgURL}
      tel={contacts[1].tel}
      email = {contacts[1].email}     
      />

    <Card 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].tel}
        email = {contacts[2].email}     
        />
  </div>)
}

export default App;
