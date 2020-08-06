import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

const menu = {
  'profile': Profile,
  'photo': Photos,
  'cocktail': Cocktails,
  'pokemon': Pokemon
}

class MainBox extends React.Component {
  state = {
    selectedMenu: Profile,
    activeId: 'profile'
  }

  handleSelectMenu = (e) => {
    this.setState({
      selectedMenu: menu[e.target.id],
      activeId: e.target.id
    })
  }

  render() {
    const detailsToDisplay = <div><this.state.selectedMenu /></div>

    return (
      <div>
        <MenuBar handleSelectMenu={this.handleSelectMenu} id={this.state.activeId}/>
        {detailsToDisplay}
      </div>
    )
  }
}

export default MainBox
