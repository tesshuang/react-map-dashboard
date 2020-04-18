import React from 'react'

export default function Loading () {
  const [dot, setDot] = React.useState('.')

  React.useEffect(() => {
    const id = setTimeout(() => {
      console.log(dot)
      dot !== '...' ? setDot(d => d += '.') : setDot('.')
    }, 500)

    return () => clearTimeout(id)

  }, [dot])
  

  return (
    <div  className='loading'>Fetching data{dot}</div>
  )
}
