const AddingTaskBtn = () => {
  return (
    <div className="h-auto">
      <button 
      className={`
      fixed bottom-8 
      right-8 h-[50px] 
      w-[50px] 
      bg-(--primary-color-font) 
      rounded-full flex 
      items-center 
      justify-center 
      shadow-md 
      hover:scale-110 
      hover:shadow-lg 
      transition-transform
      `}>
        <img src="./src/assets/add.png" className="h-6 w-6" alt="Add" />
      </button>
    </div>
  )
}

export default AddingTaskBtn
