import { useRef, useEffect } from 'react'

export default function useDocumentTitle (title: string, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = title + ' - MetaSync'
  }, [title])

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current
    }
  }, [prevailOnUnmount])
}
