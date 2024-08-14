import React from 'react'

export default function Loading() {
  return (
    <>
    <IntroductionSection loading={handleLoading} style={{display:'none'}}/>
    <div style={{display:'flex', justifyContent:"center", alignItems:"center", minHeight:'99vh', flexDirection:"column", gap:"20px"}}>
    <div id='loading'/>
    <h2>Loading...</h2>
    </div>
    </>
  )
}
