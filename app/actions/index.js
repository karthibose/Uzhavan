const GET_FEEDS = 'feeds/get_feeds';
const FEEDS_API = 'https://jsonplaceholder.typicode.com/posts';

function fetchAPI(API_NAME, params) {
  switch(API_NAME) {
    case GET_FEEDS: return fetch(FEEDS_API, {method:'GET',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }});
  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json();
}

function startLoading() {
  return { type: 'START_LOADING', payload: { status: true}}
}

function stopLoading() {
  return { type: 'STOP_LOADING', payload: { status: false} }
}

function setFeeds(data) {
  return { type: 'SET_FEEDS', payload: data }
}

function errOnFetch(data) {
  return { type: 'AJAX_ERROR', payload: data }
}

export function getFeeds() {
 return dispatch => {
   dispatch(startLoading());
   fetchAPI(GET_FEEDS, null)
   .then(parseJSON)
   .then((data)=>{
      dispatch(setFeeds(data));
      dispatch(stopLoading());
   }).catch(function(error) {
      errOnFetch(data);
   });
 }
}


