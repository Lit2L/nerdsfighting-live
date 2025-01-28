import { InfiniteSlider } from '@/components/ui/infinite-slider'

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse className='h-full w-full bg-white'>
      <img
        src='https://motion-primitives.com/apple_music_logo.svg'
        alt='Apple Music logo'
        className='h-[320px] w-auto'
      />
      <img
        src='https://motion-primitives.com/chrome_logo.svg'
        alt='Chrome logo'
        className='h-[320px] w-auto'
      />
      <img
        src='https://motion-primitives.com/strava_logo.svg'
        alt='Strava logo'
        className='h-[320px] w-auto'
      />
      <img
        src='https://motion-primitives.com/nintendo_logo.svg'
        alt='Nintendo logo'
        className='h-[320px] w-auto'
      />
      <img
        src='https://motion-primitives.com/jquery_logo.svg'
        alt='Jquery logo'
        className='h-[320px] w-auto'
      />
      <img
        src='https://motion-primitives.com/prada_logo.svg'
        alt='Prada logo'
        className='h-[320px] w-auto'
      />
    </InfiniteSlider>
  )
}

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider durationOnHover={75} gap={24}>
      <img
        src='/_static/mobile/adam-slip.png'
        alt='Dean blunt - Black Metal 2'
        className='aspect-square w-[320px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141'
        alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
        className='aspect-square w-[320px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf'
        alt='Yung Lean - Stardust'
        className='aspect-square w-[320px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f'
        alt='Lana Del Rey - Ultraviolence'
        className='aspect-square w-[320px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288'
        alt='A$AP Rocky - Tailor Swif'
        className='aspect-square w-[320px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520'
        alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        className='aspect-square w-[320px] rounded-[4px]'
      />
    </InfiniteSlider>
  )
}

export function InfiniteSliderVertical() {
  return (
    <div className='flex h-[400px]'>
      <InfiniteSlider direction='vertical'>
        <img
          src='/_static/mobile/adam-slip.png'
          alt='Dean blunt - Black Metal 2'
          className='aspect-auto w-[320px] rounded-[4px]'
        />
        <img
          src='_static/mobile/mitts3.png'
          alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
          className='aspect-auto w-[320px] rounded-[4px]'
        />
        <img
          src='_static/mobile/mobile13.png'
          alt='Yung Lean - Stardust'
          className='aspect-auto w-[320px] rounded-[4px] object-cover'
        />
        <img
          src='/_static/mobile/mobile3.png'
          alt='Lana Del Rey - Ultraviolence'
          className='aspect-auto w-[320px] rounded-[4px]'
        />
        <img
          src='/_static/mobile/mobile11.png'
          alt='A$AP Rocky - Tailor Swif'
          className='aspect-auto w-[320px] rounded-[4px]'
        />
        <img
          src='/_static/mobile/mobile14.png'
          alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
          className='aspect-auto w-[320px] rounded-[4px]'
        />
      </InfiniteSlider>
      {/* <InfiniteSlider direction='vertical' reverse>
        <img
          src='https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645'
          alt='DAYS BEFORE RODEO - Travis Scott'
          className='aspect-square w-[320px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e02d3e668d0c74720c8c23978e3'
          alt="You're in My System - TORYONTHEBEAT"
          className='aspect-square w-[320px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e0234537499b159b0e6d18e5655'
          alt="You can't tell me - People Make the World Go Round"
          className='aspect-square w-[320px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e020cd942c1a864afa4e92d04f2'
          alt='ye - Kanye West'
          className='aspect-square w-[320px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e02a875c3ec944b4f164ab5c350'
          alt='Slime Season 3 - Young Thug'
          className='aspect-square w-[320px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e026376f0d88bbbc8cd051e3401'
          alt='SWAG - 8ruki'
          className='aspect-square w-[320px] rounded-[4px]'
        />
      </InfiniteSlider> */}
    </div>
  )
}

export default {
  InfiniteSliderBasic,
  InfiniteSliderHoverSpeed,
  InfiniteSliderVertical
}
