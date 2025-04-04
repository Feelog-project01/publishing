// 25.04.03 조승찬

document.addEventListener("DOMContentLoaded", () => {
    // 회원가입 버튼 클릭
    document
        .querySelectorAll(".MuiButton-root.MuiButton-variantSoft.MuiButton-colorNeutral.MuiButton-sizeMd.joy-1bxt4bb")
        .forEach((button) => {
            button.addEventListener("click", (e) => {
                // 만14세 이상 체크하지 않고 회원가입 클릭시 :: 경고문구 보여주기 => 만 14세 이상입니다. 클릭시 삭제
                if (document.querySelector(".MuiSvgIcon-root.MuiSvgIcon-sizeMd.joy-c6bb0f") == null) {
                    e.preventDefault();
                    if (
                        document.querySelector(
                            ".MuiTypography-root.MuiTypography-body-sm.MuiTypography-colorDanger.joy-1jrnmgr"
                        ) == null
                    ) {
                        const p = document.createElement("p");
                        p.setAttribute("aria-live", "assertive");
                        p.setAttribute(
                            "class",
                            "MuiTypography-root MuiTypography-body-sm MuiTypography-colorDanger joy-1jrnmgr"
                        );
                        p.innerText = "포스타입에 가입하려면 만 14세 이상이어야 해요.";
                        document.querySelector(".MuiStack-root.joy-bco1gb").appendChild(p);
                    }
                }
            });
        });

    // 만14세 이상 체크 :: 클래스 명 변경, svg태그 생성/삭제
    document.querySelector(".MuiCheckbox-input.joy-1jj0cvj").addEventListener("change", (e) => {
        // svg 태그가 없으면 클래스명 변경, svg 태그 생성, 14세이상 경고 문구 삭제
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

            // 14세 이상 경고 문구 삭제
            if (
                document.querySelector(
                    ".MuiTypography-root.MuiTypography-body-sm.MuiTypography-colorDanger.joy-1jrnmgr"
                ) != null
            ) {
                document
                    .querySelector(".MuiTypography-root.MuiTypography-body-sm.MuiTypography-colorDanger.joy-1jrnmgr")
                    .remove();
            }
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
