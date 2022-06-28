import React from 'react'

export default function Step(props) {
  return (
    <div className="step">
                    <label>Step {props.step}</label>
                    <h3>
                        {props.text}
                    </h3>
                </div>
  )
}
