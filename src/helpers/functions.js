export const openInNewTab = (url) => {
  const newWindow = window.open(url)
  if (newWindow) newWindow.opener = null
}

export const openWhatsapp = () => {
  const newWindow = window.open('https://api.whatsapp.com/send/?phone=%2B59176808720&text&app_absent=0whatsapp%20API', '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

