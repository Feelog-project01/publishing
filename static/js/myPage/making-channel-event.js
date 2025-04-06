// 2025.04.05 조승찬
document.addEventListener("DOMContentLoaded", () => {
    // 파일 첨부 이벤트
    // 1. 버튼 클릭 → input 클릭 트리거(클릭된 것으로 처리)
    document.querySelector(".joy-cqqedx").addEventListener("click", () => {
        document.getElementById(":R19ukvf9ul7rlqakq:").click();
    });

    // 2. 파일 선택 → 파일명 표시
    document.getElementById(":R19ukvf9ul7rlqakq:").addEventListener("change", () => {
        if (document.getElementById(":R19ukvf9ul7rlqakq:").files.length > 0) {
            document.querySelector(".joy-1dfw2up").textContent = `${
                document.getElementById(":R19ukvf9ul7rlqakq:").files[0].name
            }`;
        } else {
            document.querySelector(".joy-1dfw2up").textContent = "파일을 선택해 주세요.";
        }
    });

    // 채널 제목 설명 url 포커스 색상 변경 처리
    document.querySelector("#\\:R1b9ukvf9ul7rlqakq\\:").addEventListener("focus", (e) => {
        e.target.closest(".joy-128w9vm").classList.toggle("Mui-focused");
    });
    document.querySelector("#\\:R1b9ukvf9ul7rlqakq\\:").addEventListener("blur", (e) => {
        e.target.closest(".joy-128w9vm").classList.toggle("Mui-focused");
    });
    document.querySelector("#\\:R1r9ukvf9ul7rlqakq\\:").addEventListener("focus", (e) => {
        e.target.closest(".joy-1pk8xce").classList.toggle("Mui-focused");
    });
    document.querySelector("#\\:R1r9ukvf9ul7rlqakq\\:").addEventListener("blur", (e) => {
        e.target.closest(".joy-1pk8xce").classList.toggle("Mui-focused");
    });
    document.querySelector("#\\:R2b9ukvf9ul7rlqakq\\:").addEventListener("focus", (e) => {
        e.target.closest(".joy-128w9vm").classList.toggle("Mui-focused");
    });
    document.querySelector("#\\:R2b9ukvf9ul7rlqakq\\:").addEventListener("blur", (e) => {
        e.target.closest(".joy-128w9vm").classList.toggle("Mui-focused");
    });

    // 새채널 만들기 버튼 이벤트
    document.querySelector(".joy-w9fbn").addEventListener("click", (e) => {
        // 타이틀 미입력 시
        if (document.querySelector(".joy-1u0jcuo").value.trim() == "") {
            e.preventDefault();
            document.querySelector(".joy-1cscwg4").textContent = "채널 제목을 입력하세요";
            document.querySelector(".joy-8ijia1").style.display = "block";
            // url 미입력 시
        } else if (document.querySelector(".joy-za5rna").value.trim() == "") {
            e.preventDefault();
            document.querySelector(".joy-1cscwg4").textContent = "url을 입력하세요";
            document.querySelector(".joy-8ijia1").style.display = "block";
        }
    });

    // 모달창 확인, x 버튼 클릭 이벤트
    document.querySelector(".joy-10kto0v").addEventListener("click", (e) => {
        document.querySelector(".joy-8ijia1").style.display = "none";
    });
    document.querySelector(".joy-c6bb0f").addEventListener("click", (e) => {
        document.querySelector(".joy-8ijia1").style.display = "none";
    });
});
