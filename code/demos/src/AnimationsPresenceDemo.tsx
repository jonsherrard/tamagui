import React from 'react'
import { AnimatePresence } from '@tamagui/animate-presence'
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons'

import { Button, Image, XStack, YStack, styled } from 'tamagui'

// @ts-ignore
import photo1 from '../../public/photo1.jpg'
// @ts-ignore
import photo2 from '../../public/photo2.jpg'
// @ts-ignore
import photo3 from '../../public/photo3.jpg'

export const images = [photo1, photo2, photo3].map((x) => x.src || x)

const GalleryItem = styled(YStack, {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
})

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

export function AnimationsPresenceDemo() {
  const [page, setPage] = React.useState(0)

  const imageIndex = wrap(0, images.length, page)
  const paginate = React.useCallback((newDirection: number) => {
    setPage((prevPage) => prevPage + newDirection)
  }, [])

  return (
    <XStack
      overflow="hidden"
      backgroundColor="#000"
      position="relative"
      height={300}
      width="100%"
      alignItems="center"
    >
      <AnimatePresence mode="wait" initial={false}>
        <GalleryItem
          key={page}
          animation="quick"
          x={0}
          opacity={1}
          enterStyle={{ x: page > imageIndex ? '100%' : '-100%', opacity: 0 }}
          exitStyle={{ x: page > imageIndex ? '-100%' : '100%', opacity: 0 }}
        >
          <Image source={{ uri: images[imageIndex], width: 820, height: 300 }} />
        </GalleryItem>
      </AnimatePresence>

      <Button
        accessibilityLabel="Carousel left"
        icon={ArrowLeft}
        size="$5"
        position="absolute"
        left="$4"
        circular
        elevate
        onPress={() => paginate(-1)}
        zIndex={100}
      />

      <Button
        accessibilityLabel="Carousel right"
        icon={ArrowRight}
        size="$5"
        position="absolute"
        right="$4"
        circular
        elevate
        onPress={() => paginate(1)}
        zIndex={100}
      />
    </XStack>
  )
}
