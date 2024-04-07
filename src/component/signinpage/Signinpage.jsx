import React from 'react'
import './Signinpage.css'


function Signinpage (props){


    const {setPage, page} = props


    const togglePage = ()=> {
        setPage((prevState) => !prevState)
    }

    const subhandler =(e) =>{
        e.preventDefault()
    }

    return(
        <>
            <section className={page ? "backGroundBlur" : ``}>

                <div className="child">
                        <div id="text-wrap">
                            <h1 id='fb'>facebook</h1>
                        
                            <h2>Facebook helps you connect and share<br /> 
                                with the people in your life.
                            </h2>
                        </div>

                    <div className="formwrap">

                            <form id="formrap" onSubmit={subhandler}>

                        
                                <input id='inputsignin' type="text" placeholder="Email address or phone number" />

                                <input id='inputsignin' type="text" placeholder="Password" />
                                    
                                <button id='login'>Log in</button>
                                <br />

                                <a href="">forgotten password?</a>

                                    <hr />
                                <button id='cna' type='submit' onClick={()=>{togglePage()}}>Create new account</button>
                            </form>

                            <div id='formtext'>
                                <p>Create a Page for a celebrity, brand or business.</p>
                            </div>
                    </div>

                        

                </div>

                
               
            </section>
        </>
    )

}

export default Signinpage