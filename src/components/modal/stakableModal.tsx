import { Dialog } from "@material-tailwind/react";

import * as translation from "@/translation/en.json";

interface StakableModalProps {
  stakableOpen: boolean;
  handleStakableOpen: () => void;
}

const StakableModal = ({
  stakableOpen,
  handleStakableOpen,
}: StakableModalProps) => {
  return (
    <Dialog
      open={stakableOpen}
      handler={handleStakableOpen}
      size="xs"
      className="bg-black px-10 py-5 flex flex-col gap-5 items-center font-[Knewave] text-white rounded-3xl"
    >
      <p className="text-6xl bg-[#F0C010] w-24 h-24 text-center rounded-full flex flex-col items-center justify-center">
        !
      </p>
      <p className="leading-8 text-center">
        {translation.presale.dialog.stakeable}
      </p>
      <span
        onClick={handleStakableOpen}
        className="bg-green-600 px-10 py-2 rounded-full cursor-pointer"
      >
        {translation.presale.dialog.ok}
      </span>
    </Dialog>
  );
};

export default StakableModal;
