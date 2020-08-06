import React from 'react'

const MenuBar = (props) => {

  return (
    <div className="ui four item menu">
      <a className={'item ' + (props.id==='profile' ? 'active' : null)} id="profile" onClick={props.handleSelectMenu}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={'item ' + (props.id==='photo' ? 'active' : null)} id="photo" onClick={props.handleSelectMenu}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={'item ' + (props.id==='cocktail' ? 'active' : null)} id="cocktail" onClick={props.handleSelectMenu}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={'item ' + (props.id==='pokemon' ? 'active' : null)} id="pokemon" onClick={props.handleSelectMenu}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
