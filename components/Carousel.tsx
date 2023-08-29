import Image from 'next/image'
import { useRouter } from 'next/router'
import useKeypress from 'react-use-keypress'
import type { ImageProps } from '../utils/types'
import { useLastViewedPhoto } from '../utils/useLastViewedPhoto'
import SharedModal from './SharedModal'
import app from '../app.config'

export default function Carousel({
  index,
  currentPhoto,
}: {
  index: number
  currentPhoto: ImageProps
}) {
  const router = useRouter()
  const [, setLastViewedPhoto] = useLastViewedPhoto()

  function closeModal() {
    setLastViewedPhoto(currentPhoto.id)
    router.push('/', undefined, { shallow: true })
  }

  function changePhotoId(newVal: number) {
    return newVal
  }

  useKeypress('Escape', () => {
    closeModal()
  })

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <button
        className="absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl"
        onClick={closeModal}
      >
        <Image
          src={currentPhoto.blurDataUrl}
          className="pointer-events-none h-full w-full"
          alt={`${app.title} Images`}
          fill
          priority={true}
        />
      </button>
      <SharedModal
        index={index}
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={closeModal}
        navigation={false}
      />
    </div>
  )
}
