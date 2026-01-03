type SectionHeaderProps = {
  label: string
  title: string
  highlight?: string
}

function SectionHeader({ label, title, highlight }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="eyebrow">{label}</span>
      <h2>
        {title} {highlight ? <span className="accent">{highlight}</span> : null}
      </h2>
    </div>
  )
}

export default SectionHeader
