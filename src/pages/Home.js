import styles from "./home.module.css";
import { Link } from 'react-router-dom';
import chevronImg from '../chevron-up.png'
import { useEffect, useRef, useState } from "react";
import transition from '../transition.PNG'
import snow from "../snow.PNG"
import rabbit from "../rabbit.PNG"

export default function Home() {
    let urlList = [transition, snow, rabbit]
    let dataList = ["transition","snow", "rabbit"]
    
    const [click, setClick] = useState(false);
    const chevronBtn = useRef(null);
    
    
    function onclickHandler(e) {
        chevronBtn.current.style.transform = "translateY(-100vh)"
        chevronBtn.current.style.transition = "all 2s"
    }
    useEffect(()=>{
        if (click === true) {
            onclickHandler()
        }
        
    },[click])

    
    // console.log(click)
    return (
        <div className={styles.container} >
            <div className={styles.slide_menu} ref={chevronBtn} >
                <div className={`${styles.slide_menu_text} ${styles.up}`} >
                    이준영의
                </div>
                <div className={`${styles.slide_menu_text} ${styles.down}`}>
                    컴포넌트 모음집
                </div>
                <img 
                    className={styles.chevron_up}
                    src={chevronImg}
                    alt="쉐브론" 
                    onClick={()=>setClick(true)}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.tab_menu}>
                    컴포넌트 모두보기
                </div>
                <div className={styles.main_container}>
                    {urlList.map((data,index)=>(
                        <div key={index} className={styles.item}>
                            <Link to={`/${dataList[index]}`} >
                                <img 
                                    src={data} 
                                    alt="컴포넌트사진"
                                    className={styles.img}
                                />
                            </Link>
                            <div className={styles.text}>{dataList[index]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}