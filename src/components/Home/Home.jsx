import React from 'react'
import './Home.css'
import prk from '../../assets/prk.png'
import TypingEffect from "react-typing-effect"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Home() {
    useGSAP(()=>{
        let tl1=gsap.timeline();
        tl1.from(".line1",{
            y:80,
            duration:1,
            opacity:0
        })
        tl1.from(".line2",{
            y:80,
            duration:1,
            opacity:0
        })
        tl1.from(".line3",{
            y:50,
            duration:1,
            opacity:0
        })
        gsap.from(".righthome img",{
            x:200,
            duration:1,
            opacity:0
        })
        

    })
    return (
        <div id='home'>
            <div className="lefthome">
                <div className="homedetails">
                    <div className="line1">
                        I'M
                    </div>
                    <div className="line2"> Prakhar Teotia</div>
                    <div className="line3">
                        <TypingEffect
                        text={["WEB DEVELOPER","SOFTWARE DEVELOPER","JAVA DEVELOPER"]}
                        speed={300}
                        eraseSpeed={10}
                        eraseDelay={500}
                        cursor='|'
                        
                        />
                        

                    </div>
                    <a href="https://drive.google.com/file/d/1ByiLzTW0ht0URkNnt12tJ8WU7ix2qWNc/view?usp=sharing" download="PrakharTeotia.pdf">
                        <button>HIRE ME</button>
                    </a>

                </div>

            </div>
            <div className="righthome">
                <img src={prk} alt="men" />
            </div>
            
        </div>
    )
}

export default Home
