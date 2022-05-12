import React from 'react'


const BusinessProb = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 md:mt-52'>
        <h1 className="font-bold font-head text-3xl text-prime w-full md:w-2/3 leading-10">
            As an Entrepreneur, Business Owner or Manager,
            You have been facing <br/> 
            <span className='text-sec'>Fears</span> and <span className='text-sec'>Obstacles</span> <br/>
            That stand in your way to that phenomenal growth 
        </h1>
        <div className="h-1 w-1/2 bg-prime mt-7"></div>
        <div className="flex">
            <div className='w-0 md:w-full'></div>
            <ul className="list-disc flex flex-col text-xl space-y-3 font-bold font-text text-prime mt-10">
                <li>Your business seems to be stuck ?</li>
                <li>You can’t scale and you’re afraid to ?</li>
                <li>Are you always worried that you might be making the wrong business decisions ?</li>
                <li>Do you lack certainty in your decision making due to lack of information ?</li>
                <li>Or are you worried that a bigger competitor will take you out in the next few months or years ?</li>
                <li>You fear that your idea will only live in your mind and will never actually become reality ?</li>
                <li>You don’t know what or who you need to build your app ?</li>
                <li>What if you hire the wrong person ? what if they start making your app and stop midway and leave you hanging ?</li>
                <li>What if the app they made you is not scalable and only works for a few hundreds or even thousands ?</li>
                <li>I can carry on with this: how will you monetize, how will you handle security ?</li>
            </ul>
        </div>
        <h1 className="font-bold font-sub text-2xl text-prime text-center mt-16 leading-10">
            "I know these fears because I've built more than 35 web and mobile apps <br/> 
            and worked with a dozen business owners and managers in the past 7 years,<br/> 
            and i helped them overcome those fears and obstacles"
        </h1>
        <p className="font-text text-md font-light text-prime w-full md:w-3/4 text-justify mt-10 leading-8 bg-gray-200 p-6 rounded-lg">
            Those fears are real, deeply rooted, 
            and very logical as I have heard them be expressed by every business owner, 
            executive and entrepreneur I have ever worked with. <br/>
            <br/>
            Some businesses never overcome these fears and obstacles, 
            business owners end up not making any progress because they fear that if they take 
            action without enough information a fatal mistake will put an end to the show. <br/>
            Keep in mind that not taking any actions is also a fatal mistake, 
            a stream of missed opportunities will put you so far behind the market that competing 
            will be meaningless. <br/>
            <br/>

            Let’s talk about scaling, <strong className='font-bold'>the way you handle your business today will not be enough tomorrow</strong><br/> 
            how will you manage if you have way more on your plate, things will get out of hand. <br/>

            Not to talk about the under performance issues that your company might be facing, 
            lack of optimization and much more.<br/>
            <br/>
            <strong className='font-bold'>
                These problems are draining you and you need tools, 
            serious, powerful tools to overcome them. Your competition might already be using those tools, 
            how can you hope to win this race without putting every resource and asset on your side.
            </strong> 
            
        </p>
        <button class="w-80 md:w-96 h-16 px-6 text-indigo-100 font-sub text-xl transition-colors 
                        duration-150 bg-prime rounded-lg 
                        focus:shadow-outline hover:bg-sec hover:text-prime mt-7">Schedule a call now</button>
    </div>
  )
}

export default BusinessProb
