"use client"

import { useState } from "react"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"

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

  function RaspberryPiModel() {
    const { scene } = useGLTF("/raspberry_pi_3.glb") // Placeholder for your model file

    return <primitive 
    object={scene} 
    scale={1.5}      
    />
  }

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
            {/* 3D Model Canvas */}
            <Canvas>
              <ambientLight />
              <PerspectiveCamera makeDefault position={[0, 7, 8]} />
              <directionalLight position={[2, 5, 2]} />
              <RaspberryPiModel />
              <OrbitControls />
            </Canvas>
          </div>
          {/* say this isnt the raspberry pi youll be getting */}
          <p className="text-red-600 mt-4 text-xs">This isn&apos;t an accurate representation of the Raspberry Pi you&apos;ll be getting. The actual Raspberry Pi will be a 2 Zero model.</p>
        </section>

        {/* Requirements Section */}
        <section id="requirements" className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-800 text-center">Requirements</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Create an original API using any programming language or framework</li>
              <li>Implement at least three GET and one POST endpoint</li>
              <li>Include proper documentation for your API</li>
              <li>Host your API on a publicly accessible server</li>
              <li>Submit your API before the deadline January 1st</li>
            </ul>
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
