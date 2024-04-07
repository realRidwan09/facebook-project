
import { useState } from "react"
import "./Signuppage.css"

 

function Signuppage(props) {

    const {page, setPage} = props

    const [signUpinfo, setsignUpinfo] = useState(
        {
            firstname: "",
            surname: "",
            email: "",
            password: "",
            day: "",
            month: "",
            year: "",
            gender: ""

        }

    )

    const signUphandler = (e)=> {
        const name = e.target.name
        const value = e.target.value

        setsignUpinfo((prevState)=>(
            {
                ...prevState,
                [name] : value
            }
        ))
    }


    const submitHandler = (e)=> {
        e.preventDefault()
    }


    const btnx = ()=>{
        setPage((currentState)=> !currentState)

    }


    const verified = ()=>{


        if (signUpinfo.firstname === ""){
            document.getElementById("firstName").style.borderColor = "red"
        }else {
            document.getElementById("firstName").style.borderColor = "gray"
        }

        if (signUpinfo.surname === ""){
            document.getElementById("surname").style.borderColor = "red"
        }else {
            document.getElementById("surname").style.borderColor = "gray"
        }

        if (signUpinfo.email === ""){
            document.getElementById("email").style.borderColor = "red"
        }else {
            document.getElementById("email").style.borderColor = "gray"
        }

        if (signUpinfo.password === ""){
            document.getElementById("password").style.borderColor = "red"
        }else {
            document.getElementById("password").style.borderColor = "gray"
        }

        if (signUpinfo.day === ""){
            document.getElementById("day").style.borderColor = "red"
        }else {
            document.getElementById("day").style.borderColor = "gray"
        }

        if (signUpinfo.month === ""){
            document.getElementById("month").style.borderColor = "red"
        }else {
            document.getElementById("month").style.borderColor = "gray"
        }

        if (signUpinfo.year === ""){
            document.getElementById("year").style.borderColor = "red"
        }else {
            document.getElementById("year").style.borderColor = "gray"
        }

        if (signUpinfo.gender === ""){
            document.getElementById("gender").style.borderColor = "red"
        }else {
            document.getElementById("gender").style.borderColor = "gray"
        }
    }

    return(
        <>
            <section className="parentsignup">
               
                <form onSubmit={submitHandler} className="childsignup">

                    <div id="heading">
                       <div id="signuph1">
                         <h1 id="hone">Sign Up</h1>
                            <button id="xxbtn" onClick={btnx}>X</button>
                       </div>
                        <p>It's quick and easy.</p>

                    </div>
                   
                        <hr />
                        <div id="ainput">
                            <div id="inputnamediv">
                                <input className='firstname' type="text"  name="firstName" id="firstName" placeholder="First Name" value={signUpinfo.firstname} onChange={(e)=>{signUphandler(e), verified()}}/>
                                <input className='surname' type="text" name="surname" id="surname" placeholder="Surname" value={signUpinfo.surname} onChange={(e)=>{signUphandler(e), verified()}}/>
                            </div>
                        <input className='numormail' type="email" name="email" id="email" placeholder="Mobile number or email address"  value={signUpinfo.email} onChange={(e)=>{signUphandler(e), verified()}}/>
                        <input className='password' type="password" name="password" id="password" placeholder="New password" value={signUpinfo.password} onChange={(e)=>{signUphandler(e), verified()}}/>
                      
                       </div>


                    <label className='dob'>Date of birth?</label>

                    
                    

                        <div className="dobdiv">
                                <select name="day" id="day"  value={signUpinfo.day} onChange={(e)=>{signUphandler(e), verified()}}>
                                    <option value="1">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                    <option value="">6</option>
                                    <option value="">7</option>
                                    <option value="">8</option>
                                    <option value="">9</option>
                                    <option value="">10</option>
                                    <option value="">11</option>
                                    <option value="">12</option>
                                    <option value="">13</option>
                                    <option value="">14</option>
                                    <option value="">15</option>
                                    <option value="">16</option>
                                    <option value="">17</option>
                                    <option value="">18</option>
                                    <option value="">19</option>
                                    <option value="">20</option>
                                    <option value="">21</option>
                                    <option value="">22</option>
                                    <option value="">23</option>
                                    <option value="">24</option>
                                    <option value="">25</option>
                                    <option value="">26</option>
                                    <option value="">27</option>
                                    <option value="">28</option>
                                    <option value="">29</option>
                                    <option value="">30</option>
                                    <option value="">31</option>
                                </select>

                                <select name="month" id="month"  value={signUpinfo.month} onChange={(e)=>{signUphandler(e), verified()}}>
                                        <option value="Jan">Jan</option>
                                        <option value="">Feb</option>
                                        <option value="">Mar</option>
                                        <option value="">Apr</option>
                                        <option value="">May</option>
                                        <option value="">Jun</option>
                                        <option value="">Jul</option>
                                        <option value="">Aug</option>
                                        <option value="">Sep</option>
                                        <option value="">Oct</option>
                                        <option value="">Nov</option>
                                        <option value="">Dec</option>
                                </select>

                                <select name="year" id="year"  value={signUpinfo.year} onChange={(e)=>{signUphandler(e), verified()}}>
                                    <option value="">2024</option>
                                    <option value="">2023</option>
                                    <option value="">2022</option>
                                    <option value="">2021</option>
                                    <option value="">2020</option>
                                    <option value="">2019</option>
                                    <option value="">2018</option>
                                    <option value="">2017</option>
                                    <option value="">2016</option>
                                    <option value="">2015</option>
                                    <option value="">2014</option>
                                    <option value="">2013</option>
                                    <option value="">2012</option>
                                    <option value="">2011</option>
                                    <option value="">2010</option>
                                    <option value="">2009</option>
                                    <option value="">2008</option>
                                    <option value="">2007</option>
                                    <option value="">2006</option>
                                    <option value="">2005</option>
                                </select>
                            </div>
                        



                    <label className='genderlabel'>Gender?</label>
                    <div className='genderdiv'>
                        <div className='genderdivwrap' name="gender" id="gender" value={signUpinfo.gender}>
                            <label id='genLabel'>Female <input type="radio" id='radiogender' name='gender'  onChange={(e)=>{handlesignupData(e), verified()}} /></label>
                        </div>
                        <div className='genderdivwrap' name="gender" id="gender" value={signUpinfo.gender}>
                            <label id='genLabel'>Male <input type="radio" id='gender' name='gender' onChange={(e)=>{handlesignupData(e), verified()}} /></label>
                        </div>
                        <div className='genderdivwrap' name="gender" id="gender" value={signUpinfo.gender}>
                            <label id='genLabel'>Custom <input type="radio" id='gender' name='gender' onChange={(e)=>{handlesignupData(e), verified()}} /></label>
                        </div>
                    </div>

                        <div className="Para">
                            
                            <div id="firstP">
                            People who use our service may have uploaded your contact information to Facebook. Learn more.
                            </div>
                                <br />
                            <div id="secondP">
                                By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
                            </div>
                        </div>
                        
                        <button id="signbtn" type="submit" onClick={verified}>Sign Up</button>
                    
                </form>
         

            </section>
        </>
    )
}


export default Signuppage