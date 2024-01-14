import React from 'react'
import { capilaze } from '../../utils'
import { socialIcons } from '../atoms/Icons'

export const PreviewSocialLinks = ({ profileData }) => {
  const getSocialLinks = () => {
    return Object.entries(profileData)
      .slice(3)
      .filter(([_, value]) => value)
      .map(([key, value]) => ({ name: key, url: value, icon: socialIcons[key] }))
  }
  return (
    <ul className='flex items-center justify-center gap-3' aria-label='Social Links'>
      {
        getSocialLinks()?.map((item) => {
          return item?.url &&
            <li key={item.name} aria-label={capilaze(item.name)}>
              <a
                href={item.name === 'email' ? `mailto:${item.url}` : item.url}
                title={capilaze(item.name)}
                className='block hover:scale-105 transition-transform'
                target='_blank' rel='noreferrer'
              >
                {item.icon && <item.icon className='w-full h-full' />}
              </a>
            </li>
        })
        }
    </ul>
  )
}
