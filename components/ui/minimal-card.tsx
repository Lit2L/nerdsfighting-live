import * as React from 'react'

import { cn } from '@/lib/utils'

// MinimalCard Component
const MinimalCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-[20px] p-2 transition-colors',
      'bg-[#191919]/50',
      'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_1px_1px_rgba(255,252,240,0.5)_inset,0_0_0_1px_hsla(0,0%,100%,0.1)_inset,0_0_1px_rgba(28,27,26,0.5)]',
      'dark:shadow-[0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_1px_rgba(0,0,0,0.1),0_2px_rgba(0,0,0,0.1),0_4px_rgba(0,0,0,0.1),0_8px_rgba(0,0,0,0.1)]',
      className
    )}
    {...props}
  >
    {children}
  </div>
))
MinimalCard.displayName = 'MinimalCard'

// MinimalCardImage Component
const MinimalCardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { src: string; alt: string }
>(({ className, alt, src, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative mb-3 h-[200px] w-full rounded-[16px]',
      'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_1px_1px_rgba(255,252,240,0.5)_inset,0_0_0_1px_hsla(0,0%,100%,0.1)_inset,0_0_1px_rgba(28,27,26,0.5)]',
      'dark:shadow-[0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_1px_rgba(0,0,0,0.1),0_2px_rgba(0,0,0,0.1),0_4px_rgba(0,0,0,0.1),0_8px_rgba(0,0,0,0.1)]',
      className
    )}
    {...props}
  >
    <img
      src={src}
      alt={alt}
      width={200}
      height={200}
      className='absolute inset-0 size-full rounded-[16px] object-contain'
    />
  </div>
))
MinimalCardImage.displayName = 'MinimalCardImage'

// Subcomponents
const MinimalCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-md font-orbitron m-1 rounded-md bg-[#303030] p-3 text-center font-bold tracking-widest text-[#f5f5f5]',
      className
    )}
    {...props}
  />
))
MinimalCardTitle.displayName = 'MinimalCardTitle'

const MinimalCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'font-orbitron rounded-lg px-6 py-2 text-xs font-bold capitalize text-neutral-200',
      className
    )}
    {...props}
  />
))
MinimalCardDescription.displayName = 'MinimalCardDescription'

const MinimalCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('rounded-lg p-6', className)} {...props} />
  )
)
MinimalCardContent.displayName = 'MinimalCardContent'

const MinimalCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
)
MinimalCardFooter.displayName = 'MinimalCardFooter'

// Exports
export {
  MinimalCard,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardDescription,
  MinimalCardContent,
  MinimalCardFooter
}
