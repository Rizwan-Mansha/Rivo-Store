import { client } from '@/lib/sanity'
import React from 'react'

interface FeedbackInter{
  name: 'string',
  feedback: 'string'
}

const getData = async() => {
  const query = `*[_type == 'feedback']{
    name,
    feedback
  }`
  const response = async() =>{
    const data: FeedbackInter[] = await client.fetch(query);
    return data;
  }
  return await response();
}



const Feedback = async() => {
  const feedback = await getData();
  return (
    <section className="max-w-7xl mb-32">
      <p className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-8">
        Feedback Corner
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 mx-auto md:mx-32 max-sm:mx-4">
        {feedback.map((fback: FeedbackInter, idx: number) => (
          <div key={idx} className="hover:bg-[#cf82c1] hover:rounded-lg my-10 mx-auto ">
            <p className="text-bold text-4xl sm:text-5xl">“</p>
            <div className="text-[#224F34] font-semibold text-lg">
              {fback.name}
            </div>
            <div className="mx-auto">{fback.feedback}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback
