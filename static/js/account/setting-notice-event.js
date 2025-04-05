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

    // 체크박스 클릭 이벤트
    document.querySelectorAll(".joy-q7japm").forEach((checkbox) => {
        checkbox.addEventListener("click", (e) => {
            const switchWrapper = e.target.closest(".joy-1hdbc19");

            const switchRoot = switchWrapper.querySelector(".MuiSwitch-root");
            const switchTrack = switchWrapper.querySelector(".MuiSwitch-track");
            const switchThumb = switchWrapper.querySelector(".MuiSwitch-thumb");

            const isOn = switchRoot.classList.contains("Mui-checked");

            if (isOn) {
                // ✅ OFF 상태로 전환
                switchRoot.classList.remove("Mui-checked", "MuiSwitch-colorPrimary", "joy-1yog6pe");
                switchRoot.classList.add("MuiSwitch-colorNeutral", "joy-ituqjw");

                switchTrack.classList.remove("Mui-checked");
                switchThumb.classList.remove("Mui-checked");
            } else {
                // ✅ ON 상태로 전환
                switchRoot.classList.add("Mui-checked", "MuiSwitch-colorPrimary", "joy-1yog6pe");
                switchRoot.classList.remove("MuiSwitch-colorNeutral", "joy-ituqjw");

                switchTrack.classList.add("Mui-checked");
                switchThumb.classList.add("Mui-checked");
            }
        });
    });
});
