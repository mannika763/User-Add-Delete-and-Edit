import './logo.css'
import {FaYoutube, FaInstagram} from 'react-icons/fa'
import Lottie from 'lottie-react'
import animationData from './photos/85037-recruitment.json'

function Logo(){
//  const myStyle=(
//     {
      
//     }
//   )
    return(
        <>
         <div className="logo">
            <img src={require('./photos/recruiter-logo.png')} alt="photos"></img>

            <Lottie style={{height: "60vh", position: "relative", top: "15vh", left: "10vw"}} animationData={animationData}></Lottie>
            <div className='container'><p>Streamline Your Hiring Process with Our Online Recruitment Solution</p></div>
         <div className='social-media'>
           <div className='youtube'> <FaYoutube></FaYoutube></div>
           <div className='instagram'><FaInstagram></FaInstagram></div>
         </div> </div>
       
       
        </>
    )
}

export default Logo;