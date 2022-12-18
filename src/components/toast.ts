import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const option = { autoClose: 1000, position: toast.POSITION.TOP_RIGHT }

export const toastSuccess = (text: string) => toast.success(text, option)
export const toastError = (text: string) => toast.error(text, option)
export const toastWarning = (text: string) => toast.warning(text, option)
export const toastInfo = (text: string) => toast.info(text, option)