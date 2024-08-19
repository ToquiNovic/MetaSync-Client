import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function AvatarUser () {
  return (
    <Avatar>
      <AvatarImage
        src='https://github.com/toquinovic.png'
        alt='@toquinovic'
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
