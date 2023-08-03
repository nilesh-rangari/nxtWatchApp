import ThemeAndVideosContext from '../../context/ThemeAndVideoContext'

import {
  FailedView,
  FailedViewHeading,
  FailedViewImage,
  FailedViewNote,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }
  return (
    <ThemeAndVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailedView>
            <FailedViewImage src={failureImageUrl} alt="failure view" />
            <FailedViewHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailedViewHeading>
            <FailedViewNote noteColor={noteColor}>
              We are having some trouble to complete your request.
              <br /> Please try again later.
            </FailedViewNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailedView>
        )
      }}
    </ThemeAndVideosContext.Consumer>
  )
}

export default FailureView
