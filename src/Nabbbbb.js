import './NavBar.css'

function NavBar(){
    return(
        <>
           <header className="nav">
              
                <div className="op2">Home</div>
                <div className="op2">About Us</div>
                <div className="op2">Contact Us</div>
                <div className="op3">
                <button className="login"> Login </button>
                <button className="sign-up">SignUp </button>
                </div>
           
           </header>
        </>
    )
}

export default NavBar;