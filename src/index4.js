import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
var output=(<div>
  <nav className="navbar navbar-expand-lg bg-warning fixed-top">
    <div className="container-fluid">
      <img src="gunlogo.jpg" alt height="50px" />
      <a className="navbar-brand" href="#">GUN SHOP</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#shop">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#categories">Categories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#partners">Partners</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="gun6.jpg" alt="..." width="1370px" height="400px" />
      </div>
      <div className="carousel-item">
        <img src="gun2.jpg" alt="..." width="1370px" height="400px" />
      </div>
      <div className="carousel-item">
        <img src="gun5.jpg" alt="..." width="1370px" height="400px" />
      </div>
      <div className="carousel-item">
        <img src="gun4.jpg" alt="..." width="1370px" height="400px" />
      </div>
    </div>
  </div>
  <br />
  <br />
  <div className="container-fluid">
    <div className="row">
      <div className="col-6">
        <h2 id='about' className="border-bottom"><b>About</b></h2>
        <img src="gun1.jpg" alt width="500px" height="350px" />
      </div>
      <div className="col-6">
        <h5>Articles</h5><br />
        <h5>Coupon Center</h5><br />
        <h5>Dealer Store</h5><br />
        <h5>Fees</h5><br />
        <h5>FFl/Dealer Services</h5><br />
        <h5>Find an FFl</h5><br />
        <h5>Deals</h5><br />
        <h5>Gold Membership Program</h5>
      </div>
    </div>
  </div>
  <br />
  <div className="container-fluid">
    <h2 id='shop' className="border-bottom"><b>Shop</b></h2>
    <div className="row">
      <div className="col-3">
        <img src="./pistol.jpg" alt height="300px" />
        <h3>PISTOL</h3>
        <button type="shop" className="btn btn-danger">SHOP NOW</button>
      </div>
      <div className="col-5">
        <img src="./sniper.jpg" alt height="300px" />
        <h3>SNIPER</h3>
        <button type="shop" className="btn btn-danger">SHOP NOW</button>
      </div>
      <div className="col-4">
        <img src="./gun4.jpg" alt width="425px" height="300px" />
        <h3>SHOTGUN</h3>
        <button type="shop" className="btn btn-danger">SHOP NOW</button>
      </div>
    </div>
  </div><br />
  <div><h3 id='partners' className="border-bottom"><b>Partners</b></h3><br />
    <img src="./partners gun1.png" alt width="400px" height="200px" />
    <img src="./partners gun2.png" alt width="400px" height="200px" />
    <img src="./partners gun3.jpg" alt width="400px" height="200px" />
  </div>
  <br />
  <br />
  <br />
  <div className="container-fluid">
    <h2 id='categories' className="border-bottom"><b>Categories</b></h2>
    <div className="row">
      <div className="col-4">
        <img src="./pistol1.jpg" alt width="400px" height="275px" />
        <h3>PISTOL</h3><hr />
        <h4>Revolvers</h4>
        <h4>Semi Auto Pistol</h4>
        <h4>Single Shot Pistol</h4>
        <h4>Other Pistol</h4>
      </div>
      <div className="col-4">
        <img src="./sniper1.jpg" alt width="400px" height="275px" />
        <h3>SNIPER</h3><hr />
        <h4>Bolt Action Sniper</h4>
        <h4>Lever Action Sniper</h4>
        <h4>Pump Action Sniper</h4>
        <h4>Other Sniper</h4>
      </div>
      <div className="col-4">
        <img src="./shotgun2.jpg" alt="00px" height="275px" />
        <h3>SHOTGUN</h3><hr />
        <h4>Bolt Action Shotgun</h4>
        <h4>Lever Action Shotgun</h4>
        <h4>Over Under Shotgun</h4>
        <h4>Other Shotgun</h4>
      </div>
    </div>
  </div><br />
  <div><h2 id='contact' className="border-bottom"><b>Contact</b></h2></div><br />
  <form className="row g-3">
    <div className="col-md-12">
      <label htmlFor="inputEmail4" className="form-label">Email</label>
      <input type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="col-md-12">
      <label htmlFor="inputPassword4" className="form-label">Password</label>
      <input type="password" className="form-control" id="inputPassword4" />
    </div>
    <div className="col-12">
      <label htmlFor="inputAddress" className="form-label">Messages</label>
      <input type="text" className="form-control" id="inputAddress" placeholder /><br />
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
  <div className="container-fluid p-5 bg-warning">
    <div className="row">
        <div className="col-8 text-center text-dark offset-2">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.accusantium blanditiis magni culpa neque, odit tempore provident autem aspernatur hic!</p>
        </div>
    </div>
    </div>
</div>)

root.render(output);
