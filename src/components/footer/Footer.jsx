import React from 'react'
import { useEffect } from 'react'

const Footer = () => {
  useEffect(() => {
    getStudent()
  }, [])

  const getStudent = async () => {
    const api = await fetch(`https://my-amigos-api.herokuapp.com/students`)
    const data = await api.json()
    console.log(data)
  }
  return <div>Footer</div>
}

export default Footer
