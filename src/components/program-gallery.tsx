import * as React from "react"
import { createPortal } from "react-dom"
import { ChevronLeft, ChevronRight, Images, Maximize2, X } from "lucide-react"

import { cn } from "@/lib/utils"
import type { GalleryPhoto } from "@/lib/contants/program-data"

type ProgramGalleryProps = {
  photos: GalleryPhoto[]
  programTitle: string
}

// Stable "random" aspect ratios keep the masonry layout organic without
// reshuffling every time the component renders.
const masonryAspects = [
  "aspect-[4/5]",
  "aspect-[16/11]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[3/2]",
  "aspect-[5/6]",
  "aspect-[4/3]",
  "aspect-[2/3]",
  "aspect-[5/4]",
  "aspect-[1/1]",
  "aspect-[16/10]",
  "aspect-[4/5]",
]

type GalleryTileProps = {
  photo: GalleryPhoto
  index: number
  aspect: string
  featured?: boolean
  onOpen: () => void
}

function GalleryTile({
  photo,
  index,
  aspect,
  featured = false,
  onOpen,
}: GalleryTileProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View photo ${index + 1}: ${photo.alt}`}
      className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-muted text-left shadow-sm transition-shadow duration-300 outline-none hover:shadow-lg focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "w-full object-cover transition duration-700 ease-out group-hover:scale-105",
          aspect
        )}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Caption */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex items-end justify-between gap-3",
          featured ? "p-5 md:p-7" : "p-3 md:p-4"
        )}
      >
        <p
          className={cn(
            "min-w-0 leading-5 font-medium text-white",
            featured
              ? "text-base md:text-xl"
              : "line-clamp-2 text-xs md:text-sm"
          )}
        >
          {photo.alt}
        </p>

        <span className="hidden shrink-0 rounded-full bg-white/15 p-2 text-white backdrop-blur transition-colors duration-300 group-hover:bg-white/25 sm:block">
          <Maximize2 className="h-4 w-4" />
        </span>
      </div>
    </button>
  )
}

function ProgramGallery({ photos, programTitle }: ProgramGalleryProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const closeButtonRef = React.useRef<HTMLButtonElement>(null)
  const thumbnailsRef = React.useRef<HTMLDivElement>(null)

  const close = React.useCallback(() => setActiveIndex(null), [])

  const showPrevious = React.useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null
      return (current - 1 + photos.length) % photos.length
    })
  }, [photos.length])

  const showNext = React.useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null
      return (current + 1) % photos.length
    })
  }, [photos.length])

  // Keyboard navigation + scroll lock while the lightbox is open
  React.useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        showPrevious()
      }

      if (event.key === "ArrowRight") {
        event.preventDefault()
        showNext()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex, close, showPrevious, showNext])

  // Keep the active thumbnail in view when navigating with many photos
  React.useEffect(() => {
    if (activeIndex === null) return

    const activeThumbnail = thumbnailsRef.current?.querySelector<HTMLElement>(
      `[data-thumbnail-index="${activeIndex}"]`
    )

    activeThumbnail?.scrollIntoView({ block: "nearest", inline: "center" })
  }, [activeIndex])

  if (photos.length === 0) return null

  const activePhoto = activeIndex === null ? null : photos[activeIndex]

  return (
    <div>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="font-semibold tracking-wider text-secondary uppercase">
            Gallery
          </p>

          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Moments From The <span className="text-primary">Field</span>
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Glimpses of our work, volunteers and community members through the{" "}
            {programTitle} program.
          </p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
          <Images className="h-4 w-4 text-secondary" />
          {photos.length} Photos
        </div>
      </div>

      {/* =====================================================
          PHOTO GRID
      ===================================================== */}

      <div className="mt-8">
        {/* Featured photo */}
        <GalleryTile
          photo={photos[0]}
          index={0}
          aspect="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
          featured
          onOpen={() => setActiveIndex(0)}
        />

        {/* Masonry grid with varied image sizes */}
        {photos.length > 1 && (
          <div className="mt-3 columns-2 gap-3 sm:mt-4 sm:gap-4 lg:columns-3">
            {photos.slice(1).map((photo, position) => {
              const index = position + 1

              return (
                <div
                  key={`${index}-${photo.src}`}
                  className="mb-3 break-inside-avoid sm:mb-4"
                >
                  <GalleryTile
                    photo={photo}
                    index={index}
                    aspect={masonryAspects[position % masonryAspects.length]}
                    onOpen={() => setActiveIndex(index)}
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {activePhoto &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${programTitle} photo gallery`}
            onClick={close}
            className="fixed inset-0 z-[100] flex animate-in flex-col bg-black/90 backdrop-blur-sm duration-200 fade-in"
          >
            <div className="flex h-full flex-col">
              {/* Top bar */}
              <div
                onClick={(event) => event.stopPropagation()}
                className="flex items-center justify-between gap-4 px-4 py-4 text-white sm:px-6"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    {programTitle}
                  </p>

                  <p
                    aria-live="polite"
                    className="mt-0.5 text-xs text-white/60"
                  >
                    Photo {(activeIndex ?? 0) + 1} of {photos.length}
                  </p>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  aria-label="Close gallery"
                  className="shrink-0 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Image */}
              <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    showPrevious()
                  }}
                  aria-label="Previous photo"
                  className="absolute left-1 z-10 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:left-5 sm:p-3"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <img
                  key={activePhoto.src}
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  onClick={(event) => event.stopPropagation()}
                  className="max-h-full max-w-full animate-in rounded-xl object-contain shadow-2xl duration-300 zoom-in-95 fade-in"
                />

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    showNext()
                  }}
                  aria-label="Next photo"
                  className="absolute right-1 z-10 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:right-5 sm:p-3"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Caption + thumbnails */}
              <div
                onClick={(event) => event.stopPropagation()}
                className="px-4 pt-4 pb-5 sm:px-6"
              >
                <p className="text-center text-sm text-white/85 sm:text-base">
                  {activePhoto.alt}
                </p>

                <div
                  ref={thumbnailsRef}
                  className="mt-4 hidden overflow-x-auto pb-1 sm:block"
                >
                  <div className="mx-auto flex w-max gap-2">
                    {photos.map((photo, index) => (
                      <button
                        key={`${index}-${photo.src}`}
                        type="button"
                        data-thumbnail-index={index}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show photo ${index + 1}: ${photo.alt}`}
                        aria-current={index === activeIndex}
                        className={cn(
                          "h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none",
                          index === activeIndex
                            ? "border-secondary opacity-100"
                            : "border-transparent opacity-50 hover:opacity-90"
                        )}
                      >
                        <img
                          src={photo.src}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}

export default ProgramGallery
