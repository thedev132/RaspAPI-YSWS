"use client"

import { useState } from "react"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqItems = [
    {
      question: "What is RaspAPI?",
      answer: "RaspAPI is a Hack Club YSWS program where participants can submit their own APIs and earn Raspberry Pi as reward."
    },
    {
      question: "How do I submit my API?",
      answer: "Click on the 'Get Your Raspberry Pi' button homepage or navigate to the fillout form."
    },
    {
      question: "What are the submission deadlines?",
      answer: "The submission deadline is January 1st. Make sure to submit your API before this date to be eligible for the reward."
    },
    {
      question: "Can I submit multiple APIs?",
      answer: "Yes, you can submit multiple APIs, but only one Raspberry Pi will be awarded per participant."
    }

  ]

  return (
    <div className="min-h-screen bg-red-50 text-red-900">
      {/* Header */}
      <div className="fixed top-4 left-4 right-4 z-10">
          <header className="text-white">
            <nav className="bg-red-600 rounded-full overflow-hidden shadow-lg container mx-auto px-6 py-3 flex justify-between items-center max-w-6xl">
              <a href="#" className="text-2xl font-bold">RaspAPI</a>
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="hover:text-red-200 transition-colors">Home</a>
                <a href="#requirements" className="hover:text-red-200 transition-colors">Requirements</a>
                <a href="#prizepool" className="hover:text-red-200 transition-colors">Prize Pool</a>
                <a href="#FAQ" className="hover:text-red-200 transition-colors">FAQ</a>
              </div>
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </nav>
            {mobileMenuOpen && (
              <div className="md:hidden bg-red-600 py-2 mt-2">
                <a href="#home" className="block px-6 py-2 hover:bg-red-700 transition-colors">Home</a>
                <a href="#requirements" className="block px-6 py-2 hover:bg-red-700 transition-colors">Requirements</a>
                <a href="#prizepool" className="block px-6 py-2 hover:bg-red-700 transition-colors">Prize Pool</a>
                <a href="#FAQ" className="block px-6 py-2 hover:bg-red-700 transition-colors">FAQ</a>
              </div>
            )}
          </header>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 pt-24">
        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl mt-6 md:text-5xl font-bold mb-6 text-red-800">
              RaspAPI
            </h1>
            <p className="text-2xl mb-6 text-red-700">
              Submit your own API and earn a Raspberry Pi!
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors transform hover:scale-105 duration-200">
              Get your Raspberry Pi
            </button>
          </div>
          <div className="w-full max-w-2xl h-64">
            <img src="/rpi.png" alt="Raspberry Pi" className="w-full h-full object-contain" />
          </div>
        </section>

        {/* Requirements Section */}
        <section id="requirements" className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-800 text-center">Requirements</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Create an original API using any programming language or framework</li>
              <li>Record at least 3 hours using Hakatime for proof</li>
              <li>Implement at least three GET and one POST endpoint</li>
              <li>Include proper detailed documentation for your API</li>
              <li>Host your API on a publicly accessible server</li>
              <li>Submit your API before the deadline January 1st</li>
            </ul>
          </div>
        </section>

        {/* Prize Pool Section */}
        <section id="prizepool" className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-800 text-center">Prize Pool!</h2>
            <h2 className="text-xl text-bold text-center mb-10">Top 3 winners will get a Sensor HAT to go along with their Raspberry Pi!</h2>
            <div className="flex justify-center items-center">
            <div className="mr-5">
              <p className="text-lg sm:text-md text-center">The Sensor HAT is a great addition to your Raspberry Pi, allowing you to measure temperature, humidity, and more!</p>
            </div>
            <div className="w-full max-w-2xl h-64">
              <img src="/sensorhat.png" alt="Sensor HAT" className="w-full h-full object-contain" />
            </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section id="FAQ" className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-800 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-red-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left font-semibold text-lg"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    {item.question}
                    {openFaq === index ? <ChevronUp className="text-red-600" /> : <ChevronDown className="text-red-600" />}
                  </button>
                  {openFaq === index && (
                    <p className="mt-2 text-red-700">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 RaspAPI - Hack Club Official YSWS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
