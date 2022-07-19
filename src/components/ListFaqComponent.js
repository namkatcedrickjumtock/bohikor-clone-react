import React from 'react'
import { data } from "./faqData";

export default function ListFaq() {
    let s = data.map(function (items,index) {
        return (<li data-="fade-up" >
            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" href="s#"
                data-bs-target={`#accordion-list-${index}`}>{items.question[0]}
                <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
            <div id="accordion-list-1" className="collapse-show" data-bs-parent=".accordion-list">
                <p>
                    {items.question[1]}
                </p>
            </div>
        </li>)
    })
    return s;
}
