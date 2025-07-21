import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { FORM_TEXTS } from "./constants";

type FormButtonProps = {
  openForm: boolean;
  onClick: () => void;
};

export function FormButton({ openForm, onClick }: FormButtonProps) {
  const buttonText = openForm ? FORM_TEXTS.buttonCancel : FORM_TEXTS.buttonOpen;
  const ButtonIcon = openForm ? Minus : Plus;

  return (
    <Button
      onClick={onClick}
      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
    >
      <ButtonIcon className="h-5 w-5 mr-2" />
      {buttonText}
    </Button>
  );
}
