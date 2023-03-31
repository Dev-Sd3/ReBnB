import React from 'react';
import listings from '../listings_cleaned.json'
import { Link } from 'react-router-dom'

/*
This is you Houses component, which displays all available listings on the main page,

upon clicking a certain listing, you are directed via react router the the details of
the specific 

I've included all styling exclusive the this component inside this file of easy debugging 
since they arent used elsewhere
*/

const country_card = {
  display: 'flex',
  height: '400px',
  width: '320px',
  cursor: 'pointer',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  padding: '15px',
  margin: '15px',
  borderRadius: '10px',
  boxShadow: '0 0 20px 1px #e6e1e1',
};

const image_style = {
  boxShadow: '0 0 3px 1px #e6e1e1',
  display: 'block',
  margin: '0 auto',
  width: '320px',
  height: '250px',
  borderRadius: '10px',
  transition: 'all 0.3s ease-in-out',
};

const div_style = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '15px',
};

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const
      {
        id,
        picture_url,
        name,
        street,
        host_name,
        price
      } = this.props.data

    const handleMouseOver = (e) => {
      e.currentTarget.style.transform = 'scale(1.15)' 
    }

    const handleMouseOut = (e) => {
      e.currentTarget.style.transform = 'scale(1)' 
    }

    return (
      <Link key={id} to={/House/ + id}>
        <div style={country_card} >
          <div>
            <img
              src={picture_url}
              crossOrigin="anonymous"
              style={image_style}
              alt={name}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <br />
          <p style={{ color: '#FF5A60' }}><strong>{name}</strong></p>
          <p>{street}</p>
          <br />
          <p><i>by Host {host_name}</i></p>
          <p><b>{price} Per night</b></p>
        </div>
      </Link>
    )
  }
}

const Houses = () => {

  return (

    /* 
    Each listing from the JSON file is mapped to a class component where its corresponding 
    properties are destructured
    */
    <div style={div_style}>
      {listings.map((listing) => (
        <Card data={listing}></Card>
      ))}
    </div>
  );

}

export default Houses;
