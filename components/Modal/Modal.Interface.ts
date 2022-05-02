export interface AvatarModalProps {
  id: string;
  closeModal: (...args: any) => void;
  firstName: string;
  lastName: string;
  avatar: string;
  enableUploadFunctionality: boolean;
}

export interface ModalProps {
  onClickClose: (...args: any) => void;
}