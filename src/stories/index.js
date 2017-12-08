import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import repo from './repo.json'
import repos from './repos.json'

import Ecosystem from './../components/Ecosystem'
import Repository from './../components/Repository'
import RepositoryList from './../components/RepositoryList'
import Title from './../components/Ecosystem/Title'


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
  .add('Repository List', () => <RepositoryList repositories={repos.items} />)
  .add('Title', () => <Title topic="react" reposCount={25000} />)
  .add('Ecosystem', () => <Ecosystem topic="react" data={repos} />)
