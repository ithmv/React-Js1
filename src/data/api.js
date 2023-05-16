export async function getComments() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  return data;
}

export async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}
