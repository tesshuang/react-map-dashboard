import React from 'react'

export default function Analytics ({ coronaData }) {
  // console.log(coronaData);
  const top10Countries = coronaData.sort((a, b) => b.cases - a.cases).slice(0, 10)

  // console.log(top10Countries);
  return (
    <div className='analytics'>
      <h6>
        <img src={require('../images/ic_info.svg')} alt='more info' 
          style={{ verticalAlign: 'sub', width: '16px', marginRight: '5px' }}/>
        Click on the map to learn more details
      </h6>
      <h3>Top 10 Countries of today</h3>
      {top10Countries.map((data, key) => (
        <div className='top10' key={data.country}>
          <p><b>#{key+1} {data.country}: {data.cases}</b></p>
        </div>
      ))}
    </div>
  )
}