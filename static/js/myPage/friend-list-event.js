//  2025.04.06 조승찬

document.addEventListener("DOMContentLoaded", () => {
    // 구독중 버튼 이벤트
    document.querySelectorAll(".joy-8czzlu").forEach((button, inded) => {
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
