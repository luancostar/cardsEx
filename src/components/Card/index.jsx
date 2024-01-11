/* eslint-disable react/prop-types */
import Title from '../Title'
import styles from './styles.module.css'

export default function Card (props) {
    return (
        <div className={styles.container}>
            <img src={props.avatar} alt={props.alt} />
            <Title>
           
                <span>{props.pokemon}</span>
          
            </Title>
            <p>{props.skill1}</p>
            <p>{props.skill2}</p>
            <p>{props.skill3}</p>
            <div className={styles.divBtn} >
            <a className={styles.typeDragon} href="">{props.textBtn}</a>
            <a  className={styles.typeGround} href="">{props.textBtn1}</a>
            </div>
        </div>
      
    )
}