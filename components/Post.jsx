import Link from "next/link";

const Post = ({ post, key }) => {
  return (
    <li key={key}>
      <span>{post.id}：</span>
      <Link href={`/blog/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-400 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </li>
  );
};

export default Post;
