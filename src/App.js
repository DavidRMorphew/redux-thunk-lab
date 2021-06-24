import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'
class App extends Component {   

  componentDidMount(){
    this.props.fetchCats()
  }

  loadingOrCats = () => (
    (this.props.loading) ? <div>Loading...</div> : <CatList catPics={this.props.catPics} />
  )

  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.loadingOrCats()}
      </div>
    );
  }
}



// Alternative:
// const mapStateToProps = state => {
//   return {
//     catPics: state.cats,
//     loading: state.loading
//   }
// }

export default connect(({cats, loading})=>({catPics: cats, loading}), {fetchCats})(App)

