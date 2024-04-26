import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import './Todo.scss'

const Todo = () => {
  return (
    <section className='section todo-section'>
      <div className='section-center todo-center'>
        <article className='todo-qst'>
          <h1>what they are talking about?</h1>
          <p>Trusted by more than 4,200 customers</p>
          <div className='todo-btns'>
            <button className='todo-btn'>
              <FaArrowLeft />
            </button>
            <button className='todo-btn'>
              <FaArrowRight />
            </button>
          </div>
        </article>
        <div className='todoInfo-container'>
          <article className='todo-info'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              animi totam dolorum provident, aut eius, suscipit accusamus
              facilis natus iusto accusantium cum nam aliquam illo. Beatae,
              aspernatur tempore. Ipsa, suscipit.
            </p>
            <h4>todo higgins</h4>
            <p className='cust'>customer</p>
          </article>
          <article className='todo-info'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              animi totam dolorum provident, aut eius, suscipit accusamus
              facilis natus iusto accusantium cum nam aliquam illo. Beatae,
              aspernatur tempore. Ipsa, suscipit.
            </p>
            <h4>todo higgins</h4>
            <p className='cust'>customer</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Todo
