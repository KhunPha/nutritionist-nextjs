import { OurBlogItem } from '@/constants/menu'
import { formatDate } from '@/utils/date'
import { Bookmark, Heart } from 'lucide-react'

const BlogCard = ({ props } : { props : OurBlogItem }) => {
  return (
    <div className='p-5 flex gap-y-6 flex-col text-start bg-green-shades-95 border border-green-shades-90 rounded-lg justify-between'>
        <div className='space-y-4'>
            <img src={props.cover} alt="Cover" />

        <div>
            <p className='text-[16px] font-medium text-grey-shades-20'>{props.title}</p>
            <p className='text-[22px] font-semibold text-grey-shades-15'>{props.sub_title}</p>
        </div>

        <p className='text-[16px] font-medium text-grey-shades-30'>{props.details}</p>
        </div>

        <div className='flex justify-between items-center p-2 bg-green-shades-97 border border-grey-shades-90 rounded-[10px]'>
            <div className='flex gap-2 items-center'>
                <img src={props.user?.profile_url} alt="Profile" className='w-[50px] h-[50px]'/>

                <div>
                    <p className='text-[18px] font-semibold text-dark-green-shades-15'>{props.user?.name}</p>
                    <p className='text-[16px] font-medium text-grey-shades-35'>{formatDate(props.post_date)}</p>
                </div>
            </div>



            <div className='flex items-center gap-2'>
                <button className='p-3 bg-green-shades-95 border border-green-shades-90 rounded-md'>
                    <Heart size={20} className='text-grey-shades-30'/>
                </button>

                <button className='p-3 bg-green-shades-95 border border-green-shades-90 rounded-md'>
                    <Bookmark size={20} className='text-grey-shades-30'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default BlogCard