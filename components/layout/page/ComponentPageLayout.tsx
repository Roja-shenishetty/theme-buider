"use client"

type Props = {
  title: string
  description: string
  image?: string
  video?: string
  animation?: React.ReactNode
  children: React.ReactNode
}

export default function ComponentPageLayout({
  title,
  description,
  image,
  video,
  animation,
  children,
}: Props) {
  return (
    <div className="layout space-y-10 md:space-y-12 xl:space-y-16">

      {/* 🔹 HEADER */}
<div className="
  page
  w-full max-w-[1500px] mx-auto
  px-4 sm:px-6 md:px-8 xl:px-12
  py-6 md:py-8 lg:py-10
">
  
  <div className="header xl:grid-cols-2 xl:items-center gap-6 md:gap-8 xl:gap-12">

    {/* LEFT */}
    <div className="
      header-text
      text-center xl:text-left
      items-center xl:items-start
      space-y-2
    ">
      
      <h1 className="
        title
        text-[28px]
        sm:text-[36px]
        md:text-[44px]
        xl:text-[56px]
      ">
        {title}
      </h1>

      <p className="description text-sm sm:text-base md:text-lg max-w-md xl:max-w-lg">
        {description}
      </p>

      <div className="pill-group justify-center xl:justify-start pt-2">
        <span className="pill">Resources</span>
        <span className="pill">UI</span>
        <span className="pill">+4</span>
      </div>

    </div>
          {/* RIGHT */}
          <div className="hero
            h-[240px]
            sm:h-[300px]
            md:h-[360px]
            xl:h-[480px]
            max-w-md sm:max-w-lg md:max-w-xl xl:max-w-none
            mx-auto xl:mx-0
          ">
            {video ? (
              <video autoPlay loop muted playsInline className="media">
                <source src={video} type="video/mp4" />
              </video>
            ) : animation ? (
              <div className="media flex items-center justify-center">
                {animation}
              </div>
            ) : (
              <img
                className="media"
                src={image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71"}
                alt={title}
              />
            )}
          </div>

        </div>
      </div>

      {/* 🔹 CONTENT */}
     <main className="
  content fade-up
  w-full max-w-[1500px] mx-auto
  px-4 sm:px-6 md:px-8 xl:px-12
  py-6 md:py-8 lg:py-10
">
  <div className="space-y-8 md:space-y-10 xl:space-y-12">
    {children}
  </div>
</main>
    </div>
  )
}