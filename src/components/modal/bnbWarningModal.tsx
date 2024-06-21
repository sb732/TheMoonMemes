import { Dialog } from "@material-tailwind/react";

import * as translation from "@/translation/en.json";

interface BNBWarningModalProps {
  bnbWarningOpen: boolean;
  handleBNBWarningOpen: () => void;
  changeNetwork: () => void;
}

const BNBWarningModal = ({
  bnbWarningOpen,
  handleBNBWarningOpen,
  changeNetwork,
}: BNBWarningModalProps) => {
  return (
    <Dialog
      open={bnbWarningOpen}
      handler={handleBNBWarningOpen}
      size="xs"
      className="bg-black px-10 py-5 flex flex-col gap-5 items-center font-[Knewave] text-white rounded-3xl z-[20000]"
    >
      <p className="text-6xl bg-[#F0C010] w-24 h-24 text-center rounded-full flex flex-col items-center justify-center">
        !
      </p>
      <p className="text-3xl font-semibold leading-8 text-center">
        {translation.presale.dialog.warningTitle}
      </p>
      <p className="leading-8 text-center">
        {translation.presale.dialog.warningContent}
      </p>
      <span
        onClick={() => {
          changeNetwork();
          handleBNBWarningOpen();
        }}
        className="bg-green-600 px-10 py-2 rounded-full cursor-pointer"
      >
        {translation.presale.dialog.buyWithBNB}
      </span>
    </Dialog>
  );
};

export default BNBWarningModal;
