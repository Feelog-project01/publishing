/* 2025.04.05 조승찬 */

document.addEventListener("DOMContentLoaded", () => {
    // 타이틀(프로필, 알림) 클릭 이벤트
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

    // 파일 첨부 처리
    // 1. 버튼 클릭 → input 클릭 트리거(클릭된 것으로 처리)
    document.querySelector(".joy-cqqedx").addEventListener("click", () => {
        document.getElementById(":R359uuukv9ul7rlqakq:").click();
    });

    // 2. 파일 선택 → 파일명 표시
    document.getElementById(":R359uuukv9ul7rlqakq:").addEventListener("change", () => {
        if (document.getElementById(":R359uuukv9ul7rlqakq:").files.length > 0) {
            document.querySelector(".joy-1dfw2up").textContent = `${
                document.getElementById(":R359uuukv9ul7rlqakq:").files[0].name
            }`;
        } else {
            document.querySelector(".joy-1dfw2up").textContent = "파일을 선택해 주세요.";
        }
    });

    // 닉네임과 자기소개 포커스 색상 변경 처리
    document.querySelector("#\\:R559uuukv9ul7rlqakq\\:").addEventListener("focus", (e) => {
        e.target.closest(".joy-128w9vm").classList.toggle("Mui-focused");
    });
    document.querySelector("#\\:R559uuukv9ul7rlqakq\\:").addEventListener("blur", (e) => {
        e.target.closest(".joy-128w9vm").classList.toggle("Mui-focused");
    });
    document.querySelector("#\\:R759uuukv9ul7rlqakq\\:").addEventListener("focus", (e) => {
        e.target.closest(".joy-1bm8vhn").classList.toggle("Mui-focused");
    });
    document.querySelector("#\\:R759uuukv9ul7rlqakq\\:").addEventListener("blur", (e) => {
        e.target.closest(".joy-1bm8vhn").classList.toggle("Mui-focused");
    });

    //  버튼 이벤트 :: 서버에서 결과 받아서 뿌리는 거로 변경 필요
    document.querySelector(".joy-1bvc4cc .joy-10kto0v").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".joy-8ijia1").style.display = "block";
    });

    // 모달창 확인, x 버튼 클릭 이벤트
    document.querySelector(".joy-gh62p7 .joy-10kto0v").addEventListener("click", (e) => {
        document.querySelector(".joy-8ijia1").style.display = "none";
    });
    document.querySelector(".joy-c6bb0f").addEventListener("click", (e) => {
        document.querySelector(".joy-8ijia1").style.display = "none";
    });
});
