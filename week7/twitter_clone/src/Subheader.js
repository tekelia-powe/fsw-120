import React,{useState} from 'react';
//import tweetData from './tweetData'
import Main from './Main';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pic from './images/profile_pic.PNG';
import pic2 from './images/pic2.jpeg';
import pic1 from './images/pic1.jpg';

//const initialList = tweetData.map(main => <Main name={main.name} user={main.username} tweet={main.text} imageName={main.imageName} />)
const tweetData = [
    

  {

      "name": "Tekelia Powe",

      "username": "@womanwhocodes",

      "text": "Me.... Finnaly getting the hang of React",

      "imageName": "images/pic2.jpeg",

      "id": "1"

  },

  {

      "name": "Andrea Terry",

      "username": "@amt45689513",

      "text": "Hello World",

      "imageName": "",

      "id": "2"

  },
  {

      "name": "Donald Trump",

      "username": "@theorangeone",

      "text": "Peace, I'm out. ",

      "imageName": "",

      "id": "3"

  },


];
//** with useState ** //

function Subheader() {
  const [list, setList] = useState(tweetData);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');

    
  function handleChange(event) {
   setText(event.target.value);
   setId(Date.now())
  
  }
  

  function handleAdd() {
    let name = `Tekelia`
    let username = `@womanwhocodes`
    console.log(username)
    const newList = list.concat({ name,text, username, id});
    setList(newList);
    setText('');
    // setUsername('')
    
    
  }

  function handleRemove(id) {
    
    const newList = list.filter((item) => item.id !== id);
 
    setList(newList);
  }

  function handleEdit(id) {
    const newList = list.map((item) => {
      if (item.id === id) {
        // const updatedItem = {
        //name: {name}
          
        // };
        // console.log(name)
        // return updatedItem;
        console.log(list)
      }
 
      return item;
    });
 
    // setList(newList);
  }
  
  return (
    <div>
      <AddItem
        name={`Tekelia`}
        text={text}
        id={id}
        username={`@womanwhocodes`}
        onChange={handleChange}
        onAdd={handleAdd}
      />

      <List list={list} onRemove={handleRemove}/>
    </div>
  );

  
};



const AddItem = ({ id,text, onChange, onAdd }) => (
  <div className="subheader_container">
    <div className="tweet_grid">
    <img src={pic} id="profile_pic"></img>
      <Form className="tweet_input">
        <Form.Group>
       <Form.Control 
            size="sm" 
            type="text" 
            id="tweet_input" 
            name="tweet" 
             
            placeholder="What's Happening"
            onChange={onChange} />
        </Form.Group>
        </Form>
    </div>
    
    
         
        <div className="fonts">
        <div><FontAwesomeIcon icon={['far', 'file']} size="lg"/></div>
        <div><FontAwesomeIcon icon={['far', 'file-image']} size="lg"/></div>
        <div><FontAwesomeIcon icon={['far', 'chart-bar']} size="lg"/></div>
        <div><FontAwesomeIcon icon={['far', 'smile']} size="lg"/></div>
        <div><FontAwesomeIcon icon={['far', 'calendar-alt']} size="lg"/></div>
        <Button variant="primary" onClick={onAdd}>Tweet</Button>{' '}
  </div>
  <hr width="100%" size="10px"></hr>
  </div>
);

const List = ({list, onRemove, onEdit}) => (
  <p>
    {list.map((item) => (
      <div>
     <Item key={item.id} item={item} onRemove={onRemove}/>  
     <hr></hr>
      </div>
    ))}
  </p>
);

const Item = ({ item, onRemove}) => (
  <div className="list_items">
    <p><h3> {item.name}<h6> {item.username} </h6></h3> 
      {item.text}<br></br>
      <img src={item.id =="1" ? pic2 : ""} ></img>
      </p>
      <p id="delete_p">
      <FontAwesomeIcon icon={['far', 'trash-alt']} onClick={() => onRemove(item.id)} className="delete"></FontAwesomeIcon>
      </p>
      
  </div>
);

export default Subheader;