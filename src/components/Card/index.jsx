/* eslint-disable react/prop-types */
import { useState } from 'react'
import Title from '../Title'
import styles from './styles.module.css'

export default function Card (props) {
    // [valor, funcao modificadora]
   const [followText, setFollowText] = useState("Follow")

   function handleClick() {
    alert("Agora você está seguindo!")
    setFollowText("Following")
   }
    return (
        <div className={styles.container}>
            <img src={props.avatar} alt={props.alt} />
            <Title>
           
                <span>{props.pokemon}</span>
                <img style={{width: "20px",
                    position: "absolute",
                    backgroundColor: "transparent",
                    border: "none",
                    top: "0",
                    marginLeft: "-50px"
            }}  
            src="data:image/png;base64,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" alt="" />
            
            </Title>
            <p>{props.skill1}</p>
            <p>{props.skill2}</p>
            <p>{props.skill3}</p>
            <div className={styles.divBtn} >
            <a  className={styles.typeDragon} href="">{props.textBtn}</a>
            <a  className={styles.typeGround} href="">{props.textBtn1}</a>
            <buttonSS onClick={handleClick} className={styles.typeGround} href="">{followText}</buttonSS>

            </div>
        </div>
      
    )
}