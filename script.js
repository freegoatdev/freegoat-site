
document.addEventListener("DOMContentLoaded", () => {
  const phantomBtn = document.getElementById("phantom-button");
  const freegoatBtn = document.getElementById("freegoat-button");
  const connectBtn = document.getElementById("connect-button");
  const modal = document.getElementById("wallet-modal");
  const status = document.getElementById("platform-status");

  connectBtn.onclick = () => {
    modal.style.display = "block";
  };

  phantomBtn.onclick = async () => {
    try {
      const provider = window?.phantom?.solana;
      if (provider && provider.isPhantom) {
        const resp = await provider.connect();
        status.textContent = "Você está interagindo com a plataforma";
        modal.style.display = "none";
      } else {
        alert("Phantom Wallet não encontrada.");
      }
    } catch (err) {
      alert("Conexão cancelada.");
    }
  };

  freegoatBtn.onclick = () => {
    alert("Conexão com a carteira FREEGOAT ainda está em desenvolvimento.");
    modal.style.display = "block";
  };
});
