import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Asraf'
const img1 = 'https://picsum.photos/200/300'
const img2 = 'https://picsum.photos/250/300'
const img3 = 'https://picsum.photos/300/300'
const link = 'http://localhost:3001/'

const heading = {
  color: '#fa9191',
  textAlign: 'center',
  textTransform: 'capitalize',
  fonWeight: 'bold',
  textShadow: '0px 2px 4px #ffe9c5',
  margin: '70px 0',
  fontFamily: '"Josefin Sans", sans-seri'
}

ReactDOM.render(
  <>
    <h1 style={heading}>My name is {name}</h1>
    <div className='img_div'>
      <img src={img1} alt='random images' />
      <img src={img2} alt='random images' />
      <a href={link} target={'_blank'} rel='noreferrer'>
        <img src={img3} alt='random images' />
      </a>
    </div>
  </>,
  document.getElementById('root')

)