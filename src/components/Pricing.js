import React from 'react';
import { CheckCircle } from 'lucide-react'; // Updated icon library import
import './Pricing.css';

// Pricing Plans Data
const pricingPlans = [
  {
    title: "Basic",
    price: "$10/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    buttonText: "Choose Basic",
  },
  {
    title: "Pro",
    price: "$20/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    buttonText: "Choose Pro",
  },
  {
    title: "Enterprise",
    price: "$30/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    buttonText: "Choose Enterprise",
  },
];

// Pricing Card Component
const PricingCard = ({ title, price, features, buttonText, bgColor, borderColor }) => (
  <article className={`card p-6 border rounded-lg shadow-md w-full md:w-64 ${bgColor} ${borderColor} dark:${bgColor} dark:text-white hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1`}>
    <header className="mb-4">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-xl font-bold">{price}</p>
    </header>
    <ul className="mb-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <CheckCircle className="text-green-500 mr-2" /> {feature}
        </li>
      ))}
    </ul>
    <button className="w-full py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300">
      {buttonText}
    </button>
  </article>
);

const Pricing = () => {
  return (
    <section className="pricing py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Pricing
        </h2>
        <div className="pricing-cards flex flex-col md:flex-row justify-center gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              bgColor={index === 0 ? 'bg-gradient-to-r from-teal-200 to-teal-400' : index === 1 ? 'bg-gradient-to-r from-blue-200 to-blue-400' : 'bg-gradient-to-r from-purple-200 to-purple-400'}
              borderColor={index === 0 ? 'border-teal-400' : index === 1 ? 'border-blue-400' : 'border-purple-400'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
