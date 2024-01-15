import React from 'react'
import { Icons, Input, Label } from '../atoms'
import { useControl } from '../../hooks'
import { Title } from '../atoms/Title'

const socialMediaData = [
  { id: 'facebook', label: 'Facebook', icon: Icons.BrandFacebookFilled },
  { id: 'twitter', label: 'Twitter', icon: Icons.BrandX },
  { id: 'instagram', label: 'Instagram', icon: Icons.BrandInstagram },
  { id: 'github', label: 'Github', icon: Icons.BrandGithubFilled },
  { id: 'linkedin', label: 'LinkedIn', icon: Icons.BrandLinkedin },
  { id: 'email', label: 'Email', icon: Icons.BrandEmail }
]
export const SocialLinks = () => {
  const { profile, handleProfileChange, handleResetInput } = useControl()

  return (
    <section className='grid grid-cols-4 gap-3'>
      <Title type='h2'>Social Links</Title>

      <div className='grid grid-cols-2 col-span-3 gap-4'>
        {socialMediaData?.map((item) => (
          <div key={item.id} className='group'>
            <Label htmlFor={item.id} text={item.label} />
            <div className='flex border rounded-lg items-center overflow-hidden'>
              <span className='min-w-10 p-2 grid place-items-center'>{item.icon && <item.icon className='w-full h-full' />}</span>
              <Input
                className='border-0 p-1 rounded-none'
                value={profile[item.id]}
                id={item.id}
                onChange={handleProfileChange}
              />
              <button
                onClick={() => handleResetInput(item.id)}
                className='h-full p-2 opacity-0 group-hover:opacity-100 grid  duration-500 cursor-pointer w-10 place-items-center'
              >
                <Icons.X className='w-full h-full' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
