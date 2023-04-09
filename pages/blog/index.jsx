import Layout from "../../components/Layout";
import Post from "../../components/Post";
import { getAllPosts } from "../../lib/post";

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <div>Blog page</div>
      <ul>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;
