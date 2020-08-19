import React from 'react';
import { Link, Redirect } from 'react-router-dom'


class LeftNav extends React.Component {
  constructor(props) {
    super(props)
    this.currentUser = this.props.currentUser
    this.toggleLeftNav = this.toggleLeftNav.bind(this)
    this.highlight = this.highlight.bind(this)
    this.highlighted = 0;
    this.addContent = this.addContent.bind(this)
    this.leftNavState = false;
    if (Object.values(this.props.currentUser).length > 0) {
      this.userName = this.props.currentUser[this.props.sessionId].email 
    } else {
      this.userName = "N/A"
    }
    this.userLogoDropDown = this.userLogoDropDown.bind(this);
    this.logout = this.props.logout.bind(this);
  }
  
  componentDidMount() {
    let leftNav = document.getElementById("leftNav")
    if (this.leftNavState) { 
      leftNav.style.height = `${window.screen.availHeight}px`
      leftNav.style.width = `${(window.screen.availWidth) * 0.17}px`
    }
  }
  
  // componentWillUpdate(nP, nS) {
  //   this.userOptions = false;
  //   if (!nP.currentUser[nP.sessionId]) {
  //     this.userName = 'N/A'
  //   } else {
  //     this.userName = nP.currentUser[nP.sessionId].email
  //   }
  // }

  toggleLeftNav(e) {
    e.preventDefault();
    let leftNavWrapper = document.getElementById("leftNav-wrapper")
    let leftNav = document.getElementById("leftNav")
    let side_toggle = document.getElementsByClassName("leftNav-dock")[0]
    let articles = {style: {marginLeft:""}};
    
    if (e.target.className === "user-logo-small" || e.target.className === "button") return

    if (document.getElementsByClassName('article-index').length > 0) {
     articles = document.getElementsByClassName('article-index-wrapper')[0]
    }

    if (leftNavWrapper.style.width === "269px") {
      this.leftNavState = false;
      leftNavWrapper.style.width = '0px'
      leftNav.style.display = 'none'
      side_toggle.style.width = "49px"
      articles.style.margin = "0 50px 0 50px"
    } else {
      this.leftNavState = true;
      leftNav.style.display = 'flex'
      leftNavWrapper.style.width = '269px'
      articles.style.margin = "0 50px 0 320px"
    }
  }

  addContent() {
    console.log("you are awesome")
    return <Redirect to='/' />
  }

  userLogoDropDown(e) {
    e.preventDefault();
    let dropdown = document.getElementById('user-dropdown')
    console.log(dropdown.className)
    if (!this.userOptions) {
      dropdown.className = 'user-menu';
      this.userOptions = true;
    } else {
      dropdown.className = 'user-dropdown-hidden';
      this.userOptions = false;
    }
  }

  highlight(e) {
    e.preventDefault();
    document.addEventListener("mouseout", () => {
      for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.background = 'transparent'
      }
    })
    let navItem = e.currentTarget;
    let navItems = document.getElementsByClassName('sidenav-item')
    navItem.style.background = '#e6e6e6'
    this.highlighted += 1;
  }
  
  render() {
    const active = () => (
    <div id='leftNav-container'>
      <div className='leftNav-dock' onClick={this.toggleLeftNav}>
        <Link to='/'><img id='leftNav-logo' src={window.feedlyLogo} /></Link>
        <div className='toggle-leftNav'>
            <button id='button' onClick={this.userLogoDropDown}>+</button>
        </div> 
        <div id='user-options-menu'>
            <label className='user-logo-small' onClick={this.userLogoDropDown}>{this.userName[0]}</label>
        </div>
      </div>
      <div className="leftNav-wrapper" id='leftNav-wrapper'>
        <div id='leftNav'>
          <ul id='side-nav'>  
            <li className='sidenav-item' onMouseOver={this.highlight}><img className='leftNav-icon' src={window.bookmark} /><Link to='/home'>today</Link></li>
            <li className='sidenav-item' onMouseOver={this.highlight}><img className='leftNav-icon' src={window.bookmark} /><Link to='/home'>read later</Link></li>
            <li className='sidenav-item' onMouseOver={this.highlight}><img className='leftNav-icon' src={window.all} /><Link to='/home'>train leo</Link></li>
            <li className='sidenav-item' onMouseOver={this.highlight}><img className='leftNav-icon' src={window.bookmark} /><Link to='/pheed/1'>pheeds</Link></li>
            <li className='sidenav-item' onMouseOver={this.highlight}><img className='leftNav-icon' src={window.bookmark} /><Link to='/articles'>finance</Link></li>
          </ul>
          <div className='add-content'>
            <button onClick={this.addContent}>Create Pheed</button>
          </div>
        </div>
      </div>
      <div id='user-dropdown' className='user-dropdown-hidden'>
        <div id='user-title'>
          <div className='user-logo-big'>{this.userName[0]}</div>
          <div className='user-info'>
            <div>{this.userName}</div>
            <div>free</div>
          </div>
        </div>
        <ul>
          <li>settings</li>
          <li>organize sources </li>
          <li>mobile apps</li>
          <li>browser add-ons</li>
          <li>support</li>
          <li>privacy</li>
          <li>terms and policy</li>
          <li onClick={this.logout}>logout</li>
        </ul>
        <div className='arrow-left'></div>
      </div>
    </div>
    )
    const inactive = () => (
      <div className='inactive-leftnav'></div>
    )
    // return this.userName === 'N/A' ? inactive() : active()
    return Object.keys(this.props.currentUser).length > 0 ? active() : inactive()
  }
}

export default LeftNav;