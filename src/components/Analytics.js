import React from 'react'

export default function Analytics ({ coronaData }) {
  // console.log(coronaData);
  const top10Countries = coronaData.sort((a, b) => b.cases - a.cases).slice(0, 10)

  // console.log(top10Countries);
  return (
    <div className='analytics'>
      <h3>Top 10 Countries of today</h3>
      {top10Countries.map((data, key) => (
        <div className='top10' key={data.country}>
          <p><b>#{key+1} {data.country}: {data.cases}</b></p>
        </div>
      ))}
    </div>
  )
}