import { AnimatedTestimonials } from '@/components/sections/animated-testimonials'

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: `Cool place to train. Very beginner friendly. The coaches and fighters make you feel welcomed. You get a good workout and learn a lot about fighting. I also like that it is kept very clean in there. 5 stars!`,
      name: 'Thai L.',
      designation: 'Business Owner',
      src: '/_static/avatars/thai-yelp.jpg'
    },
    {
      quote: `Coach Larry is awesome. He breaks it down in simple yet effective techniques that builds confidence. What I like most about the class are the students. No ego, friendly, and fun.`,
      name: 'Mike T',
      designation: 'Data Analyst',
      src: '/_static/mobile/og.png'
    },
    {
      quote: `Larry's kickboxing classes at Nerds Fighting are seriously something else. He's got this way of breaking down martial arts that makes it super approachable for everyone. You walk in, and whether you're new or you've been doing this for years, you immediately feel welcome. The whole "meathead" stereotype? Yeah, that's not a thing here.

      Larry's built this space where you can geek out about technique like you're analyzing a Starcraft match, and then jump into sparring like you're Saenchai in a Muay Thai training camp. It's crazy--one minute you're talking Magic the Gathering, and the next you're trading kicks. What makes this place special is how it blends martial arts with nerd culture in a way that just works.

      Everyone, no matter their age or background, feels like they belong here. It's not just about getting in shape; it's about the community. If you want a place where you can be yourself, talk nerdy, and still train hard, Nerds Fighting is the spot. I highly recommend!`,
      name: 'Qua W.',
      designation: 'Operations Director at CloudScale',
      src: '/_static/avatars/qua-yelp.jpg'
    },
    {
      quote:
        'Great way to learn self defense in an awesome engaging coach and small group of supportive friends.',
      name: 'Richard H.',
      designation: 'Engineer & Project Owner - Abundance Oasis',
      src: '/_static/avatars/huygis.jpg'
    }
    // {
    //   quote:
    //     'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
    //   name: 'Lisa Thompson',
    //   designation: 'VP of Technology at FutureNet',
    //   src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // }
  ]
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
}
