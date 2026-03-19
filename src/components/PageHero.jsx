function PageHero({ tag, title, subtitle, color = 'green' }) {
  return (
    <div className={`page-hero page-hero-${color}`}>
      <div className="page-hero-content">
        {tag && <span className="page-hero-tag">{tag}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  )
}

export default PageHero
