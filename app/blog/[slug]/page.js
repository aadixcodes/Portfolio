import { blogData } from "@/utils/data/blogData";
import Image from 'next/image';

function BlogDetails({params}) {
  const id = parseInt(params.slug);
  const blog = blogData.find(blog => blog.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }
 
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-4">{blog.date}</p>
      <Image 
        src={blog.image} 
        alt={blog.title} 
        width={800} 
        height={400} 
        className="mb-6"
      />
      <p className="text-lg leading-relaxed">{blog.description}</p>
    </div>
  );
};

export default BlogDetails;