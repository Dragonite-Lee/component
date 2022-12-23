import styles from "./rabbit.module.css"
import rabbit from "../../rabbit.PNG"
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import useInterval from "../../hook/useInterval";
import { useEffect } from "react";


export default function Rabbit() {
    
    const [click, setClick] = useState(0);
    const [timer, setTimer] = useState(10);//10초
    const [isPlay, setIsPlay] = useState(false);
    const [timesetModal, setTimesetModal] = useState(false);
    const rabbitImg = useRef(null);

    // *클릭 횟수
    const clickCount = () => {
        setClick((click)=>click+1)
    }
    
    // *타이머 & 모달
    useInterval(()=>{
        if (isPlay) {
            setTimer((timer)=>timer-1)
        if(timer === 0) {
            setTimer(0)
            setTimesetModal(true)
        }
        }
    },1000)

    const reloadFunction = () => {
        window.location.reload()
    }
    

    // *토끼 이동
        if(rabbitImg.current) {
            rabbitImg.current.style.marginLeft = `${10 * click}px`;
        }
    
    return (
        <>
            {timesetModal && (
                <div className={styles.modalContainer} >
                    <div className={styles.modalContent}>Time's out!</div>
                    <button className={styles.modalBtn}
                        onClick={reloadFunction}
                    >
                        처음으로
                    </button>
                    <div className={styles.modalContent}>총 클릭 횟수 : {click}</div>
                </div>
            )}
            <nav className={styles.nav}>
                    <Link to="/component" className={styles.link}>
                        뒤로가기
                    </Link>
            </nav>
            <div className={styles.container}>
                <div className={styles.field}>
                    <img 
                        className={styles.rabbit}
                        src={rabbit} 
                        alt="토끼" 
                        width={70}
                        height={70}
                        ref={rabbitImg}
                    />
                </div>
                <div className={styles.timer}>
                    <button onClick={()=>setIsPlay(true)} className={styles.Btn}>
                        시작하기
                    </button>
                    <button onClick={()=>clickCount()} className={styles.Btn}>
                        클릭!!!
                    </button>
                    <div className={styles.second}>남은 시간 : {timer}</div>
                    <div className={styles.count}>클릭 횟수 : {click}</div>
                </div>
            </div>
        </>
    );
}


  
  