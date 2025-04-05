// 25.04.05 조승찬

document.addEventListener("DOMContentLoaded", () => {
    // 로그인 버튼 클릭 이벤트
    document.querySelectorAll(".joy-1bxt4bb").forEach((button) => {
        button.addEventListener("click", (e) => {
            // 카카오로그인
            // 이메일로그인
            if (e.target.closest("button.joy-1bxt4bb")) {
                window.location.href = "../login/email-login.html";
            }
        });
    });

    // 로그인 상태 유지 체크 :: 클래스 명 변경, svg태그 생성/삭제
    document.querySelector(".MuiCheckbox-input.joy-1jj0cvj").addEventListener("change", (e) => {
        // svg 태그가 없으면 클래스명 변경, svg 태그 생성
        // svg 태그가 있으면 클래스명 원상복구, svg 태그 삭제
        if (document.querySelector(".MuiSvgIcon-root.MuiSvgIcon-sizeMd.joy-c6bb0f") == null) {
            // 클래스명 변경
            document.querySelector(".MuiCheckbox-action.joy-kit57i").className =
                "MuiCheckbox-action Mui-checked joy-kit57i";
            document.querySelector(".MuiCheckbox-checkbox.joy-12qidki").className =
                "MuiCheckbox-checkbox Mui-checked joy-3p0wzn";
            document.querySelector(
                ".MuiCheckbox-root.MuiCheckbox-variantOutlined.MuiCheckbox-colorNeutral.MuiCheckbox-sizeSm.joy-l3odn9"
            ).className =
                "MuiCheckbox-root Mui-checked MuiCheckbox-variantSolid MuiCheckbox-colorPrimary MuiCheckbox-sizeSm joy-n1cxpg";

            // <svg> 요소 생성
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("focusable", "false");
            svg.setAttribute("aria-hidden", "true");
            svg.setAttribute("viewBox", "0 0 24 24");
            svg.setAttribute("data-testid", "CheckIcon");
            svg.classList.add("MuiSvgIcon-root", "MuiSvgIcon-sizeMd", "joy-c6bb0f");

            // <path> 요소 생성
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute(
                "d",
                "M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"
            );

            // <path>를 <svg> 안에 추가
            svg.appendChild(path);

            // <svg>를 추가
            document.querySelector(".MuiCheckbox-checkbox.Mui-checked.joy-3p0wzn").appendChild(svg);
        } else {
            // 클래스명 원상복구
            document.querySelector(".MuiCheckbox-action.Mui-checked.joy-kit57i").className =
                "MuiCheckbox-action joy-kit57i";
            document.querySelector(".MuiCheckbox-checkbox.Mui-checked.joy-3p0wzn").className =
                "MuiCheckbox-checkbox joy-12qidki";
            document.querySelector(
                ".MuiCheckbox-root.Mui-checked.MuiCheckbox-variantSolid.MuiCheckbox-colorPrimary.MuiCheckbox-sizeSm.joy-n1cxpg"
            ).className =
                "MuiCheckbox-root MuiCheckbox-variantOutlined MuiCheckbox-colorNeutral MuiCheckbox-sizeSm joy-l3odn9";

            // <svg> 요소 삭제
            if (document.querySelector(".MuiSvgIcon-root.MuiSvgIcon-sizeMd.joy-c6bb0f") != null) {
                document.querySelector(".MuiSvgIcon-root.MuiSvgIcon-sizeMd.joy-c6bb0f").remove();
            }
        }
    });
});
