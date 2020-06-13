import React from 'react'

import './Letter.css'


const Letter = ({ letter, onClick }) => (
    <button className={"btn btn-secondary"} onClick={() => onClick(letter)}>{letter}</button>
)

export default Letter
