import styles from './LinkUnit.module.css'

function LinkUnit({ image, url, title })
{
    return (
        <div className={styles.LinkUnitContainer}>
            <img src={image} />
            <a href={url} target='_blank'>{title}</a>
        </div>
    )
}

export default LinkUnit
