import ThemeAndVideosContext from '../../context/ThemeAndVideoContext'
import HomeVideoItem from '../HomeVideoItem'

import {
  VideoItemList,
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, OnRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    OnRetry()
  }

  return (
    <ThemeAndVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideoItemList>
            {homeVideos.map(eachVideo => (
              <HomeVideoItem video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoItemList>
        ) : (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search result found
            </NoVideosHeading>
            <NoVideosNote noteColor={noteColor}>
              Try different keywords or remove search filter
            </NoVideosNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeAndVideosContext.Consumer>
  )
}

export default HomeVideos
