import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import { Article } from "../models/article";
import axios from 'axios';
import { Button, Container, Header, Menu, Segment } from 'semantic-ui-react';

function App() {
  const [articles, setArticles] = useState<Article[] | undefined>([]);

  useEffect(() => {
    axios.get<Article[]>('http://localhost:5000/api/articles')
    .then(response => {
      setArticles(response.data);
    });

  }, []);

  return (
    <Fragment>
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        <Menu
          fixed= 'top'
          inverted
          pointing
          secondary
          size='large'
        >
          <Container>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item position='right'>
              <Button as='a' inverted>
                Log in
              </Button>
              <Button as='a' inverted primary style={{ marginLeft: '0.5em' }}>
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
        <Container text>
          <Header
            as='h1'
            content='Imagine-a-Company'
            inverted
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '3em',
            }}
          />
          <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{
              fontSize: '1.7em',
              fontWeight: 'normal',
              marginTop: '1.5em',
            }}
          />
        </Container>
      </Segment>
      
      <div>
        {articles?.map((article) => {
          return (
            <div key={article.id}>{article.title}</div>
          )
        })}
      </div>
    </Fragment>
  );
}

export default App;
