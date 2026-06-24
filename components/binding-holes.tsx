export function BindingHoles() {
  return (
    <div className="binding-holes" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} className="binding-hole" />
      ))}
    </div>
  )
}
