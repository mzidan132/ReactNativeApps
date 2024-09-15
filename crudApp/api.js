const API_URL = 'https://0553fbfec2b55df4c14713074a0cbca5.serveo.net/api/posts';
//ssh -R 80:localhost:8000 serveo.net
export const getPosts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPost = async (title) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  return await response.json();
};

export const updatePost = async (id, title) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    throw new Error('Failed to update post');
  }
  return await response.json();
};

export const deletePost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
  return await response.json();
};
