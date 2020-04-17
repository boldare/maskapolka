import React, { useEffect } from "react"

import { SEO } from "@components"

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/#articles")
  }, [])
  return null
}

export default NotFoundPage
