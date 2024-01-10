/* eslint-disable react/prop-types */
import styles from './styles.module.css'

export default function Card (props) {
    return (
        <div className={styles.container}>
            <img src={props.avatar} alt={props.alt} />
            <h2>{props.name}</h2>
            <p>{props.skill1}</p>
            <p>{props.skill2}</p>
            <p>{props.skill3}</p>
            <div className="btns">
                <a href="">{props.textBtn}</a>
                <a href="">{props.textBtn}</a>
                <a href="">{props.textBtn}</a>
            </div>
        </div>
      
    )
}