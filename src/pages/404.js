import { useEffect } from "react"

import { navigate } from "gatsby"

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/#articles")
  }, [])
  return null
}

export default NotFoundPage
