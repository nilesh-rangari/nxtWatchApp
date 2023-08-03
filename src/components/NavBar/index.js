import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavBarBg,
  NavLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactSection,
  ContactHeading,
  ContactIcons,
  ContactImage,
  ContactNote,
  NavSmContainer,
} from './styledComponents'

class NavBar extends Component {
  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickHome = () => {
          changeTab('Home')
        }

        const onClickTrending = () => {
          changeTab('Trending')
        }

        const onClickGaming = () => {
          changeTab('Gaming')
        }
        const onClickSaved = () => {
          changeTab('Saved')
        }

        return (
          <NavBarBg>
            <NavLgContainer bgColor={bgColor}>
              <NavOptions>
                <NavLink to="/">
                  <NavLinkContainer
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickHome}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/trending">
                  <NavLinkContainer
                    key="trending"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTrending}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/gaming">
                  <NavLinkContainer
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickGaming}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavLinkContainer
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickSaved}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Saved Videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavOptions>
              <ContactSection>
                <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>
                <ContactNote color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactSection>
            </NavLgContainer>
            <NavSmContainer bgColor={bgColor}>
              <NavLink to="/">
                <AiFillHome
                  size={30}
                  onClick={onClickHome}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/trending">
                <HiFire
                  size={30}
                  onClick={onClickTrending}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/Gaming">
                <SiYoutubegaming
                  size={30}
                  onClick={onClickGaming}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  onClick={onClickSaved}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
            </NavSmContainer>
          </NavBarBg>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems()}</>
  }
}

export default NavBar
