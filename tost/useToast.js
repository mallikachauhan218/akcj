import { toast } from 'react-toastify';

const useToast = () => {
  const showToast = (message, type = 'default', options = {}) => {


    const defaultOptions = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };

    const toastOptions = { ...defaultOptions, ...options };

    switch (type) {
      case 'success':
        toast.success(message, toastOptions);
        break;
      case 'error':
        toast.error(message, toastOptions);
        break;
      case 'info':
        toast.info(message, toastOptions);
        break;
      case 'warning':
        toast.warning(message, toastOptions);
        break;
      default:
        toast(message, toastOptions);
        break;
    }
  };

  return showToast;
};

export default useToast;
