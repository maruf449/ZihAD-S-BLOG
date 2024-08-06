import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
               Wanna Visit My Personal Portfolio?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these Demo Projects in my Website
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://zihadhasan.vercel.app" target='_blank' rel='noopener noreferrer'>
                    10+ Nextjs Projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://i.ibb.co/SRhnhmQ/trya.png" />
        </div>
    </div>
  )
}