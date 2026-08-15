function AccordionSection({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-dotted border-gray-400">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-[17px]">{title}</span>
        <span className="text-[22px]">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="pb-4 text-[14px] leading-7 text-[#46413d]">
          {children}
        </div>
      )}
    </div>
  );
}

export default AccordionSection;