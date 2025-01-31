import InteractiveBentoGallery from '@/components/ui/interactive-bento-gallery'

const mediaItems = [
  {
    id: 1,
    type: 'image',
    title: 'Anurag Mishra',
    desc: 'Driven, innovative, visionary',
    url: 'https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcbP3rYTiXwH7Y106CepJOsoAgQjyFi3MUfDkh',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2'
  },
  {
    id: 2,
    type: 'video',
    title: 'Dog Puppy',
    desc: 'Adorable loyal companion.',
    url: 'https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4',
    span: 'md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2'
  },
  {
    id: 3,
    type: 'video',
    title: 'Forest Path',
    desc: 'Mystical forest trail',
    url: 'https://dribbble.s3.amazonaws.com/direct-uploads/dac7be6b-ff1a-450b-9611-291b3a0ba64f/sparring_timelapse_480.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5AEXTAZFDQMML4PJ%2F20250131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250131T111003Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=3e7588dbce797a236e1d0b2c9710cc5aa44a0c93471cfbcf5cdb0bebe4bfff43',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 '
  },
  {
    id: 4,
    type: 'video',
    title: 'Falling Leaves',
    desc: 'Autumn scenery',
    url: 'https://dribbble.s3.amazonaws.com/direct-uploads/dac7be6b-ff1a-450b-9611-291b3a0ba64f/sparring_timelapse_480.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5AEXTAZFDQMML4PJ%2F20250131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250131T111003Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=3e7588dbce797a236e1d0b2c9710cc5aa44a0c93471cfbcf5cdb0bebe4bfff43',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 '
  },
  {
    id: 5,
    type: 'video',
    title: 'Bird Parrot',
    desc: 'Vibrant feathered charm',
    url: 'https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 '
  },
  {
    id: 6,
    type: 'image',
    title: 'Beach Paradise',
    desc: 'Sunny tropical beach',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 '
  },
  {
    id: 7,
    type: 'video',
    title: 'Shiva Temple',
    desc: 'Peaceful Shiva sanctuary.',
    url: 'https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 '
  }
]

export function BentoGridGalleryDemo() {
  return (
    <div className='min-h-screen overflow-y-auto'>
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title='Gallery Shots Collection'
        description='Drag and explore our curated collection of shots'
      />
    </div>
  )
}
