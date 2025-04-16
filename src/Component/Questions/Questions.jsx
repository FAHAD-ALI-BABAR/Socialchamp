import React, { useState } from 'react'
import { Minus, Plus } from 'lucide-react';
import {faqs} from "../../Constants/Data"




const Questions = () => {
    
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    }
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 py-20 px-4">
      <div className="w-full md:w-2/5 rounded-3xl bg-white bg-opacity-90 p-8 shadow-xl">
        <h2 className="text-3xl text-[#464646] font-black text-center mb-10">Frequently Asked Questions</h2>
        <dl className="space-y-6 divide-y divide-blue-300/30">
          {faqs.map((faq, index) => (
            <div key={index}>
              <dt className="flex items-center justify-between cursor-pointer py-4" onClick={() => toggleFAQ(index)}>
                <span className="text-base font-medium text-[#333333cc] text-[20px]">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#00ABE4]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#00ABE4]" />
                )}
              </dt>
              {openIndex === index && (
                <dd className="mt-2 text-sm text-[#333333cc] text-[16px]">{faq.answer}</dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
    </>
  );
}

export default Questions