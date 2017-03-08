var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var history = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers');


var App = React.createClass({
  getInitialState: function(){
    return {
      fishes : {},
      order : {},
    }
  },
  addFish: function(fish){
    var timeStamp = (new Date()).getTime();
    this.state.fishes['fish-' + timeStamp] = fish;
    this.setState({fishes:  this.state.fishes });
  },
  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' year="2017"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
});

/*!
Add fish form
*/

 var AddFishForm = React.createClass({
  createFish: function(e) {
    e.preventDefault()
    var fish = {
      fishName: this.refs.name.value,
      fishPrice: this.refs.price.value,
      status: this.refs.status.value,
      description: this.refs.desc.value,
      image: this.refs.image.value,
    }
    this.props.addFish(fish);
    this.refs.fishForm.reset();
  },
  render: function() {
    return (
      <form className="fish-edit" ref="fishForm" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name"/>
        <input type="text" ref="price" placeholder="Fish price"/>
        <select ref="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type='text' ref="desc" placeholder="Description"></textarea>
        <input type="text" ref="image" placeholder="URL to image"/>
        <button type="submit">+ ADD ITEM</button>
      </form>
    )
  }
});


var Header = React.createClass({
  render: function() {
    console.log(this.props)
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day</h1>
        <h3 className="tagline"><span>{this.props.year}</span></h3>
      </header>
    );
  }
})


var Order = React.createClass({
  render: function() {
    return (
      <h1>This is just a test header</h1>
    );
  }
})

var Inventory = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Inventory</h1>
        {/* <AddFishForm addFish={this.addFish}/> */}
        <AddFishForm {...this.props}/>
      </div>
    )
  }
})

var StorePicker = React.createClass({
  mixins: [history],
  goToStore: function(e) {
    e.preventDefault();
    var storeId = this.refs.storeId.value;
    console.log(storeId)
    this.history.pushState(null, '/store/' + storeId);
  },

  render: function(){
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="Submit" />
      </form>
    )
  }
});

/* not found */

var NotFound = React.createClass({
  render: function(){
    return (
      <h1>Sorry this page does not exist...</h1>
    )
  }
});

/*!
Routes
*/

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={ StorePicker } />
    <Route path="/store/:storeId" component={ App } />
    <Route path="*" component={ NotFound } />
  </Router>
)


ReactDOM.render(routes, document.querySelector('#main'));
