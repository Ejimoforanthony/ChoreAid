import  { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I figure out your premium workers?',
      answer: 'Premium worker has a verification badge on their profile.',
    },
    {
      question: 'How do I go about my bookings?',
      answer: 'You can manage your bookings through your dashboard.',
    },
    {
      question: 'Are your staffs trained professionally?',
      answer: 'Yes, all our staff undergo professional training.',
    },
    {
      question: 'Is CleanAid available in all states in the country?',
      answer: 'We are currently available in select states. Check our coverage map for more details.',
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 p-8 bg-white max-w-6xl mx-auto rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800">Frequently asked questions?</h2>
      <p className="text-gray-600">Most often questions that users ask.</p>

      <div className="flex flex-col md:flex-row md:space-x-8 w-full">
        <div className="bg-blue-100 p-6 rounded-lg w-full md:w-1/3 text-center">
          <div className="text-4xl text-blue-500 mb-4 ">❓</div>
          <p className="text-lg font-medium text-gray-800 mb-4">You have a different question?</p>
          <p className="text-gray-600 mb-4">
            Reach out to us with your question and our support team will give you an answer as soon as possible.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Connect support team
          </button>
        </div>

        <div className="flex flex-col w-full md:w-2/3 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-lg text-gray-800 font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? '➖' : '➕'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
