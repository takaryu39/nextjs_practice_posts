import Link from "next/link";
import Layout from "../../components/Layout";
import Post from "../../components/Post";
import { getAllPosts, getPostById } from "../../lib/post";

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const postData = await getPostById(id);
  console.log(postData);

  return {
    props: {
      data: postData,
    },
  };
}

const SinglePost = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title="Blog">
      <div>
        <p>ID：{data.id}</p>
        <p className="mt-4 font-bold">{data.title}</p>
        <p className="mt-4">{data.body}</p>
      </div>
      <Link href={`/blog`}>
        <div className="flex items-center cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
            ></path>
          </svg>
          <span>Back to Archive Page</span>
        </div>
      </Link>
    </Layout>
  );
};

export default SinglePost;
