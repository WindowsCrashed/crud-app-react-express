import './App.css'
import Layout from './template/layout'
import { BrowserRouter } from 'react-router-dom'

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
