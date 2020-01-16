import React, {useState} from 'react';
import {connect} from 'react-redux';
import {inc, dec, toggleAuth, postData} from './actions';
import Button from './components/button';

const mapStateToProps = state => ({
  counter: state.counter,
  auth: state.auth,
  posts: state.posts
});
const mapDispatchToProps = dispatch => ({dispatch: dispatch});

const App = (props) => {

  const [post, setPost] = useState([])

  const counter = props.counter;
  const auth = props.auth;
  const dispatch = props.dispatch

  const handleTitle = (event) => {
    setPost({...post, title: event.target.value});
  }

  const handleBody = (event) => {
    setPost({...post, body: event.target.value});
  }

  const handleUserId = (event) => {
    setPost({...post, userId: event.target.value});
  }

  const addPost = (e) => {
    e.preventDefault();
    dispatch(postData(post));
  }

  return (
    <div className="App">
      <h1>Redux without Hooks</h1>
      <p>
        Increase and decrease counter by <strong>100</strong>
      </p>
      <button onClick={() => dispatch(inc(100))}>+</button>
      <button onClick={() => dispatch(dec(100))}>-</button>
      <Button onClick={() => dispatch(toggleAuth())}>
        Authenticated: <strong>{auth.loggedIn ? "Yes" : "No"}</strong>
      </Button>
      <h3>Counter: {counter}</h3>
      <br />
      <br />
      <div>
        <h4>Add Post</h4>
        <form>
          <div>
            <input
              type="text"
              placeholder="Title"
              required
              onChange={handleTitle}
            />
          </div>
          <div>
            <textarea placeholder="Body" required onChange={handleBody} />
          </div>
          <div>
            <input
              type="number"
              placeholder="User Id"
              required
              onChange={handleUserId}
            />
          </div>
          <br />

          <button onClick={addPost}>Add Post</button>
        </form>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
