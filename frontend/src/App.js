import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import banner from './assests/image 4.png'
function App() {
  return (
    <div className="App">

      <Header />
      <div className='row mx-5  p-3' style={{ minHeight: '90vh' }}>
        <div className='col-md-6 d-flex justify-content-center gap-5  flex-column'>
          <h1 style={{ fontSize: '54px' }}>
            MADHAV SINGH <br />
            BOOK SHOP
          </h1>
          <p className='hero-para'>
            <li>Where stories come to life.</li>
            <li>Discover worlds within our pages.</li>
            <li>Get lost in the magic of words.</li>
          </p>
          <div>

            <button className='btn-main'>Explore Collection</button>
          </div>
        </div>
        <div className='col-md-6 '>
          <img src={banner} alt="" />
        </div>

      </div>
    </div>
  );
}

export default App;
