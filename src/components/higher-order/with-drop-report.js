import { withProps } from 'recompose'

export const withDropReport = withProps(() => ({
  dropReport: () => {
    const email = 'me@normansteger.com'
    const subject = 'Missing content on normansteger.com'
    const emailBody = `Hi there, \n I just encountered a part of missing content on your homepage at he URL: ${
      window.location.href
    } \n Please have a look at it as soon as you can. Thank you!`
    document.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody
  },
}))
