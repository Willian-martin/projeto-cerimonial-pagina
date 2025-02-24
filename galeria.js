
    document.addEventListener("DOMContentLoaded", function () {
        // Criar elementos do modal
        let modal = document.createElement("div");
        modal.id = "imageModal";
        modal.style.display = "none";
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0, 0, 0, 0.8)";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "1000";

        let modalImg = document.createElement("img");
        modalImg.style.maxWidth = "90%";
        modalImg.style.maxHeight = "90%";
        modalImg.style.borderRadius = "10px";
        modal.appendChild(modalImg);

        let closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "20px";
        closeBtn.style.right = "30px";
        closeBtn.style.fontSize = "40px";
        closeBtn.style.color = "#fff";
        closeBtn.style.cursor = "pointer";
        modal.appendChild(closeBtn);

        document.body.appendChild(modal);

        // Adicionar evento de clique nas imagens
        document.querySelectorAll(".fotos img").forEach(img => {
            img.addEventListener("click", function () {
                modalImg.src = this.src;
                modal.style.display = "flex";
            });
        });

        // Fechar o modal ao clicar no botão X ou fora da imagem
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
