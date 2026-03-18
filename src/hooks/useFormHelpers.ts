// @ts-nocheck - ігнорувати всі помилки TypeScript у цьому файлі
import toast from "react-hot-toast";

interface UseFormHelpersProps {
  onClose: () => void;
  reset?: () => void;
}

export const useFormHelpers = ({ onClose, reset }: UseFormHelpersProps) => {
  const handleSuccess = (message: string) => {
    try {
      toast.success(message);
    } catch (error) {
      console.log("Success:", message);
    }
    if (reset) {
      reset();
    }
    onClose();
  };

  const handleError = (
    error: any,
    defaultMessage: string = "An error occurred",
  ) => {
    console.error(error);
    const message = error.message || defaultMessage;
    try {
      toast.error(message);
    } catch (err) {
      console.error("Error:", message);
    }
    return message;
  };

  return { handleSuccess, handleError };
};
