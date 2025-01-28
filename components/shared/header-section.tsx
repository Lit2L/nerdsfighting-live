interface HeaderSectionProps {
  label?: string
  title: string
  subtitle?: string
}

export function HeaderSection({ label, title, subtitle }: HeaderSectionProps) {
  return (
    <div className='flex flex-col items-center text-center'>
      {label ? <div className='mb-4 font-orbitron font-semibold'>{label}</div> : null}
      <h2 className='text-gradient_greenies font-orbitron text-2xl font-semibold tracking-wide md:text-4xl lg:text-4xl'>
        {title}
      </h2>
      {subtitle ? (
        <p className='mt-6 text-balance text-lg text-muted-foreground'>{subtitle}</p>
      ) : null}
    </div>
  )
}
