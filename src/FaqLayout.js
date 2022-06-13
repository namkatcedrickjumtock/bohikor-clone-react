import React from 'react'
import ListFaq from './ListFaqComponent'


export default function FaqLayout() {
    return (
        <section id="faq" className="faq section-bg fade-up " >
            <div className="container" data-="fade-up" id="FAQs">
                <h2 className="text-center">FAQs</h2>
                <div className="accordion-list container rounded">
                    <ul >
                        <ListFaq />
                    </ul>
                </div>
            </div>

        </section>
    )
}
