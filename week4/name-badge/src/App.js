import React, {Component} from 'react';
import './App.css';


let style = {height: 100, width: 500}
class App extends Component {
  constructor(){
      super()
      this.state = {
        firstName: "",
        firstNameHolder:"",
        lastName:"",
        lastNameHolder:"",
        email:"",
        emailHolder: "",
        phone: "",
        phoneHolder: "",
        placeOfBirth:"",
        placeOfBirthHolder: "",
        favFood:"",
        favFoodHolder: "",
        about: "",
        aboutHolder: "",
        phoneError: "",
        formError: "",
        badge: []
      }
  

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(event){
 event.preventDefault()

  if (!this.canBeSubmitted()) {
    event.preventDefault();
    return;
  } else{
  this.setState({
    firstNameHolder: this.state.firstName,
    lastNameHolder: this.state.lastName,
    emailHolder: this.state.email,
    phoneHolder: this.state.phone,
    placeOfBirthHolder: this.state.placeOfBirth,
    favFoodHolder: this.state.favFood,
    aboutHolder: this.state.about,
    phoneError: this.state.phoneError,
    formError: this.state.formError
  })
}

}

handleChange(event) {
  event.preventDefault()
 
  const {name, value} = event.target
  this.setState({[name]:value})
  
}

canBeSubmitted() {
  
  const { firstName, lastName, email, phone, favFood, placeOfBirth, about} = this.state;
  let isValid = true;
  
  if(phone !==""){
    
    var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(phone)) {
          isValid = false;
          this.state.phoneError = "Please do not enter special characters."
        }else if(phone.length != 10){
          isValid = false;
          this.state.phoneError = "Please enter a valid phone number"
          
        }else{
          this.state.phoneError = ""
        }
  }
  
  
  return firstName.length >= 3 && lastName.length >= 3 && (phone.length >= 3 && isValid) && favFood.length >= 3 && placeOfBirth.length >= 3 && email.length >= 3 && about.length >= 3;
  
}


render(){
  const isEnabled = this.canBeSubmitted();
  let formError = {}
  if(!isEnabled){
    this.state.formError = "Please make sure each field is completed with at least 3 or more characters."
  }else{
    this.state.formError = ""
  }
return(
 
  <div>
  
  <form name="form" onClick={this.handleSubmit}>
  <div className="text-danger">{this.state.formError}</div>
  <div className="text-danger">{this.state.phoneError}</div>
  <br></br>
    <div className="form_container">
    <input 
    type="text"
    defaultValue = {this.state.firstName}
    name = "firstName"
    placeholder = "First Name"
    onChange={this.handleChange}
    />
    <input 
    type="text"
    defaultValue = {this.state.lastName}
    name = "lastName"
    placeholder = "Last Name"
    onChange={this.handleChange}
    />
    <input 
    type="text"
    defaultValue = {this.state.email}
    name = "email"
    placeholder = "Email"
    onChange={this.handleChange}
    />
    <input 
    type="text"
    defaultValue = {this.state.placeOfBirth}
    name = "placeOfBirth"
    placeholder = "Place of Birth"
    onChange={this.handleChange}
    />
    <input 
    type="text"
    defaultValue = {this.state.phone}
    name = "phone"
    placeholder = "Phone"
    onChange={this.handleChange}
    />
    
    <input 
    type="text"
    defaultValue = {this.state.favFood}
    name = "favFood"
    placeholder = "Favorite Food"
    onChange={this.handleChange}
    
    />
    </div>
    <p>
    <input type="text"
    defaultValue = {this.state.about}
    name = "about"
    placeholder = "Tell us about yourself"
    onChange={this.handleChange}
    style = {style}
    id="about"
    />
    </p>
    <button disabled={!isEnabled}>Submit</button>
    
    </form>

   
    <div className="box">
    <div className="bottom_head">
    Badge: 
    </div>
    <div className="bottom">
    <p>Name: <span className="text-danger">{this.state.firstNameHolder} {this.state.lastNameHolder}</span></p>
    <p>Phone: <span className="text-danger">{this.state.phoneHolder}</span></p>
    <p>Place of Birth: <span className="text-danger">{this.state.placeOfBirthHolder}</span></p>
    <p>Favorite Food: <span className="text-danger">{this.state.favFoodHolder}</span></p>
    <p>Email: <span className="text-danger">{this.state.emailHolder}</span></p>
    
    <p className="about"><span className="text-danger">{this.state.aboutHolder}</span></p>
    </div>

    </div>
    </div> 
  


)
}
}

export default App;

