import './config/ReactotronConfig';
import React, { Component } from 'react';
import {
  StyleSheet, View, ScrollView, Text,
} from 'react-native';
import Post from './components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#bdc3c7',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 20,
    height: 76,
  },
  appTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: 'Joao da Silva',
        title: 'Aprendendo React Native',
        content:
          'Lorem ipsum netus facilisis ad congue vel primis, blandit proin lorem quisque aenean iaculis proin, curae habitasse fusce tortor tincidunt nulla. fames nam erat convallis rutrum suscipit purus.',
      },
      {
        id: 2,
        author: 'Maria Oliveira',
        title: 'Aprendendo React Native',
        content:
          'Lorem ipsum netus facilisis ad congue vel primis, blandit proin lorem quisque aenean iaculis proin, curae habitasse fusce tortor tincidunt nulla. fames nam erat convallis rutrum suscipit purus.',
      },
      {
        id: 3,
        author: 'Diego Fernandes',
        title: 'Aprendendo React Native',
        content:
          'Lorem ipsum netus facilisis ad congue vel primis, blandit proin lorem quisque aenean iaculis proin, curae habitasse fusce tortor tincidunt nulla. fames nam erat convallis rutrum suscipit purus.',
      },
      {
        id: 4,
        author: 'Diego Fernandes',
        title: 'Aprendendo React Native',
        content:
          'Lorem ipsum netus facilisis ad congue vel primis, blandit proin lorem quisque aenean iaculis proin, curae habitasse fusce tortor tincidunt nulla. fames nam erat convallis rutrum suscipit purus sodales vulputate hac nisi, porttitor enim nibh nisl vehicula dictum habitant curabitur fames.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appTitle}>GoNative App</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} title={post.title} author={post.author} content={post.content} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
