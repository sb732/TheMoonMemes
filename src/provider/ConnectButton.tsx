import { useEffect } from "react";
import { useWeb3ModalEvents } from "@web3modal/wagmi/react";

export default function ConnectButton() {
  const events = useWeb3ModalEvents();

  useEffect(() => {
    const button = document
      .querySelector("w3m-button")
      ?.shadowRoot?.querySelector("w3m-connect-button")
      ?.shadowRoot?.querySelector("wui-connect-button")
      ?.shadowRoot?.querySelector("button");

    const accountButton = document
      .querySelector("w3m-button")
      ?.shadowRoot?.querySelector("w3m-account-button")
      ?.shadowRoot?.querySelector("wui-account-button")
      ?.shadowRoot?.querySelector("button");

    if (button) {
      button.style.border = "1px solid #FFC700";
      button.style.borderRadius = "10px";
      button.style.background = "transparent";

      const textSlot = button?.querySelector("wui-text")?.querySelector("slot");
      if (textSlot) {
        textSlot.style.fontFamily = "Knewave";
        textSlot.style.textTransform = "uppercase";
      }
    }

    if (accountButton) {
      const balanceText = accountButton
        ?.querySelector("wui-text")
        ?.shadowRoot?.querySelector("slot");
      const flex = accountButton?.querySelector("wui-flex");
      const flexAvatar = accountButton
        ?.querySelector("wui-flex")
        ?.querySelector("wui-avatar");
      const flexText = accountButton
        ?.querySelector("wui-flex")
        ?.querySelector("wui-text");

      accountButton.style.padding = "0px 8px";
      accountButton.style.gap = "0";
      accountButton.style.border = "1px solid #FFC700";
      accountButton.style.borderRadius = "10px";
      accountButton.style.background = "transparent";

      if (balanceText) {
        balanceText.style.display = "none";
      }
      if (flex) {
        flex.style.border = "none";
        flex.style.background = "transparent";
        flex.style.padding = "9px 8px";
      }
      if (flexAvatar) {
        flexAvatar.style.display = "none";
      }
      if (flexText) {
        flexText.style.color = "white";

        const flexTextSlot = flexText?.shadowRoot?.querySelector("slot");
        if (flexTextSlot) {
          flexTextSlot.style.fontFamily = "Knewave";
        }
      }
    }
  }, [events]);

  return <w3m-button />;
}
