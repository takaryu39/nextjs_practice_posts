const apiUrl = "https://jsonplaceholder.typicode.com/posts";
export const getAllPosts = async () => {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
};

export const getPostById = async (id) => {
  const posts = await getAllPosts();
  const findById = posts.find((post) => post.id.toString() === id);
  return findById;
};
