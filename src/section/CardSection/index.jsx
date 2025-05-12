import React from 'react'

const CardSection = () => {
  return (
    <div className='container mx-auto my-24'>
    <div className='flex gap-10'>
        <h2 className='text-[40px] text-black font-inter font-medium'>Capture Every Detail</h2>
        <h3 className='flex items-center font-inter text-black text-[18px] font-light'>Capture every nuance of your voice with this high-performance microphone.</h3>
    </div>
    <div className='grid md:grid-cols-3 gap-5 my-8'>
        <div className='relative overflow-hidden rounded-3xl shadow-xl  '>
            <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/collection-earhphones.jpg"
                alt=""
                className='w-full h-full object-cover' />
            <div className='absolute  inset-0 p-10 '>
                <h3 className='text-[34px] text-white  font-inter font-bold '>Discover exclusive collaborations</h3>
                <p className='text-[15px] font-inter text-white font-extralight'>Fynode: Innovation in Every Detail</p>
                <button className='text-white my-3'>Shop Now</button>
            </div>
        </div>
        <div className='relative overflow-hidden rounded-3xl shadow-xl  '>
            <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/collection-headphones.jpg"
                alt=""
                className='w-full h-full object-cover' />
            <div className='absolute  inset-0 p-10 '>
                <h3 className='text-[34px] text-white  font-inter font-bold '>Showcasing Iconic Collaborations</h3>
                <p className='text-[15px] font-inter text-white font-extralight'>Fynode: Redefining Modern Tech</p>
                <button className='text-white my-3'>Shop Now</button>
            </div>
        </div>
        <div className='relative overflow-hidden rounded-3xl shadow-xl  '>
            <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/collection-speakers.jpg"
                alt=""
                className='w-full h-full object-cover' />
            <div className='absolute  inset-0 p-10 '>
                <h3 className='text-[34px] text-white  font-inter font-bold '><h3 class="entry-title">Showcasing Iconic Collaborations</h3></h3>
                <p className='text-[15px] font-inter text-white font-extralight'>Fynode: Style Meets Performance</p>
                <button className='text-white my-3'>Shop Now</button>
            </div>
        </div>
    </div>

</div>

  )
}

export default CardSection