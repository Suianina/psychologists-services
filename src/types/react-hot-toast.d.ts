declare module "react-hot-toast" {
  export interface ToastOptions {
    duration?: number;
    position?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right";
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
  }

  export interface Toast {
    id: string;
    message: string;
    type: "success" | "error" | "loading" | "blank";
    visible: boolean;
  }

  export function toast(message: string, options?: ToastOptions): string;
  export namespace toast {
    function success(message: string, options?: ToastOptions): string;
    function error(message: string, options?: ToastOptions): string;
    function loading(message: string, options?: ToastOptions): string;
    function dismiss(toastId?: string): void;
  }

  export const Toaster: React.FC<{
    position?: ToastOptions["position"];
    toastOptions?: ToastOptions;
  }>;

  export default toast;
}
