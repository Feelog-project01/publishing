document.addEventListener("selectionchange", () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const parentP = range.startContainer.closest?.("p");

    const quickInsert = document.querySelector(".fr-quick-insert");

    if (parentP && quickInsert) {
        quickInsert.style.display = "block";
    } else if (quickInsert) {
        quickInsert.style.display = "none";
    }
});

document.querySelector(".fr-floating-btn").addEventListener("click", (e) => {
    const menu = document.querySelector(".fr-qi-helper");
    const quickInsert = document.querySelector(".fr-quick-insert");

    // 메뉴가 숨겨져 있으면 보이고, 보이면 숨기기
    if (menu) {
        menu.classList.toggle("open"); // 'open' 클래스를 토글
    }

    // 버튼 회전 효과 및 메뉴 토글
    if (quickInsert) {
        quickInsert.classList.toggle("fr-on"); // 'fr-on' 클래스를 토글
    }

    // 클릭 이벤트가 해당 요소에서 발생했음을 알림
    e.stopPropagation(); // 클릭 이벤트가 문서에서 전파되지 않도록 함
});

// 문서에서 클릭하면 메뉴 숨기기
document.addEventListener("click", (e) => {
    const menu = document.querySelector(".fr-qi-helper");
    const quickInsert = document.querySelector(".fr-quick-insert");

    // 버튼이나 메뉴 외의 곳을 클릭하면 메뉴를 숨김
    if (menu && !menu.contains(e.target) && !quickInsert.contains(e.target)) {
        menu.classList.remove("open"); // 메뉴 숨기기
        quickInsert.classList.remove("fr-on"); // 버튼 회전 제거
    }
});
