import { BrowserRouter } from 'react-router-dom'
import Layout from './template/layout'
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </div>    
  )
}

export default App
