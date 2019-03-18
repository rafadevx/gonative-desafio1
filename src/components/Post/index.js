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
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  author: {
    color: '#bdc3c7',
    marginBottom: 20,
  },
});
