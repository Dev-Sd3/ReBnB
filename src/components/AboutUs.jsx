import React from 'react'
import founder1 from '../assets/founder1.png'
import founder2 from '../assets/founder2.png'
import founder3 from '../assets/founder3.png'
import AbUsimage from '../assets/people.png'

/*
This is the about us section of the webapp where we could pass the AboutUs component
different data such as different facts or founders and each of them would be mapped
to its specific class component to be displayed on screen accordingly

This file also contains exclusively used style objects
*/

const image_style =
{
  marginTop: '3px',
  marginLeft: '12px',
  width: '100%',
}

const CenteredDiv = {
  display: 'block',
  justifyContent: 'center',
  alignItems: 'center',
}

const InnerDiv = {
  textAlign: 'center',
  maxWidth: '900px',
  margin: 'auto'
}

const factCards =
{
  display: 'flex',
  justifyContent: 'space-between',
  margin: '50px'
}

const factCard =
{
  width: 'calc(33.33% - 20px)',
  backgroundColor: '#ffffff',
  border: '1px solid #ebebeb',
  padding: '20px',
  textAlign: 'center'
}


const bigText = { fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }

const smallText = { fontSize: '16px', marginBottom: '10px' }

const dateStyle = { fontSize: '12px', color: '#9b9b9b' }

const FoundersDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '100px',
}

const FounderCardStyle = {
  borderRadius: '10px',
  padding: '10px',
  width: '100%',
  margin: '10px',
  backgroundColor: '#fff',
}

const FounderImg = {
  borderRadius: '15px',
  width: '350px',
  height: '350px',
  objectFit: 'cover',
}


class FactCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const
      {
        Bigtext,
        SmallText,
        date
      } = this.props.data

    return (
      <div style={factCard}>
        <h2 style={bigText}>
          {Bigtext}
        </h2>
        <p style={smallText}>
          {SmallText}
        </p>
        <small style={dateStyle}>
          {date}
        </small>
      </div>

    )
  }
}

class FounderCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const
      {
        name,
        img,
        jobDesc
      } = this.props.data

    return (
      <div style={FounderCardStyle}>
        <img src={img} alt={name} style={FounderImg} />
        <br></br>
        <h2 style={{ margin: '10px' }}>{name}</h2>
        <p>{jobDesc}</p>
      </div>
    )

  }

}


const AboutUs = () => {

  // Here the facts are writen but they could be fetched from a database if needed

  const Facts =
  {
    Fact1: { Bigtext: '6.6M', SmallText: 'active listings worldwide', date: 'as of December 31, 2022' },
    Fact2: { Bigtext: '100K', SmallText: 'cities and towns with active Airbnb listings', date: 'as of December 31, 2022' },
    Fact3: { Bigtext: '220+', SmallText: 'countries and regions with Airbnb listings', date: 'as of December 31, 2022' },
    Fact5: { Bigtext: '1.4B', SmallText: 'Airbnb guest arrivals all-time', date: 'as of December 31, 2022' },
    Fact6: { Bigtext: '$180N+', SmallText: 'earned by Hosts, all-time', date: 'as of December 31, 2022' }
  }

  const FactsCards = (
    <div style={factCards}>
      {Object.entries(Facts).map(([key, factKey]) => (
        <FactCard key={key} data={factKey}></FactCard>
      ))}
    </div>
  )

  const Founders =
  {
    F_Brian: { name: 'Brian Chesky', img: founder1, jobDesc: 'Airbnb Co-founder and Chief Executive Officer' },
    F_Nathan: { name: 'Nathan Blecharczyk', img: founder2, jobDesc: 'Airbnb Co-founder and Chief Strategy Officer' },
    F_Joe: { name: 'Joe Gebbia', img: founder3, jobDesc: 'Airbnb Co-founder and Chairman of Airbnb.org' }
  }

  const FounderCards = (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ marginTop: '30px', fontSize: '4em' }}>Our Founders</h1>
      <div style={FoundersDiv}>
        {Object.entries(Founders).map(([key, founder]) => (
          <FounderCard key={key} data={founder} />
        ))}
      </div>
    </div>
  );

  const AboutUsText = (
    <div>

      <div>
        <img src={AbUsimage} style={image_style} alt='About us'></img>
      </div>
      <br></br>

      <div style={CenteredDiv}>
        <div style={InnerDiv}>
          <h1 style={{ marginTop: '30px', fontSize: '4em' }}>About us</h1>
          <br></br>
          <p style={{ fontSize: '1.4em' }}> AirBnb was founded in 2007 by founders Brian Chesky, Nathan Blecharczyk and Joe Gebbia when they welcomed tourists
            in their own San Fransico Home, it has since skyrocketed in popularity and welcomes 4 million hosts daily and 1.4 billion guests on a yearly basis
          </p>
        </div>
      </div>

    </div>
  )

  return (
    <div>
      {AboutUsText}
      {FactsCards}
      {FounderCards}
    </div>
  )

}

export default AboutUs;