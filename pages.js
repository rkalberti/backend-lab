function mostrarToast(mensagem, classe) {
    const toastElement = document.getElementById("liveToast")
    const toastMessage = document.getElementById("toast-message")

    if (!toastElement || !toastMessage) {
        console.error("Elemento Toast não encontrado.")
        return
    }

    toastMessage.innerText = mensagem

    toastElement.classList.remove("bg-success", "bg-danger")
    toastElement.classList.add(classe)

    const toast = bootstrap.Toast.getOrCreateInstance(toastElement)
    toast.show()
}