import './App.css'

function App() {
  return (
    <>
          <header>
            <h1>explor<span id="title-er">er</span></h1>
            <div className="navBar">
                <a href="google.com" className="navLink">Hotels</a>
                <a href="google.com" className="navLink">Bike Rentals</a>
                <a href="google.com" className="navLink">Restaurants</a>
            </div>
        </header>
        <div className="home">
            <img src="/images/home-image.jpg" alt="home-image" id="home-image" />
            <div className="home-text">
                <br />   
                <p>Welcome to Explorer</p>
                <h2>Your Adventure </h2>
                <h2>Travel Expert in</h2>
                <h2>the <strong>NORTH</strong></h2>
                <br />                <br />                <select name="search" id="search">
                    <option value="choose">Choose</option>
                </select>
                <button id="search-button">Search</button>
            </div>
        </div>
        
        <div className="content">
        <div className="destination-title">
            <h2>Destination</h2>
            <p>Just for you. Because you and your bike are special to us!</p>
        </div>
        <div className="card-contatiner">
            <div className="card">
                <img src="/images/kashmir.jpg" alt="card-image" className="card-image" />
                <p className="card-text">Endless Alpine Meadows and Serpentine Mountain Paths</p>
                <p className="card-title">Kashmir</p>
                <p className="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident consectetur distinctio quae, fugit nobis incidunt aliquid facere doloribus odit excepturi tempore ea adipisci iusto quis. Nam atque reprehenderit quibusdam!</p>
                <a href="google.com" className="card-link">Read More</a>
            </div>
            <div className="card">
                <img src="/images/dalhousie.jpg" alt="card-image" className="card-image" />
                <p className="card-text">Rolling Pine Forests and Winding Hill Trails</p>
                <p className="card-title">Dalhousie</p>
                <p className="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident consectetur distinctio quae, fugit nobis incidunt aliquid facere doloribus odit excepturi tempore ea adipisci iusto quis. Nam atque reprehenderit quibusdam!</p>
                <a href="google.com" className="card-link">Read More</a>
            </div>
            <div className="card">
                <img src="/images/manali.jpg" alt="card-image" className="card-image" />
                <p className="card-text">Snowy Mountain Peaks and Rocky River Valleys</p>
                <p className="card-title">Manali</p>
                <p className="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident consectetur distinctio quae, fugit nobis incidunt aliquid facere doloribus odit excepturi tempore ea adipisci iusto quis. Nam atque reprehenderit quibusdam!</p>
                <a href="google.com" className="card-link">Read More</a>
            </div>
        </div>
        <div className="card-contatiner">
            <div className="card" id="sp-card">
                <img src="/images/leh-ladakh.jpg" alt="card-image" className="card-image" />
                <p className="card-text">High Mountain Passes and Rocky Desert Trails</p>
                <p className="card-title">Leh-Ladakh</p>
                <p className="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident consectetur distinctio quae, fugit nobis incidunt aliquid facere doloribus odit excepturi tempore ea adipisci iusto quis. Nam atque reprehenderit quibusdam!</p>
                <a href="google.com" className="card-link">Read More</a>
            </div>
            <div className="card">
                <img src="/images/agra.jpg" alt="card-image" className="card-image" />
                <p className="card-text">Majestic Forts and Ornate Palaces</p>
                <p className="card-title">Agra</p>
                <p className="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident consectetur distinctio quae, fugit nobis incidunt aliquid facere doloribus odit excepturi tempore ea adipisci iusto quis. Nam atque reprehenderit quibusdam!</p>
                <a href="google.com" className="card-link">Read More</a>
            </div>
            <div className="card">
                <img src="/images/nanital.jpg" alt="card-image" className="card-image" />
                <p className="card-text">Emerald Lakes and Lush Green Valleys</p>
                <p className="card-title">Nanital</p>
                <p className="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident consectetur distinctio quae, fugit nobis incidunt aliquid facere doloribus odit excepturi tempore ea adipisci iusto quis. Nam atque reprehenderit quibusdam!</p>
                <a href="google.com" className="card-link">Read More</a>
            </div>
        </div>            
        </div>
        <div className="contact-form-container">
            <div className="contact-form">
                <h2 className="contact-form-title">Contact Us</h2>
                <h3 className="contact-form-subtitle">Our Sales Team will reach out to you ASAP!</h3>
                <form>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name="name" id="name" className="input-container" /><br />
                    <label htmlFor="Home-town">Your Home Town</label><br />
                    <select name="Home-town" id="Home-town" className="input-container">
                        <option value="choose">Choose</option>
                    </select><br />
                    <label htmlFor="destination">Where would you like to go?</label><br />
                    <select name="destination" id="destination" className="input-container">
                        <option value="choose">Choose</option>
                    </select><br />
                    <label htmlFor="ph-number">Contact Number</label><br />
                    <input type="text" name="Contact Number" id="ph-number" className="input-container" /><br />
                    <input type="submit" value="SUBMIT INTEREST" id="submit" />
                </form>
            </div>
        </div>  
    </>
  )
}

export default App
