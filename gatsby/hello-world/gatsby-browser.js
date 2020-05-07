import React from 'react'
import App from './component/App'
import { Link } from 'gatsby'

export const wrapPageElement = ({ element, props }) => {
  return <App {...props}>
    <div><Link to="/">Index</Link> | <Link to="/about">About</Link></div>
    {element}</App>
}