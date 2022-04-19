// Importing Child Components Search, CardList
import CardList from "../../components/card-list/card-list.component";
import Search from "../../components/search/search.component";

// App Styles
import "./App.css";

class App extends React{
  constructor(){
    super()
    this.state={
      users :[]
    }
  }

  render(){
    return(
      <div className="App">
        <h1> Monsters Rollodex </h1>
        <Search/>
        <CardList monster={this.state.users} />
      </div>
    )
  }
}

export default App
