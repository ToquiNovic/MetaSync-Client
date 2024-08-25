import { FC, useState, JSX } from 'react'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'

interface LoadingButtonProps {
  onClick: () => void;
  label: string | JSX.Element;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  disabled?: boolean;
}

const LoadingButton: FC<LoadingButtonProps> = ({ onClick, label, variant = 'default', disabled }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    onClick()
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <Button onClick={handleClick} disabled={isLoading || disabled} variant={variant}>
      {isLoading ? <Loader className='h-5 w-5 animate-spin' /> : label}
    </Button>
  )
}

export default LoadingButton
