// 2025.04.06 조승찬
document.addEventListener("DOMContentLoaded", () => {
    // 인증메일 보내기 버튼 이벤트 :: 서버에서 결과 받아서 뿌리는 거로 변경 필요
    document.querySelector(".joy-iiw9gr").addEventListener("click", (e) => {
        document.querySelector(".joy-8ijia1").style.display = "block";
    });

    // 모달창 확인, x 버튼 클릭 이벤트
    document.querySelector(".joy-10kto0v").addEventListener("click", (e) => {
        document.querySelector(".joy-8ijia1").style.display = "none";
    });
    document.querySelector(".joy-c6bb0f").addEventListener("click", (e) => {
        document.querySelector(".joy-8ijia1").style.display = "none";
    });
});
