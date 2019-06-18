import React from 'react'
import Jumbotron from '../components/Jumbotron';

function NoMatch() {
  return (
    <div className="container">
      <Jumbotron
        image="https://goodereader.com/blog/uploads/images/sad-librarian-1024x433.jpg"
        title="404"
        lead="Page Not Found"
      />
    </div>
  )
}

export default NoMatch;