import React from 'react'
import { Link } from 'react-router-dom'

const Finish = (props) => {
  return (
    <>
      <div className="home">
        {props.isLogged ? (
          <>
            <div className="home-under">
              {props.finish.map((todo, i) => (
                <div key={i} className="home-todo">
                  <h1>{todo.date}</h1>
                  <p>{todo.data}</p>
                </div>
              ))}
            </div>
            <div className="home-end">
              <Link to="/addtodo">
                <span>+</span>
              </Link>
              <Link to="/finish">
                <span>Finish</span>
              </Link>
            </div>
          </>
        ) : (
          <div style={{ height: "82vh" }}>Not Found</div>
        )}
      </div>
    </>
  )
}

export default Finish