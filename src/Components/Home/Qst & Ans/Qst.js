import React, { useState } from 'react'
import './Qst.scss'
import { IoMdCheckmark } from 'react-icons/io'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const Qst = () => {
  const [show, setShow] = useState([false, false, false, false])

  const toggleShow = (index) => {
    const newShow = [...show]
    newShow[index] = !newShow[index]
    setShow(newShow)
  }

  // Array of question data
  const questions = [
    {
      question: 'Think ahead and boost your business?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit veniam ipsum velit debitis est?',
    },
    {
      question: 'How consultancy experts work?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit veniam ipsum velit debitis est?',
    },
    {
      question: 'What is the best advice for growth?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit veniam ipsum velit debitis est?',
    },
    {
      question: 'How to improve your business?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit veniam ipsum velit debitis est?',
    },
  ]

  return (
    <section className='section qst-section'>
      <div className='qst-title'>
        <h1>Question answers</h1>
        <p>We help our clients review their businesses</p>
      </div>
      <div className='section-center qst-center'>
        <article className='qsts'>
          {questions.map((qst, index) => (
            <div key={index} className={`${show[index] ? 'show qst' : 'qst'}`}>
              <div className='qst-ahead'>
                <h4>
                  <span>{index + 1}.</span> {qst.question}
                </h4>
                <button onClick={() => toggleShow(index)} className='qst-btn'>
                  {show[index] ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
                </button>
              </div>
              {show[index] && <p>{qst.answer}</p>}
            </div>
          ))}
        </article>
        <article className='mark'>
          <div className='mark-container'>
            <IoMdCheckmark className='mark-logo' />
            <p>neuculiar cing edit</p>
          </div>
          <div className='mark-container'>
            <IoMdCheckmark className='mark-logo' />
            <p>swipe radiase suscript sagitis leo</p>
          </div>
          <div className='mark-container'>
            <IoMdCheckmark className='mark-logo' />
            <p>enlarge equilibrium dignissione posture</p>
          </div>
          <div className='mark-container'>
            <IoMdCheckmark className='mark-logo' />
            <p>if you are going to use a passage</p>
          </div>
          <div className='mark-container'>
            <IoMdCheckmark className='mark-logo' />
            <p>if you are going to use a passage head data</p>
          </div>
        </article>
        <div className='qst-exp'>
          <h2>
            30 <br /> <p>years of experience</p>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Qst
