import {articles} from "../constants";

const Blog = () => {
  return (
     <div className='relative max-w-7xl mx-auto pt-20 px-6  min-h-[600px]'>
           <h2 className='text-3xl  text-gray-900 dark:text-white mb-15'>Latest Articles</h2>
           
   
   
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
               {articles.map((article,index)=>(
                   <div key={index} className='flex flex-col items-start gap-6 bg-white dark:bg-gray-800 rounded-lg p-4'>
                       <img src={article.image} alt="icon" />
                        <p className='text-sm italic text-neutral-500'>By {" "} {article.author}</p>
                       <h3 className='text-xl text-gray-900 dark:text-white'>{article.title}</h3>
                       <p className='text-sm text-neutral-500'>{article.text}</p>
                   </div>
               ))}
           </div>
           
       </div>
  )
}

export default Blog