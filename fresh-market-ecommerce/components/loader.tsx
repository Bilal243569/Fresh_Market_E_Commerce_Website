export default function Loader() {
  return (
    <div className="flex space-x-2 justify-center m-4">
      {[...Array(3)].map((_, i) => {
        const bounceClass = "w-4 h-4 bg-emerald-500 rounded-full animate-bounce"
        const delayStyle = { animationDelay: `${i * 0.2}s` }

        return <span key={i} className={bounceClass} style={delayStyle} />
      })}
    </div>
  )
}
