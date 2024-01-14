import React from 'react'
import { Icons, Input, Label } from '../atoms'
import { usePage } from '../../hooks'

const socialMediaData = [
  { id: 'facebook', label: 'Facebook', icon: Icons.BrandFacebookFilled },
  { id: 'twitter', label: 'Twitter', icon: Icons.BrandX },
  { id: 'instagram', label: 'Instagram', icon: Icons.BrandInstagram },
  { id: 'github', label: 'Github', icon: Icons.BrandGithubFilled },
  { id: 'linkedin', label: 'LinkedIn', icon: Icons.BrandLinkedin },
  { id: 'whatsapp', label: 'Whatsapp', icon: Icons.BrandWhatsapp }
]
export const SocialLinks = () => {
  const { profile, handleChange } = usePage()

  return (
    <section className='grid grid-cols-2 gap-3'>
      <div className='col-span-2'>Social Links</div>
      {socialMediaData?.map((item) => (
        <div key={item.id}>
          <Label htmlFor={item.id} text={item.label} />
          {item.icon && <item.icon />}
          <Input value={profile[item.id]} type='link' id={item.id} onChange={handleChange} />
        </div>
      ))}
    </section>
  )
}
