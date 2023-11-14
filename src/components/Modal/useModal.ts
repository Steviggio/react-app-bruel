import { useState } from "react";

export interface ModalState {
  isShowing: boolean;
  toggle: () => void;
}

const useModal = (): ModalState => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle
  };

}

export default useModal;