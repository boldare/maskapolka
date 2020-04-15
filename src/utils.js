import classNames from "classnames"

export const classnames = classNames

export const getYoutubeThumbnailUrl = url => {
  let videoId = url.split("v=")[1]
  const ampersandPosition = videoId.indexOf("&")
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition)
  }
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}
