import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import repo from './repo.json'
import repos from './repos.json'
import angularRepos from './angular-repos.json'

import Ecosystem from './../components/Ecosystem'
import Main from './../components/Main'
import Repository from './../components/Repository'
import RepositoryList from './../components/RepositoryList'
import Title from './../components/Ecosystem/Title'


const ecosystems = [
  {
    topic: 'react',
    isLoading: false,
    data: repos
  },
  {
    topic: 'angularjs',
    isLoading: false,
    data: angularRepos
  },
  {
    topic: 'vuejs',
    isLoading: true,
    data: repos
  }
]


storiesOf('Repo', module)
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
storiesOf('Ecosystem', module)
  .add('Title loading', () => <Title topic="react" isLoading={true} />)
  .add('Title loaded', () => <Title topic="react" reposCount={25000} isLoading={false} />)
  .add('Ecosystem loading', () => <Ecosystem topic="react" data={repos} isLoading={true} />)
  .add('Ecosystem loaded', () => <Ecosystem topic="react" data={repos} isLoading={false} />)
  .add('Ecosystem no repos', () => <Ecosystem topic="react" data={{total_count: 0, items: []}} isLoading={false} />)

storiesOf('Main', module)
  .add('Main', () => <Main ecosystems={ecosystems} />) 
