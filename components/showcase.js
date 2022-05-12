import React from 'react'

const Showcase = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center'>
            <div className='h-0.5 w-1/2 bg-prime'></div>
            <h1 className='text-4xl font-head font-bold text-center'>
                Let's show you some success stories that prove our methods work across
                every industry
            </h1>
            <div className='h-0.5 w-1/2 bg-prime'></div>
        </div>
        <div className='flex flex-col justify-start'>
            <h1 className='text-2xl font-sub font-bold'>Shell Mexico: Energy, Food and Leisure</h1>
            <div>
                <h3 className="font-sub text-md font-bold">Introduction</h3>
                <p className="text-sm font-light text-justify">
                    I was approached by the international establishment of shell, 
                    who a few years ago started collaborating with Mexico LLC, 
                    a leisure and food franchise, where people who are traveling can stop and have a great time and a 
                    great meal before they continue their journey. Mexico has a huge 
                    inventory that must be kept up to date. The inventory contains products varying from 
                    food to cleansing products to coffee and beverages. Six main posts constitute the establishment : 
                    The Bar and Cafe, The Restaurant, The Creamery, The Grill, The Bakery and Fast Food.
                </p>
            </div>
            <div>
                <h3 className="font-sub text-md font-bold">The Business Problem</h3>
                <p className="text-sm font-light text-justify">
                    When we were approached by the board of Shell Mexico, 
                    they had a list of issues that wanted to fix, 
                    these issues all amount to one main problem: 
                    Our business is losing money everyday because of stock management issues, 
                    what they meant by that is that :  
                    information is not centralized 
                    we have no idea how much any posts are generating or consuming
                    Employees may be sneaking products out without anybody knowing
                    When will we have a stock shortage ?
                    Who can we trust from all our providers ?
                    We have no data about our consumers, we don’t know what they like or don’t, 
                    we don’t know what sells best, when sales are high or low and why they fluctuate.
                    These issues amount to consequences like: 
                        - Bad customer experience : a client may want to eat or drink something and 
                            it might not be available.
                        - Draining of resources: product theft, product rotting etc…
                        - Impossibility to scale: Not knowing your customers will result in bad decision making, 
                            not knowing what to promote etc…
                </p>
            </div>
            <div>
                <h3 className="font-sub text-md font-bold">The solution</h3>
                <p className="text-sm font-light text-justify">
                    We created a software solution for our client, the software has the following features : 
                    Adding articles to a database, each article belongs to a special class and comes 
                    from a specific retailer 
                    Adding Retailers and their information
                    Feeding the inventory 
                    Taking from the inventory
                    When an article is near rupture, the retailer that provides that article is 
                    contacted automatically via sms or email
                    An email containing information about purchases, consumption, what went in or out, 
                    is sent automatically to the board members everyday.
                </p>
            </div>
        </div>
        <div></div>
        
    </div>
  )
}

export default Showcase