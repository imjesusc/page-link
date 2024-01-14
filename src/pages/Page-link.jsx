import React from 'react'
import { useStore } from '../store'
import { decode } from 'js-base64'

export const PageLink = () => {
  const { profile } = useStore()

  const getUrlData = () => {
    const { pathname } = window.location
    if (pathname === '/page-link') return

    let data = pathname.split('/page-link/')[1]
    data = data.split('%7C')

    const decodedData = {}

    const keys = Object.keys(profile)
    const decodeData = (value) => (value ? decode(value) : '')

    keys.forEach((key, index) => {
      decodedData[key] = decodeData(data[index])
    })

    return decodedData
  }

  const data = getUrlData()
  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <img src={data?.avatar} alt='avatar' />
    </div>
  )
}
