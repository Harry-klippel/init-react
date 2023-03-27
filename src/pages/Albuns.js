import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading'

const Albuns = () => {
   const [isLoading, setIsLoading] = useState(false)
   const [albuns, setAlbuns] = useState([])

   useEffect(() => {
      setIsLoading(true)

      fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data =>{
         setAlbuns(data)
         setIsLoading(false)
      })
   }, [])


   return (
      <>
      
         <Loading visible={isLoading} />
         {
            albuns.map(albun => {
               return (
                  <div style={{margin:'10px', backgroundColor:'#e5e4e2'}}>
                     <span> <b>id:</b> {albun.id} <br /> <b>{albun.title}</b> </span>
                  </div>
               )
            })
         }

      </>
   ) 
}

export default Albuns