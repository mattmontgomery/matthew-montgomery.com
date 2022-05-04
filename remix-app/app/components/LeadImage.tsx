export function LeadImage({
  image,
  title,
  titleClasses = "text-yellow-500",
  subtitleClasses = "text-white",
  subtitle,
  imageFilter = "bg-[color:rgba(254,204,27,0.5)]",
  backgroundFilter,
}: {
  image: { url: string; alt: string };
  title?: React.ReactNode;
  titleClasses?: string;
  subtitle?: React.ReactNode;
  subtitleClasses?: string;
  backgroundFilter?: string;
  imageFilter?: string;
}) {
  return (
    <div className="relative sm:pb-8 sm:pt-8">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <img
              className={`h-full w-full object-cover ${imageFilter}`}
              src={image.url}
              alt={image.alt}
            />
            <div
              className={`absolute inset-0  mix-blend-multiply ${backgroundFilter}`}
            />
          </div>
          <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
            {title && (
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-8xl">
                <span
                  className={`block uppercase ${titleClasses} drop-shadow-md`}
                >
                  {title}
                </span>
              </h1>
            )}
            {subtitle && (
              <p
                className={`mx-auto mt-6 max-w-lg text-center text-2xl sm:max-w-3xl ${subtitleClasses} block font-light uppercase tracking-wide drop-shadow-md`}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
