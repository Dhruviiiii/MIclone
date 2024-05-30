import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptions.css"




const NavOptions = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

   const [miPhoneToggle, setMiPhoneToggle] = useState(false);
   const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);
 

   useEffect(() => {
     
    if(window.location.pathname === "/#miphones"){
        return   setMiPhoneToggle(true)
       }
     if(window.location.pathname === "/#redmiphones"){
        return   setRedmiPhoneToggle(true)
       }
       if(window.location.pathname === "/#tv"){
        return   setTvToggle(true)
       }
       if(window.location.pathname === "/#laptops"){
        return   setLaptopToggle(true)
       }
       if(window.location.pathname === "/#lifestyle"){
        return  setFitnessToggle(true)
       }
       if(window.location.pathname === "/#home"){
        return  setHomeToggle(true)
       }
       if(window.location.pathname === "/#audio"){
        return  setAudioToggle(true)
       }
       
       if(window.location.pathname === "/#accessories"){
        return  setAccessoriesToggle(true)
       }

       
   }, [])

    return (
        <div className="navOptions"> 

            {miPhoneToggle?   miPhones.map((item,index)=>(

                 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
              )) : null }
            
      
            {redmiPhoneToggle?   redmiPhones.map((item,index)=>(

               <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
           )) : null }
     

            {tvToggle ?   tv.map((item,index)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
           )) : null }

           {laptopToggle ?   laptop.map((item,index)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
           )) : null }
     
   

            {fitnessToggle ?   fitnessAndLifeStyle.map((item,index)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
           )) : null }
     

               {homeToggle ?   home.map((item,index)=>(

                   < NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
              )) : null }
     
     

            {audioToggle ?   audio.map((item,index)=>(

             < NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
            )) : null }
     

            {accessoriesToggle ?   accessories.map((item,index)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image}index={index}  />
             )) : null }
     
        </div>
    )
}

export default NavOptions