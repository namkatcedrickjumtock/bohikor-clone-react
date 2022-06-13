import React from 'react';

const MoneyTherapySection = () => {
    return (
        <section id="Money_Transfer_Therapy">
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-lg-7">
              <h2 className="text-warning fw-bold">Money Therapy</h2>
              <p className="py-3 text-dark">The Bohikor Money Therapy (BMT) is a safe and non-judgmental space where you
                can
                talk about your financial challenges and work with a councilor and or financial expert to understand your
                problems, set goals track them and get help and support throughout your journey in developing better money
                habits.</p>
              <p className="py-3 text-dark">
                You are assigned a coach when you sign up
                The coach listens to your challenges and develops a plan to confront the challenges <br/>
                You have constant follow up sessions with the coach to ensure you achieve a healthier financial life
                Necessary adjustments will be made on your plan based on your progress
              </p>
              <p className="py-3 text-dark">
                To improve the quality of your financial life
                To deal with financial habits, you have not been able to break out from, e.g., overdraft, creating
                realistic
                budgets
              </p>
              <a href="https://play.google.com/store/apps/details?id=io.ikor.ikorfinance&hl=en-GB" className="bg-primary px-4 mx-auto d-block py-1 w-50 rounded-pill text-white fw-bold" >Get your First
                Week Free<i className="bi bi-chevron-right"></i></a>
            </div>
            <div className="col-lg-5">
              <img src="img/money_therapy.png" className="img-fluid" alt="" id="therapy-bot"/>
            </div>
          </div>
          </div>
      </section>
    );
}

export default MoneyTherapySection;
