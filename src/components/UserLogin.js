import React, { Component } from 'react'
import axios from 'axios'
import logo from './Images/Mainlogo.png'
import './css/userLogin.css'

class UserLogin extends Component {
state = {
              email:'',
              email1:'',
              password:'',
              userId:'',
              error:'',
              UserNotPresent:''
        }
    
        handleChange1 = (e) => {
            this.setState({
                email :"'" + e.target.value + "'",
                email1: e.target.value
            })
            
        }
        handleChange2 = (e) => {
            axios.get('/stskFmsApi/jobseeker/getByEmailid/'+ this.state.email)
            .then(res=>{
                if(res.data.data===null){
                    this.setState({
                        UserNotPresent: 'Oops!!! your email does not exists'
                    })
                }else{
                console.log(res.data.data)
                this.setState({
                    userId:res.data.data.id
                })}

            })
            this.setState({
                password :e.target.value
            })

        }
        forgetPwd=(e)=>{
            this.props.history.push('/forgotPwd')
        }
        handleSubmit=(e)=>{
            e.preventDefault();
            console.log(this.state)

            axios.post('/stskFmsApi/userLogin/verifyUser',{
                email:this.state.email1,
                password:this.state.password
            })
            .then(Response => {
                console.log(Response.data)
                console.log(Response.data.success)
                   if (Response.data.success===1)
                    {
                        this.props.history.push({
                            pathname : '/dashboard',
                            state :{
                            mobileNumber : this.state,
                            userId: this.state.userId 
                         }})

                    }
                     else if(Response.data.message==="User ID or Password error"){
                        this.setState({
                            error:'User ID or Password error'
                        })
                    }
                    else{
                        alert("Register here")
                        this.props.history.push('./')
                    }
             })
            .catch(error => {
                console.log(error)
            });
        }


    render() {
        console.log(this.state)
        return (

            <div id="body">
            <div className="row" id="main1">      
             <center id="center">
             <img className="center" id="logo" src={logo} width="70" height="70"></img>
             <h3 className="center" id="text">Login</h3>  
             <form id="frm" onSubmit={this.handleSubmit}>
             <div className="input-field">
                    <i id="iconn" className="material-icons prefix">person</i>
                    <input id="icon_prefix" type="email" size="30"
                     placeholder="User Id/Email Id" required onChange={this.handleChange1}/>
                </div>
                    <div className="input-field">
                    <i id="iconn" className="material-icons prefix">lock</i>
                    <input id="icon_prefix" type="password" placeholder="password" required onChange={this.handleChange2}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"/>
                    <p className="red-text">{this.state.UserNotPresent}</p>
                    <p className="red-text">{this.state.error}</p>
                </div>
            <button id="UserLoginButton">Login</button>
             </form>
             <a id="forgot" onClick={this.forgetPwd}>Forgot Password</a>
            
             </center>
            </div> 
            </div>
            
        )
    }
}

export default UserLogin

