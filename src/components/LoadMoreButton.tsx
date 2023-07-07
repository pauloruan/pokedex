export function LoadMoreButton({ onClick, disabled }: LoadMoreButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="bg-slate-500 hover:bg-slate-700 text-white text-lg font-bold py-2 px-4 rounded my-4 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Load More Pokemons
    </button>
  )
}
