import styles from './TopContainer.module.css'
import Avatar from '../../assets/avatar/pfp.png'

function TopContainer()
{
    return (
        <div className={styles.TopContainer}>
            <img src={Avatar} alt="Andreas Grumiché" />
            <p>Andreas Grumiché</p>
        </div>
    )
}

export default TopContainer;
