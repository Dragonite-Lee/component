import styles from "./snow.module.css"
import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";


export default function Snow() {
    
    const snowBgRef = useRef(null)
    //음 버튼을 누르면 눈이오게끔만들기
    
    const startSnow = () => {
            const snow = document.createElement('div'); 
            const snowBg = snowBgRef.current
            
            function addSnow() {
                snow.classList.add(`${styles.snow}`);
                snow.style.marginLeft = randomPosition() + 'px';
                snow.style.animationDuration = `${Math.random() * (20 - 8) + 8}s`
                // rcur.appendChild(snow);
                snowBg.appendChild(snow)
                // root.replaceChild(element, root.querySelector('div'))
            }
            for(let i = 0; i < 300; i++) {
                addSnow()
            }
            function randomPosition() {
                return Math.floor(Math.random()*window.innerWidth)
            }
    }
    


    

    return (
        <>
            <nav className={styles.nav}>
                    <Link to="/" className={styles.link}>
                        뒤로가기
                    </Link>
                    <button className={styles.btn} onClick={()=>{
                        for(let i = 0; i < 300; i++) {
                            startSnow()
                        }
                    }}>눈 내리기</button>
            </nav>
            <div className={styles.snow_bg} ref={snowBgRef} >
                
                {/* <div className={styles.snow}></div> */}
            </div>
            
        </>
    )
}