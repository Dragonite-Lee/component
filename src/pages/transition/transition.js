import  styles from './transition.module.css';
import { Link } from 'react-router-dom';

export default function Transition() {
    return(
        <>
            <nav className={styles.nav}>
                    <Link to="/" className={styles.link}>
                        뒤로가기
                    </Link>
            </nav>
            <div className={styles.container}>
                <button className={styles.button}><span>Hover</span></button>
                <div className={styles.content}>
                    button태그와 내부의 span태그를 넣어 span태그에 relative를 주고 <br />
                    가상요소 after을 주어 내부에서 화살표가 움직이게끔 했고, <br />
                    button에 hover시 글자의 padding값과 span에 opacity를 주어 움직이며 생기는 효과를 주었다.
                </div>
            </div>
        </>
    )
}