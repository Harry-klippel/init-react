import React, {useState} from 'react'

import Template from './templates/Template'
import Albuns from "./pages/Albuns"
import Counter from './pages/Counter.js'
import Users from './pages/Users'

const defaultPage = 'albuns'

const pages = {
  albuns: {
    text: 'Álbuns',
    component: Albuns,
  },
  counter:{
    text: 'Contador',
    component: Counter,
  },
  users: {
    text: 'Usuários',
    component: Users,
  }
}

function App() {
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = page => {
    setPage(page)
  }

  const Page = pages[page].component
  
  return (
    <Template pages={pages} activePage={page} onChangePage={handleChangePage}>
      {Page && <Page />}
    </Template>
  )
}

export default App
