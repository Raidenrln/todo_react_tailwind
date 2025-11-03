const CompletedTask = () => {
  return (
    <div className="flex flex-row gap-1">
      <h2 className="text-2xl font-bold text-(--primary-color-font) mr-1">
        COMPLETED
      </h2>
      <span className="text-(--secondary-color-font)">
        ▼
      </span>
    </div>
  )
}

export default CompletedTask
