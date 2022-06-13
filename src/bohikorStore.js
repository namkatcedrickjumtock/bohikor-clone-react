import React from 'react';

const BohikorStore = () => {
    return (
        <section id="Bohikor_Score">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="img/bohikoScore.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="text-secondary fw-bold">Bohikor Score</h2>
                        <p className="py-3 text-secondary">The Bohikor score is a rating of your finance habits and money management
                            skills
                            over a period of time. Our algorithm developed with insights from the top financial advisers, bankers and
                            finance specialists uses artificial intelligence to calculate a score based on your habits.</p>
                        <p className="py-3 text-secondary">
                            It is not a measure of how much money you have, but how well you are managing whatever you have.
                        </p>
                        <p className="py-3 text-secondary">
                            To improve the quality of your financial life
                            To deal with financial habits, you have not been able to break out from, e.g., overdraft, creating
                            realistic
                            budgets
                        </p>
                        <p className="py-3 text-secondary">
                            The Bohikor score is a guide that helps you stay on the right track towards financial independence.
                            Its is a marker that lets lenders, financial institutions, business partners and others know your
                            competence in managing money and making financial decisions.
                        </p>
                        <h4 className="fw-bold text-secondary">Take a quick quiz to get a rough estimate of how well you are standing.
                        </h4>
                    </div>
                </div>
                <button className=" btn btn-warning mx-auto rounded-pill px-5" id="try-now-btn">Try Now <i
                    className="bi bi-chevron-right"></i></button>

                {/* <div className="container">
                    <img src="img/icon.png" alt="" className="img-gluid" />
                </div>
                <img src="img/icon.png" alt="" className="img-gluid float-right py-3" /> */}
            </div>
        </section>
    );
}

export default BohikorStore;
