import React from 'react'
import { capilaze, cn } from '../../utils'
import { socialIcons } from '../atoms/Icons'

export const PreviewSocialLinks = ({ profileData, className }) => {
  const getSocialLinks = () => {
    return Object.entries(profileData)
      .slice(3)
      .filter(([_, value]) => value)
      .map(([key, value]) => ({ name: key, url: value, icon: socialIcons[key] }))
  }
  return (
    <ul className={cn('flex items-center justify-center gap-3', className)} aria-label='Social Links'>
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
