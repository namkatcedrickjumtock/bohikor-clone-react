import React from 'react';

const FaqSection = () => {
    return (
        <section id="faq" className="faq section-bg fade-up " >
            <div className="container" data-="fade-up" id="FAQs">

                <h2 className="text-center">FAQs</h2>
                <div className="accordion-list container rounded">
                    <ul>
                        <li data-="fade-up">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse"
                                data-bs-target="#accordion-list-1">What is the Bohikor score?
                                <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="accordion-list-1" className="collapse-show" data-bs-parent=".accordion-list">
                                <p>
                                    The Bohikor score is a measure of how well you manage your money. It takes into account the percentage
                                    you spend on each category of expenses, how frequently you save, how constant you are in meeting your
                                    savings goals, and what you put aside for your retirements and how well you invest your money.
                                </p>
                            </div>
                        </li>

                        <li data-="fade-up" data--delay="100">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse"
                                data-bs-target="#accordion-list-2" className="collapsed">How do I change the language of the app? <i
                                    className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                <p>
                                    The functionality to change language is not yet available in the app but will be in subsequent
                                    updates.
                                </p>
                            </div>
                        </li>

                        <li data-="fade-up" data--delay="200">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse"
                                data-bs-target="#accordion-list-3" className="collapsed">How can i improve my score? <i
                                    className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                <p>
                                    Plan your money before you spend it. Set your budget limits and make sure you beat them.
                                    Save at least 30% of your income monthly.
                                    Record your daily expenses regularly as you spend.
                                </p>
                            </div>
                        </li>

                        <li data-="fade-up" data--delay="300">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse"
                                data-bs-target="#accordion-list-4" className="collapsed">TCan I use the app offline? <i
                                    className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                                <p>
                                    Yes you can, most of the app functionalities work perfectly offline.
                                </p>
                            </div>
                        </li>

                        <li data-="fade-up" data--delay="400">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse"
                                data-bs-target="#accordion-list-5" className="collapsed">Why can I not stick to my budget? <i
                                    className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                                <p>
                                    There are many possible reasons as to why and a wide variety of approaches to make and stick to
                                    realistic budgets. Follow the articles on our fireside blog to get more on this.
                                </p>
                            </div>

                        </li>
                        <li data-="fade-up" data--delay="400">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse"
                                data-bs-target="#accordion-list-6" className="collapsed">Why can I not stick to my budget? <i
                                    className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="accordion-list-6" className="collapse" data-bs-parent=".accordion-list">
                                <p>
                                    Yes you have to, it is very important to input every franc you spend so that the reports the app gives
                                    you about your financial health will be accurate and truthful.
                                </p>
                            </div>
                        </li>
                        <li data-="fade-up" data--delay="400">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse"
                                data-bs-target="#accordion-list-7" className="collapsed">Why can I not stick to my budget? <i
                                    className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="accordion-list-7" className="collapse" data-bs-parent=".accordion-list">
                                <p>
                                    For now you cannot set budgets for more than a month. Budgets run monthly and they expire at the end
                                    of the month.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default FaqSection;
