import { useRef } from "react";

const TaskCategory = () => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = scrollRef.current;
    if (!slider) return;

    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const x = moveEvent.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      slider.style.cursor = "grab";
    };

    slider.style.cursor = "grabbing";
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div>
      <ul
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        className="flex flex-row gap-3 font-bold text-(--primary-color-font) 
                   overflow-x-scroll overflow-y-hidden cursor-grab select-none 
                   custom-scroll"
      >
        <li className="before:content-['•'] before:mr-2 before:text-(--primary-color-font)">
          All
        </li>
        <li className="before:content-['•'] before:mr-2 before:text-(--school-color)">
          School
        </li>
        <li className="before:content-['•'] before:mr-2 before:text-(--work-color)">
          Work
        </li>
        <li className="before:content-['•'] before:mr-2 before:text-(--personal-color)">
          Personal
        </li>
        <li className="before:content-['•'] before:mr-2 before:text-(--shopping-color)">
          Shopping
        </li>
      </ul>
    </div>
  );
};

export default TaskCategory;
