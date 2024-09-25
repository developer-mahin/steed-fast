import { ReactNode } from "react";
import { HiX } from "react-icons/hi";
import { cn } from "../../utils/cn";

type TProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  modalTitle: string;
  className?: string;
};

const SharedModal: React.FC<TProps> = ({
  isModalOpen,
  setIsModalOpen,
  children,
  modalTitle,
  className,
}) => {
  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={cn(
              className,
              "bg-white rounded-lg shadow-lg lg:w-[550px] w-full p-6 relative"
            )}
          >
            {/* Modal content */}
            <h2 className="text-2xl font-semibold mb-4">{modalTitle}</h2>
            <div>{children}</div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 rounded-full p-1 bg-red-500 text-white"
            >
              <HiX className="size-5 cursor-pointer" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SharedModal;
