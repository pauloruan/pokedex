export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="box-border w-full mx-auto h-16 flex flex-col flex-nowrap items-center justify-center text-center font-sans text-xs py-4">
      <div className="max-w-max font-sans font-normal text-center text-gray-700 leading-relaxed tracking-wide">
        <p>
          &copy; <time>{currentYear}</time> • Paulo Ruan
        </p>
        <p>Desenvolvido com Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  )
}
