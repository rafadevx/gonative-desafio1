import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Post = ({ title, author, content }) => (
  <View style={styles.post}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text>{content}</Text>
  </View>
);

export default Post;

const styles = StyleSheet.create({
  post: {
    display: 'flex',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#FFF',
    width: '80%',
    padding: 20,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  author: {
    color: '#bdc3c7',
    marginBottom: 20,
  },
});
