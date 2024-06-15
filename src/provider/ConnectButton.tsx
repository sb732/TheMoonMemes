import { useEffect } from "react";
import { useWeb3ModalEvents } from "@web3modal/wagmi/react";

export default function ConnectButton() {
  const events = useWeb3ModalEvents();

  const updateStyle = () => {
    const buttons = document.querySelectorAll("w3m-button");
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i]?.shadowRoot
        ?.querySelector("w3m-connect-button")
        ?.shadowRoot?.querySelector("wui-connect-button")
        ?.shadowRoot?.querySelector("button");

      if (button) {
        button.style.borderRadius = "10px";
        button.style.background = "#FFC700";

        const textSlot = button
          ?.querySelector("wui-text")
          ?.querySelector("slot");
        if (textSlot) {
          textSlot.style.fontFamily = "Knewave";
          textSlot.style.color = "black";
          textSlot.style.textTransform = "uppercase";
        }
      }
    }

    const accountButtons = document.querySelectorAll("w3m-button");
    for (let i = 0; i < accountButtons.length; i++) {
      const accountButton = accountButtons[i]?.shadowRoot
        ?.querySelector("w3m-account-button")
        ?.shadowRoot?.querySelector("wui-account-button")
        ?.shadowRoot?.querySelector("button");

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
        accountButton.style.borderRadius = "10px";
        accountButton.style.background = "#FFC700";

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
            flexTextSlot.style.color = "black";
          }
        }
      }
    }
  };

  useEffect(() => {
    updateStyle();
    setTimeout(() => {
      updateStyle();
    }, 100);
    setTimeout(() => {
      updateStyle();
    }, 500);
    setTimeout(() => {
      updateStyle();
    }, 1000);
  }, [events]);

  return <w3m-button />;
}
