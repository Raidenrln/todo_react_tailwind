const TopSection = () => {
  return (
    <div className="flex flex-col items-center h-[35]">
      <div className="flex flex-row w-full items-center gap-2 h-[50] mt-2.5 mb-2.5">
        <img 
        className="h-8" 
        src="./public/assets/clover.png" 
        alt="logo"/>
        <h1 className="text-2xl text-(--primary-color-font) font-bold">
          TO-DO
        </h1>
      </div>
        <hr
        className="border-(--line-color) border-t-2 w-[95%]"
        />
    </div>
  )
}

export default TopSection
