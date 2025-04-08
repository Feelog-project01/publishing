const saveButton = document.querySelector(".save-button");

saveButton.addEventListener("click", (e) => {
    if (!addressInput.value) {
        alert("🚫 주소를 입력 해주세요요");
    }
});
