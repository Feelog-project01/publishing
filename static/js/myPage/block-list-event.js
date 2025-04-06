//  2025.04.06 조승찬

document.addEventListener("DOMContentLoaded", () => {
    // 타이틀(메세지 목록, 이용자차단) 클릭 이벤트
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

    // 차단해제 버튼 이벤트
    document.querySelectorAll(".joy-ubyl7c").forEach((button, inded) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".joy-8ijia1").style.display = "block";
        });
    });
    // 모달창 네, 아니오, x 버튼 클릭 이벤트
    document.querySelectorAll(".joy-c6bb0f, .joy-10kto0v, .joy-1bxt4bb").forEach((button) => {
        button.addEventListener("click", (e) => {
            // 차단해제 클릭 후 모달창에서 '네' 클릭시 :: 서버에 갔다온 뒤 뿌리는 거로 수정
            if (e.target.textContent.trim() == "네") {
                // 차단해제 alert 창 막기
                document.querySelector('[aria-labelledby=":r0:"]').style.display = "none";
                // 처리결과 alert 창 열기
                document.querySelector('[aria-labelledby=":r4:"]').style.display = "block";
            } else {
                document.querySelector(".joy-8ijia1").style.display = "none";
                // 원상 복구
                document.querySelector('[aria-labelledby=":r0:"]').style.display = "block";
                document.querySelector('[aria-labelledby=":r4:"]').style.display = "none";
            }
        });
    });
});
