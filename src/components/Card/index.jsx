import Button from "../Button"

export default function Card ({avatar}) {
    return (
        <div className="divContainer">
            <div className="divCard">
                <div className="sessionOne">
                    <img src={avatar} alt="" />
                    <h2 className="titlePkm">Garchomp - <strong>0445</strong></h2>
                </div>
                <div className="sessionTwo">
                    <p>DRAGON GROUND</p>
                    <p>1.9 m (6′03″) </p>
                    <p>	95.0 kg (209.4 lbs)</p>
                </div>
                <div className="sessionThree">
                    <p>EV yield	3 Attack</p>
                    <p>45 (5.9% with PokéBall, full HP)</p>
                    <p>50 (normal)</p>
                    <p>300</p>
                </div>
                <div className="sessionFour">
                    <p>Egg Groups	Dragon, Monster</p>
                    <p>Gender	50% male, 50% female</p>
                </div>
                <div className="sessionFive">
                    <Button btnText="Dragon"/>
                    <Button btnText="Ground"/>
                    <Button btnText="Mach Pokémon" /> 
                </div>
            </div>
        </div>
    )
}