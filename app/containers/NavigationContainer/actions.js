/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUSET_TOPICS_FAILED,
  SELECT_TOPIC,
} from './constants';

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestTopicsSucceeded(topics) {
  return {
    type: REQUEST_TOPICS_SUCCEEDED,
    topics,
  };
}

export function requestTopicsFailed(message) {
  return {
    type: REQUSET_TOPICS_FAILED,
    message,
  };
}

export function selectTopic(topic){
  return {
    type: SELECT_TOPIC,
    topic,
  };
}