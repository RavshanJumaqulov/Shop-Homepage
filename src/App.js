import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <nav className="px-5 navbar navbar-expand-lg fixed-top navbar-light bg-light ">
              <a href="#" className="navbar-brand m-0 h3">Start Bootstrap</a>
              <button type='button'
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls='navbarNav'
                aria-expanded="false"
                aria-label='Toggle navigation'
                className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse mx-5" id='navbarNav'>
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a href="#" className="nav-link active">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="#"
                      className="nav-link dropdown-toggle"
                      id='navbarDropdown'
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Shop
                    </a>
                    <ul
                      className='dropdown-menu'
                      aria-aria-labelledby='navbarDropdown'>
                      <li>
                        <a href="#" className="dropdown-item">All Products</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#" className="dropdown-item">Popular Items</a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">New Arrivals</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className='d-flex w-100 justify-content-start mt-2 mt-sm-2 mt-md-2 mt-lg-0 mt-xl-0 mt-xxl-0 justify-content-sm-start justify-content-md-start justify-content-lg-end justify-content-xl-end justify-content-xxl-end'>
                  <button type='button' className='btn btn-light px-2'>
                    <i class="bi-cart-fill me-1"  ></i> Card &nbsp; <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <section className="slide d-flex flex-column justify-content-center align-items-center bg-dark">
        <div className="slide-text">
          <h1>Shop in style</h1>
        </div>
        <div className="second-text">
          With this shop hompeage template
        </div>
      </section>
      <section className="container py-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
            <div className="card h-100">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
              <div className="card-body p4">
                <div className="text-center">
                  <h5 className="fw-border">Fancy Product</h5>
                  40.00$ - 80.00$
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a href="" className="btn btn-outline-dark mt-auto">View</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <div className="badge bg-dark text-white position-absolute">Sale</div>
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
              <div className="card-body p4">
                <div className="text-center">
                  <h5 className="fw-border">Fancy Product</h5>
                  <h6 className='text-warning'>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                  </h6>
                  40.00$ - 80.00$
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a href="" className="btn btn-outline-dark mt-auto">View</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
            <div className="badge bg-dark text-white position-absolute">Sale</div>
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
              <div className="card-body p4">
                <div className="text-center">
                  <h5 className="fw-border">Fancy Product</h5>
                  40.00$ - 80.00$
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a href="" className="btn btn-outline-dark mt-auto">View</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
              <div className="card-body p4">
                <div className="text-center">
                  <h5 className="fw-border">Fancy Product</h5>
                  <h6 className='text-warning'>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                  </h6>
                  <span className="text-muted text-decoration-line-through">40.00$</span> 80.00$
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a href="" className="btn btn-outline-dark mt-auto">View</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
              <div className="card-body p4">
                <div className="text-center">
                  <h5 className="fw-border">Fancy Product</h5>
                  40.00$ - 80.00$
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a href="" className="btn btn-outline-dark mt-auto">View</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
              <div className="card-body p4">
                <div className="text-center">
                  <h5 className="fw-border">Fancy Product</h5>
                  40.00$ - 80.00$
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a href="" className="btn btn-outline-dark mt-auto">View</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
              <div className="card-body p4">
                <div className="text-center">
                  <h5 className="fw-border">Fancy Product</h5>
                  40.00$ - 80.00$
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a href="" className="btn btn-outline-dark mt-auto">View</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className="card-img-top" />
              <div className="card-body p4">
                <div className="text-center">
                  <h5 className="fw-border">Fancy Product</h5>
                  <span className="text-muted text-decoration-line-through">40.00$</span> 80.00$
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a href="" className="btn btn-outline-dark mt-auto">View</a>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>
      <section className="bg-dark py-5">
        <div className="conteiner">
          <p className="m-0 text-center text-white">Copyright c Your Website 2022</p>
        </div>
      </section>
    </div>
  );
}

export default App;
