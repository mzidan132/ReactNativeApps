// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet } from 'react-native';
import { getPosts, createPost, updatePost, deletePost } from './api';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [postId, setPostId] = useState('');
  const [deleteId, setDeleteId] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      Alert.alert('Error', 'Failed to load posts');
    }
  };

  const handleCreatePost = async () => {
    try {
      const newPost = await createPost(title);
      setTitle('');
      console.log('Created Post:', newPost); // Log the created post
      loadPosts(); // Refresh the list
    } catch (error) {
      Alert.alert('Error', 'Failed to create post');
    }
  };

  const handleUpdatePost = async () => {
    try {
      await updatePost(postId, newTitle);
      setNewTitle('');
      setPostId('');
      loadPosts(); // Refresh the list
    } catch (error) {
      Alert.alert('Error', 'Failed to update post');
    }
  };

  const handleDeletePost = async () => {
    try {
      await deletePost(deleteId);
      setDeleteId('');
      loadPosts(); // Refresh the list
    } catch (error) {
      Alert.alert('Error', 'Failed to delete post');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Home</Text>
      
      <Text>Create a Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="POST" onPress={handleCreatePost} />
      
      <Text>Update a Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Post ID"
        value={postId} 
        onChangeText={setPostId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="New Title"
        value={newTitle}
        onChangeText={setNewTitle}
      />
      <Button title="UPDATE" onPress={handleUpdatePost} />
      
      <Text>Delete a Post</Text> 
      <TextInput
        style={styles.input}
        placeholder="Post ID to Delete"
        value={deleteId}
        onChangeText={setDeleteId}
        keyboardType="numeric"
      />
      <Button title="DELETE" onPress={handleDeletePost} />
      
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  post: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default App;
