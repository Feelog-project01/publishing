//  2025.04.06 조승찬

document.addEventListener("DOMContentLoaded", () => {
    // 타이틀(댓글, 커뮤니티, 관리자알림) 클릭 이벤트
    document.querySelectorAll(".MuiListItem-variantPlain").forEach((title) => {
        title.addEventListener("click", (e) => {
            e.preventDefault();
            // 타이틀이 새로 선택되면 타이틀 진하게, 밑줄 표현 되도록 수정
            if (!e.target.classList.contains("selected")) {
                // 기존에 선택되었던 타이틀 원상 복귀
                document.querySelector(".selected.joy-yhpm4r").querySelector(".joy-7rqbdn").classList.add("joy-r8ur5l");
                document
                    .querySelector(".selected.joy-yhpm4r")
                    .querySelector(".joy-7rqbdn")
                    .classList.remove("joy-7rqbdn");
                document.querySelector(".selected.joy-yhpm4r").classList.add("joy-1t2bmje");
                document.querySelector(".selected.joy-yhpm4r").classList.remove("selected", "joy-yhpm4r");
                // 클릭된 타이틀에 진하게, 밑줄 표현 클래스명 추가
                e.target.closest(".MuiListItem-variantPlain").querySelector(".joy-r8ur5l").classList.add("joy-7rqbdn");
                e.target
                    .closest(".MuiListItem-variantPlain")
                    .querySelector(".joy-r8ur5l")
                    .classList.remove("joy-r8ur5l");
                e.target.closest(".MuiListItem-variantPlain").classList.add("selected", "joy-yhpm4r");
                e.target.closest(".MuiListItem-variantPlain").classList.remove("joy-1t2bmje");
            }
        });
    });
});
