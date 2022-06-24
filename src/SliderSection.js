import React from 'react'

export default function SliderSection() {
  return (
    <div className="content">
      <div className="container">

        <div className="owl-carousel slide-one-item">
          <div className="d-md-flex testimony-29101 align-items-stretch">
            <div className="image" style={{ backgroundImage: "url('img/slider1.png')" }}></div>
            <div className="text">
              <h1 className='text-center fw-bold'>Dashboard</h1>
              <p className='mb-4'>
                The dashboard is a visual representation of the Bohikor App. It contains information imputed by the user on the app, such as the Bohikor Score, monthly spending, as well as reports, and Income.
              </p>
              <a className='btn-sm border-0 rounded-pill btn-warning text-white fw-bold my-2 py-2 px-3   text-decoration-none' href='#es'> Download Now</a>
            </div>
          </div>
          <div className="d-md-flex testimony-29101 align-items-stretch">
            <div className="image img-fluid" style={{ backgroundImage: "url('img/slider3.png')" }}></div>
            <div className="text">
              <h1 className='text-center fw-bold'>Budgets and Reports</h1>
              <p>
                Bohikor has a beautiful reporting screen that shows you an overview of your financial standing each month. The app allows you to dive in deep to see your spending on each budget weekly and monthly. The reporting is very detailed but also very simple and intuitive.
              </p>
              <a className='btn-sm border-0 rounded-pill btn-warning text-white fw-bold my-2 py-2 px-3 text-decoration-none' href='#es'> Download Now</a>
            </div>
          </div>
          <div className="d-md-flex testimony-29101 align-items-stretch">
            <div className="image img-fluid" style={{ backgroundImage: "url('img/slider2.png')" }}></div>
            <div className="text">
              <h1 className='text-center fw-bold'>Awards and Challenges</h1>
              <p>
                Bohikor has a strategy that enhances good money practices whereby you take a money challenge and get a reward for succeeding, which is termed an award.
              </p>
              <a className='btn-sm border-0 rounded-pill btn-warning text-white fw-bold my-2 py-2 px-3 text-decoration-none' href='#es'> Download Now</a>
            </div>
          </div>

        </div>


      </div>
    </div >

  );
}
