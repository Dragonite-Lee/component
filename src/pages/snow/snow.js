import styles from "./snow.module.css"
import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";


export default function Snow() {
    
    const r = useRef(null)
    
    // window.onload = function() {
    //     const snowBg = document.querySelector(`.${styles.snow_bg}`);
    //     console.log(snowBg)
    //     console.log(r.current)
    // }
   
    // useEffect(()=> {
    //     const snow = document.createElement('div'); 
    //     const snowBg = document.querySelector(`.${styles.snow_bg}`);
    //     // const root = document.querySelector('#root')
    //     function addSnow(element,plus) {
    //         plus.classList.add(`${styles.snow}`);
    //         plus.style.marginLeft = randomPosition() + 'px';
    //         plus.style.animationDuration = `${Math.random() * (20 - 8) + 8}s`
    //         // rcur.appendChild(snow);
    //         element.appendChild(plus)
    //         // root.replaceChild(element, root.querySelector('div'))
    //     }
    //     for(let i = 0; i < 300; i++) {
    //         addSnow(snowBg, snow)
    //     }
    // },[])
    
    //     useEffect(() => {
    //         const snowBg = document.querySelector(`.${styles.snow_bg}`);
    //         console.log(snowBg)
    //         console.log(r.current)
    //     },[])
        
        
    
    

    

    function randomPosition() {
        return Math.floor(Math.random()*window.innerWidth)
    }

    return (
        <>
            <nav className={styles.nav}>
                    <Link to="/component" className={styles.link}>
                        뒤로가기
                    </Link>
            </nav>
            <div className={styles.snow_bg} ref={r} >
                {/* <div className={styles.snow}></div> */}
            </div>
        </>
    )
}