import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'
import Fox from '../models/Fox'
import emailjs from '@emailjs/browser'
function Contact() {
  const [currentAnimation, setCurrentAnimation] = useState('idle ')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isloading, setIsLoading] = useState(false)
  const formRef=useRef()
  const handleBlur = () => {
    setCurrentAnimation('idle')
  }
  const handleFocus = () => {
    setCurrentAnimation('idle')
  }
  const handleChange = ({target:{name,value}}) => {
    setCurrentAnimation('walk')
    setForm({...form ,[name]:value})
    console.log(form);
    
  }
  const handleOnsumbit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')
    //it is a ascynchrons operation
   
    emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      formRef.current, 
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsLoading(false);
      console.log("Email sent successfully!");
    })
    .catch((err) => {
      setIsLoading(false);
      console.error("Failed to send email:", err);
    });
    setTimeout(() => {
      setCurrentAnimation('idle')
    }, 4000);
  }
  return (
    <section className='relative flex lg:flex-row flex-col w-full max-container'>
      <div >
        <h1 className='head-text'>
          Get in touch
        </h1>
        <form ref={formRef}onSubmit={handleOnsumbit} className='w-full   justify-center gap-5 flex flex-col items-start mt-[20px] sm:w-[400px]'>
          <label className=' flex justify-center  font-medium items-center text-[24px] align-super mb-[-10px]'>

            Name :
          </label>
          <input
            type='text'
            name='name'
            className="border h-10 w-[500px] shadow-lg focus:outline-none border-gray-300 focus:border-purple-200 focus:ring-2 focus:ring-purple-900 rounded-md p-2"
            placeholder='Menna'
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={form.name}
          />
          <label className=' flex justify-center font-medium items-center text-[24px] align-super mb-[-10px]'>

            Email :
          </label>
          <input
            type='email'
            name='email'
            className="border h-10 w-[500px] focus:outline-none shadow-lg border-gray-300 focus:border-purple-200 focus:ring-2 focus:ring-purple-900 rounded-md p-2"
            placeholder='Menna@gmail.com'
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={form.email}
          />
          <label className=' flex justify-center font-medium items-center text-[24px] align-super mb-[-10px]'>
            Your Message :
          </label>
          <textarea
            name='message'
            rows={5}
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={form.message}
            placeholder='write your thoughts here...' className='shadow-lg p-3  w-[500px] border focus:outline-none border-gray-300 focus:border-purple-200 focus:ring-2 focus:ring-purple-900 rounded-md' />
          <button disabled={isloading} className='transform scale-95 transition-transform duration-500 hover:scale-100 w-[520px] h-[45px] bg-gradient-to-br from-purple-800  via-purple-250 to-purple-400  rounded text-white ml-[-9px]  '>
            {isloading ? 'sending....' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='w-[500px] '>

        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={''}>
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[0, 0, 1]}
              intensity={2}
            />
            <Fox
              rotation={[12.6, -0.6, 0]}
              position={[0.5, 0.35, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            /></Suspense>
        </Canvas>

      </div>
    </section>
  )
}

export default Contact