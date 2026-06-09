import { useEffect } from 'react'

export default function useSEO(title: string, description: string) {
  useEffect(() => {
    // Update Document Title
    const prevTitle = document.title
    document.title = `${title} | Naxen Exim India`

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]')
    let prevDescription = ''
    
    if (metaDescription) {
      prevDescription = metaDescription.getAttribute('content') || ''
      metaDescription.setAttribute('content', description)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      metaDescription.setAttribute('content', description)
      document.head.appendChild(metaDescription)
    }

    // Restore original meta tags on unmount (to avoid bleeding values across page navigations)
    return () => {
      document.title = prevTitle
      if (metaDescription) {
        if (prevDescription) {
          metaDescription.setAttribute('content', prevDescription)
        } else {
          metaDescription.remove()
        }
      }
    }
  }, [title, description])
}
