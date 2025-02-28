import React from 'react'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
    </>
  )
}

export default Router