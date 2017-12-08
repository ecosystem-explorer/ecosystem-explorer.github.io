const INITIALIZE_TOPIC = 'INITIALIZE_TOPIC'
const ADD_TOPIC_SUCCESS = 'ADD_TOPIC_SUCCESS'
const ADD_TOPIC_ERROR = 'ADD_TOPIC_ERROR'
const REMOVE_TOPIC = 'REMOVE_TOPIC'

const initializeTopic = (topic) => {
  return {
    type: INITIALIZE_TOPIC,
    topic: topic
  }
}

const addTopicSuccess = (topic, data) => {
  return {
    type: ADD_TOPIC_SUCCESS,
    topic,
    data
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
  return dispatch => {
    dispatch(initializeTopic(topic))
    const url = `https://api.github.com/search/repositories?q=topic:${topic}`
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(addTopicSuccess(topic, json)))
      .catch(err => dispatch(addTopicError(topic, err)))
  }
}

const defaultState = {
  ecosystems: []
}

const ecosystemReducer = (state=defaultState, action) => {
  switch (action.type) {

    case INITIALIZE_TOPIC:
      return {
        ...state,
        ecosystems: [
          ...state.ecosystems,
          {
            topic: action.topic,
            isLoading: true,
            data: {items: []}
          }
        ]
      }

    case ADD_TOPIC_SUCCESS:
      const topicIndex = state.ecosystems.findIndex((e) => e.topic === action.topic)
      const topic = {
        topic: action.topic,
        data: action.data,
        isLoading: false
      }
      return {
        ...state,
        ecosystems: [...state.ecosystems.slice(0, topicIndex), topic, ...state.ecosystems.slice(topicIndex + 1)]
      }

    case REMOVE_TOPIC:
      const removeTopicIndex = state.ecosystems.findIndex((e) => e.topic === action.topic)
      return {
        ...state,
        ecosystems: [...state.ecosystems.slice(0, removeTopicIndex), ...state.ecosystems.slice(removeTopicIndex + 1)]
      }
      

    default:
      return state;
  }
}

export default ecosystemReducer;
