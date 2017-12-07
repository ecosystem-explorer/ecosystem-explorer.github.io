import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import repo from './repo.json'
import repos from './repos.json'

import Repository from './../components/Repository'

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
  // .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  // .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


storiesOf('Ecosystem', module)
  .add('Repository', () => {
    return (
      <Repository
        name={repo.name}
        fullName={repo.full_name}
        description={repo.description}
        url={repo.html_url}
        stars={repo.stargazers_count}
      />
    )
    }
  )
