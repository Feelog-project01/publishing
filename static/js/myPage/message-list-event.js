//  2025.04.06 조승찬

document.addEventListener("DOMContentLoaded", () => {
    // 타이틀(메세지 목록, 이용자 차단) 클릭 이벤트
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

    // 모달창 메세지 입력창 focus 이벤트
    document.querySelector(".joy-1qmqn4r").addEventListener("focus", (e) => {
        document.querySelector(".joy-spcbp9").classList.add("Mui-focused");
    });
    document.querySelector(".joy-1qmqn4r").addEventListener("blur", (e) => {
        document.querySelector(".joy-spcbp9").classList.remove("Mui-focused");
    });

    // 모달창 메세지 입력창 입력 이벤트
    document.querySelector("textarea.joy-1qmqn4r").addEventListener("input", () => {
        if (document.querySelector("textarea.joy-1qmqn4r").value.trim().length > 0) {
            // 글자가 있으면 버튼 활성화
            document.querySelector("button.joy-ut6eac").classList.remove("Mui-disabled");
            document.querySelector("button.joy-ut6eac").removeAttribute("disabled");
        } else {
            // 글자가 없으면 버튼 비활성화
            document.querySelector("button.joy-ut6eac").classList.add("Mui-disabled");
            document.querySelector("button.joy-ut6eac").setAttribute("disabled", "");
        }
    });

    // 입력 버튼 클릭시 이벤트 :: 서버 갔다 온 이후 동작으로 수정
    document.querySelector(".joy-18i8jzi").addEventListener("click", (e) => {});
});
