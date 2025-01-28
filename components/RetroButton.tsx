import { RetroButton } from '@/components/ui/retro-button'

export default function RetroButtonDemo() {
  return (
    <div className=''>
      {/* <div className='flex max-w-[26em] flex-wrap items-center justify-center gap-4'> */}
      <RetroButton>Start</RetroButton>
      <RetroButton variant='darkGray'>Sound</RetroButton>
      <RetroButton variant='white'>Erase</RetroButton>
      <RetroButton variant='lightGray'>Shift</RetroButton>
      <RetroButton variant='gray'>Play</RetroButton>
      {/* </div> */}
    </div>
  )
}
