// // @flow strict
// import Image from 'next/image';
// import Link from 'next/link';

// function BlogCard({ blog }) {
//   const linkUrl = blog.link || `/blog/${blog.id}`;

//   return (
//     <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
//       <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
//         <Image
//           src={blog.image}
//           height={1080}
//           width={1920}
//           alt=""
//           className='h-full w-full group-hover:scale-110 transition-all duration-300'
//         />
//       </div>
//       <div className="p-2 sm:p-3 flex flex-col">
//         <Link href={linkUrl} target={blog.link ? "_blank" : "_self"} rel={blog.link ? "noopener noreferrer" : ""}>
//           <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
//             {blog.name}
//           </p>
//         </Link>
//         <p className='mb-2 text-sm text-[#16f2b3]'>
//           {blog.date}
//         </p>
//         <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
//           {blog.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

// @flow strict
import Image from 'next/image';
import Link from 'next/link';

function BlogCard({ blog }) {
  const linkUrl = blog.link || `/blog/${blog.id}`;

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog.image}
          alt={blog.name}
          layout="fill"
          objectFit="cover"
          className='group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <Link href={linkUrl} target={blog.link ? "_blank" : "_self"} rel={blog.link ? "noopener noreferrer" : ""}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog.name}
          </p>
        </Link>
        <p className='mb-2 text-sm text-[#16f2b3]'>
          {blog.date}
        </p>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;