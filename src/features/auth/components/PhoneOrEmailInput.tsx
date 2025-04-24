import { HeroInput } from '@/components/ui/heroui/HeroInput'
import { Input } from '@heroui/react'
import React from 'react'

export default function PhoneOrEmailInput({ value, onChange }: React.ComponentPropsWithoutRef<typeof Input>) {
  return (
    <HeroInput
      label="Phone Number or Email Address"
      placeholder="Phone Number / Email Address"
      type="tel"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
      value={value}
      onChange={onChange}
      isRequired
    />
  )
}
