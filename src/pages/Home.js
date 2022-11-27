import styles from "./home.module.css";
import { Link } from 'react-router-dom';
import chevronImg from '../chevron-up.png'
import { useRef, useState } from "react";
import transition from '../transition.PNG'

export default function Home() {
    let urlList = [transition,1,2];
    const [url, setUrl] = useState(urlList);

    
    const chevronBtn = useRef(null);
    
    function onclickHandler(e) {
        chevronBtn.current.style.transform = "translateY(-100vh)"
        chevronBtn.current.style.transition = "all 2s"
    }

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
                    onClick={(e)=>onclickHandler()}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.tab_menu}>
                    컴포넌트 모두보기
                </div>
                <div className={styles.main_container}>
                    {urlList.map((data,index)=>(
                        <div key={index} className={styles.item}>
                            <Link to={`/component/${data}`} >
                                <img 
                                    src={data} 
                                    alt="컴포넌트사진"
                                    className={styles.img}
                                />
                            </Link>
                            <div className={styles.text}>{data}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}