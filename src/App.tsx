
import './App.css'

function App() {

  return (
    <div className='container'>
      <nav>
        <h1>Dribbble</h1>
        <p>Explore <i className="arrow down"></i> </p>
        <p>Hire a Designer <i className="arrow down"></i></p>
        <p>Find Jobs</p>
        <p>Blog</p>
        <button id='Signup'>Sign up</button>
        <button id='login'>Log in</button>
        </nav>



      <div className='hero'>
        <span>Discover the world’s <br />
        <span> top designers</span>
        </span>
        <p>Explore work from the most talented and accomplished designers <br />ready to take on your next project</p>
      </div>

      <div className='Search-box'>
        
          <input type="text" placeholder='What are you looking for?' id='search'/>
        
      </div>

    </div>
  )
}

export default App
