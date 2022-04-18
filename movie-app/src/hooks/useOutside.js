import { useEffect, useState } from "react"
import { useModal } from "../components/ModalProvider"
import { useRef } from "react"

export const useOutside = initialVisible => {
  const {setVideoUrl} = useModal()

  const [isShow, setIsShow] = useState( initialVisible)
  const ref = useRef(null)

  const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
          setIsShow(false)
          setVideoUrl('')
      }
  }

  useEffect(() => {
      document.addEventListener('click', handleClickOutside,true)
      return() => {
          document.removeEventListener('click', handleClickOutside,true)
      }
  })
  return {ref, isShow, setIsShow}
}