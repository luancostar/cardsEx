import imgPkm1 from './assets/pkm.gif'
import Card from './components/Card'
 

export default function App() {
 
  return (
    <>
    <Card avatar={imgPkm1} 
    pokemon="Garchomp - 0445"
    skill1="Species	Mach Pokémon"
    skill2="Height	1.9 m (6′03″)"
    skill3="1. Sand Veil
    Rough Skin (hidden ability)"
    textBtn="Dragon" 
    textBtn1="Ground"/>
    </>
  )
}

 