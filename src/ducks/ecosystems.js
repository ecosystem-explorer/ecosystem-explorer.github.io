const INITIALIZE_TOPIC = 'INITIALIZE_TOPIC'
const ADD_TOPIC_SUCCESS = 'ADD_TOPIC_SUCCESS'
const ADD_TOPIC_ERROR = 'ADD_TOPIC_ERROR'
const REMOVE_TOPIC = 'REMOVE_TOPIC'
const LOAD_MORE_REQUEST = 'LOAD_MORE_REQUEST'
const LOAD_MORE_SUCCESS = 'LOAD_MORE_SUCCESS'

const initializeTopic = (topic) => {
  return {
    type: INITIALIZE_TOPIC,
    topic: topic
  }
}

const addTopicSuccess = (topic, data, page) => {
  return {
    type: ADD_TOPIC_SUCCESS,
    topic,
    data,
    page
  }
}

const addTopicError = (topic, error) => {
  return {
    type: ADD_TOPIC_ERROR,
    topic,
    error
  }
}

export const removeTopic = (topic) => {
  return {
    type: REMOVE_TOPIC,
    topic
  }
}

export const addTopic = (topic) => {
  return (dispatch, getState) => {
    dispatch(initializeTopic(topic))
    const state = getState()
    const ecosystem = state.ecosystems.ecosystems.find((e) => e.topic === topic)
    const page = ecosystem.page + 1
    const url = `https://api.github.com/search/repositories?q=topic:${topic}&page=${page}&per_page=25`
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(addTopicSuccess(topic, json, page)))
      .catch(err => dispatch(addTopicError(topic, err)))
  }
}

const loadMoreRequest = (topic) => {
  return {
    type: LOAD_MORE_REQUEST,
    topic
  } 
}

const loadMoreSuccess = (topic, data, page) => {
  return {
    type: LOAD_MORE_SUCCESS,
    topic,
    data: data.items,
    page
  } 
}

// TODO: use this?!?
const loadRepositories = (dispatch, getState, topic) => {
  const state = getState()
  const ecosystem = state.ecosystems.ecosystems.find((e) => e.topic === topic)
  const page = ecosystem.page + 1
  const url = `https://api.github.com/search/repositories?q=topic:${topic}&page=${page}&per_page=25`
  return fetch(url)
    .then(response => response.json())
}

export const loadMore = (topic) => {
  return (dispatch, getState) => {
    dispatch(loadMoreRequest(topic))
    const state = getState()
    const ecosystem = state.ecosystems.ecosystems.find((e) => e.topic === topic)
    const page = ecosystem.page + 1
    const url = `https://api.github.com/search/repositories?q=topic:${topic}&page=${page}&per_page=25`
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadMoreSuccess(topic, json, page)))
  }
}

const defaultState = {
  ecosystems: []
}

const ecosystemReducer = (state=defaultState, action) => {
  let topicIndex, newTopic
  switch (action.type) {

    case INITIALIZE_TOPIC:
      return {
        ...state,
        ecosystems: [
          ...state.ecosystems,
          {
            topic: action.topic,
            isLoading: true,
            isLoadingMore: false,
            data: {items: []},
            page: 0
          }
        ]
      }

    case ADD_TOPIC_SUCCESS:
      topicIndex = state.ecosystems.findIndex((e) => e.topic === action.topic)
      newTopic = {
        topic: action.topic,
        data: action.data,
        isLoading: false,
        isLoadingMore: false,
        page: action.page
      }
      return {
        ...state,
        ecosystems: [...state.ecosystems.slice(0, topicIndex), newTopic, ...state.ecosystems.slice(topicIndex + 1)]
      }

    case REMOVE_TOPIC:
      const removeTopicIndex = state.ecosystems.findIndex((e) => e.topic === action.topic)
      return {
        ...state,
        ecosystems: [...state.ecosystems.slice(0, removeTopicIndex), ...state.ecosystems.slice(removeTopicIndex + 1)]
      }

    case LOAD_MORE_REQUEST:
      topicIndex = state.ecosystems.findIndex((e) => e.topic === action.topic)
      newTopic = {
        ...state.ecosystems[topicIndex],
        isLoadingMore: true
      }
      return {
        ...state,
        ecosystems: [...state.ecosystems.slice(0, topicIndex), newTopic, ...state.ecosystems.slice(topicIndex + 1)]
      }

    case LOAD_MORE_SUCCESS:
      topicIndex = state.ecosystems.findIndex((e) => e.topic === action.topic)
      newTopic = {
        ...state.ecosystems[topicIndex],
        isLoadingMore: false,
        page: action.page,
        data: {...state.ecosystems[topicIndex].data, items: [...state.ecosystems[topicIndex].data.items, ...action.data]}
      }
      return {
        ...state,
        ecosystems: [...state.ecosystems.slice(0, topicIndex), newTopic, ...state.ecosystems.slice(topicIndex + 1)]
      }
      
      
    default:
      return state;
  }
}

export default ecosystemReducer;
