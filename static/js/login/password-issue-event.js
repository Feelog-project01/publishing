// 2025.04.05 조승찬

document.addEventListener("DOMContentLoaded", () => {
    let emailFlag = false;
    // 입력창 포커스(커서 위치) 이벤트
    document.querySelectorAll(".MuiInput-input").forEach((input) => {
        // 처음 포커스 되었을 때( 에러 문구도 없고, classlist에 Mui-focused도 없을 경우) 파란색으로 창을 표시
        input.addEventListener("focus", (e) => {
            if (
                !e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.contains("Mui-error") &&
                !e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.contains("Mui-focused")
            ) {
                e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.add("Mui-focused");
            }
        });

        // 포커스가 옮겨지고, 입력값이 올바르지 못 할 경우 경우 빨간색 메세지 표시
        input.addEventListener("blur", (e) => {
            if (!e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.contains("Mui-error")) {
                const helperTextDiv = document.createElement("div");
                helperTextDiv.setAttribute("aria-live", "assertive");
                helperTextDiv.setAttribute("class", "MuiFormHelperText-root Mui-error joy-7l9mu1");
                if (e.target.id == ":r0:" && !emailFlag) {
                    helperTextDiv.setAttribute("id", ":r0:-helper-text");
                    helperTextDiv.textContent = "이메일을 입력해 주세요.";
                    e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.remove("Mui-focused");
                    e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.add("Mui-error");
                }
                e.target.closest(".joy-k54e1s").appendChild(helperTextDiv);
            }
        });
    });

    // 이메일 입력창 입력 이벤트
    // 입력된 이메일 유효성 확인
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    document.querySelector("#\\:r0\\:").addEventListener("keyup", (e) => {
        // 이메일 정상 입력 :: 이메일 플래그 true, Mui-error,Mui-focused 클래스명 삭제, 에러메세지 삭제(.Mui-error.joy-7l9mu1)
        if (emailRegex.test(document.querySelector("#\\:r0\\:").value)) {
            emailFlag = true;
            if (e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.contains("Mui-error")) {
                e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.remove("Mui-error");
            }
            if (e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.contains("Mui-focused")) {
                e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.remove("Mui-focused");
            }
            if (e.target.closest(".joy-k54e1s").querySelector(".Mui-error.joy-7l9mu1")) {
                e.target.closest(".joy-k54e1s").querySelector(".Mui-error.joy-7l9mu1").remove();
            }
            // 입력이 모두 완성된 경우 회원가입 버튼 활성화
            document.querySelector(".joy-1u9v5nm").removeAttribute("disabled");
            document.querySelector(".joy-1u9v5nm").classList.remove("Mui-disabled");
            // 이메일 비정상 입력 :: 이메일 플래그 false, Mui-error 클래스명 추가, 에러메세지 추가(.Mui-error.joy-7l9mu1)
        } else {
            emailFlag = false;
            if (!e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.contains("Mui-error")) {
                e.target.closest(".joy-k54e1s").querySelector(".joy-i4zyc6").classList.add("Mui-error");
            }
            if (!e.target.closest(".joy-k54e1s").querySelector(".Mui-error.joy-7l9mu1")) {
                const helperTextDiv = document.createElement("div");
                helperTextDiv.setAttribute("aria-live", "assertive");
                helperTextDiv.setAttribute("class", "MuiFormHelperText-root Mui-error joy-7l9mu1");
                helperTextDiv.setAttribute("id", ":r0:-helper-text");
                helperTextDiv.textContent = "이메일을 입력해 주세요.";
                e.target.closest(".joy-k54e1s").appendChild(helperTextDiv);
            }
            if (!document.querySelector(".joy-1u9v5nm").classList.contains("Mui-disabled")) {
                document.querySelector(".joy-1u9v5nm").classList.add("Mui-disabled");
                document.querySelector(".joy-1u9v5nm").setAttribute("disabled", "");
            }
        }
    });

    // 뒤로가기 버튼 클릭 :: 로그인 첫 페이지로 이동
    document.querySelector(".joy-a3xbg1").addEventListener("click", () => {
        window.location.href = "../login/login.html";
    });
});
