import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading'

const Users = () => {
   const [isLoading, setIsLoading] = useState(false)
   const [Users, setUsers] = useState([])

   useEffect(() => {
      setIsLoading(true)

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{
         setUsers(data)
         setIsLoading(false)
      })
   }, [])

   return (
      <>
         
         <Loading visible={isLoading} />

         {
            Users.map(user => {
               return (
                  <div style={{margin: '10px'}}>
                     <b>Nome:</b> {user.name} <br />
                     <b>E-mail:</b> {user.email} <br />
                     <b>Telefone:</b> {user.phone} <br />
                     <b>Site:</b> {user.website} <br />
                  </div>
               )
            })
         }

      </>
   ) 
}

export default Users