import React from 'react'
import {connect} from 'react-redux'

//ania - skoncz to tak jak inne komnponenty:

class LoginForm extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       username: '',
       password: ''
     }
   }

handleSubmit(){
  e.preventDefault()
  // wyslij do servera!
}

handleOnChange(e) {

  // this.set.state({
  //   [e.target.name]: e.target.value
  // })
}

   render() {
     return (
       <div>
         <h1>Login!</h1>
         <form onSubmit={this.handleSubmit.bind(this)}>
             <input type="text" name="username" placeholder="username" onChange={this.handleOnChange.bind(this)} />
           <input type="password" name="password" placeholder="password"
             onChange={this.handleOnChange.bind(this)} />
           <input type="submit" value="Login" />
         </form>
       </div>
     )
   }
 }

 function mapDispatchToProps(dispatch) {
     return {
       onSubmit: (creds) => {dispatch(handleSubmit(creds))}
     }
 }

 export default connect(mapDispatchToProps)(LoginForm)
