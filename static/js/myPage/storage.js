//  2025.04.07 조승찬

document.addEventListener("DOMContentLoaded", () => {
    // 타이틀(스크랩, 좋아요, 댓글) 클릭 이벤트
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

    // 스크랩버튼 클릭 이벤트
    document.querySelector(".joy-1ja7f1b svg").addEventListener("click", (e) => {
        console.log(e.target.outerHTML);
        if (e.target.classList.contains(".joy-17bmg2t")) {
            // 스크랩 설정

            const svg1 = `
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="MuiSvgIcon-root MuiSvgIcon-sizeMd joy-1i55knr">
                <path d="M4.5 3.875v17.176a.95.95 0 0 0 1.496.777L12 17.625l6.004 4.203a.95.95 0 0 0 1.496-.777V3.875C19.5 2.84 18.66 2 17.625 2H6.375C5.34 2 4.5 2.84 4.5 3.875Z" fill="currentcolor"></path>
            </svg>`;
            document.querySelector(".joy-1ja7f1b").innerHTML = svg1;
        } else {
            // 스크랩 해제
            const svg2 = `
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="MuiSvgIcon-root MuiSvgIcon-sizeMd joy-17bmg2t">
                <path d="M4.5 3.875C4.5 2.84 5.34 2 6.375 2v17.242l5.082-3.629a.933.933 0 0 1 1.09 0l5.078 3.63V3.874H6.375V2h11.25c1.035 0 1.875.84 1.875 1.875v17.188a.938.938 0 0 1-1.48.762L12 17.526l-6.02 4.297a.938.938 0 0 1-1.48-.762V3.875Z" fill="currentcolor"></path>
            </svg>`;
            document.querySelector(".joy-1ja7f1b").innerHTML = svg2;
        }
    });
});
