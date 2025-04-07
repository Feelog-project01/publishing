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

    // 목록 클릭 이벤트 => 메세지 입력 모달창 보여주기
    document.querySelectorAll(".joy-j7qwjs").forEach((title) => {
        title.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".MuiModal-root.joy-8ijia1").style.display = "block";
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
    document.querySelector(".joy-18i8jzi").addEventListener("click", (e) => {
        // 새로 생성된 말풍선 만들기
        const speechBubble = document.createElement("div");
        speechBubble.classList.add("MuiStack-root", "joy-1udr1jv");
        speechBubble.innerHTML = `
            <div class="MuiStack-root joy-1y9kyp6">
                <div class="MuiStack-root joy-e6pf26">
                    <button
                        class="MuiIconButton-root MuiIconButton-variantPlain MuiIconButton-colorNeutral MuiIconButton-sizeSm joy-ozngwz  delete-button"
                        type="button"
                    >
                        <svg
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="MuiSvgIcon-root MuiSvgIcon-sizeMd joy-s1s0o1"
                        >
                            <path
                                d="M10.168 3.875h3.66a.31.31 0 0 1 .262.14l.742 1.11H9.168l.742-1.11a.319.319 0 0 1 .262-.14h-.004Zm6.918 1.25-1.434-2.152A2.196 2.196 0 0 0 13.832 2h-3.664c-.73 0-1.414.367-1.82.973L6.914 5.125H4.187a.935.935 0 0 0-.937.938c0 .519.418.937.938.937h.453l.937 12.684A2.502 2.502 0 0 0 8.07 22h7.86a2.502 2.502 0 0 0 2.492-2.316L19.359 7h.453c.52 0 .938-.418.938-.938a.935.935 0 0 0-.938-.937h-2.726ZM17.48 7l-.93 12.547a.624.624 0 0 1-.625.578H8.07a.63.63 0 0 1-.625-.578L6.52 7h10.96Z"
                                fill="currentcolor"
                            ></path>
                        </svg>
                    </button>
                    <div class="MuiBox-root joy-3diwkv">
                        <span class="MuiTypography-root MuiTypography-body-md joy-1kp8wdt">${
                            document.querySelector("textarea.joy-1qmqn4r").value
                        }</span>
                    </div>
                </div>
                 <p class="MuiTypography-root MuiTypography-body-xs joy-9nvto4">2025. 4. 2. 15:28</p>
            </div>`;
        // 새로 생성된 말풍선 삽입
        document.querySelector(".joy-1fptnyw").appendChild(speechBubble);
    });

    document.body.addEventListener("click", (e) => {
        // 삭제 버튼 클릭 이벤트
        if (e.target.closest(".delete-button")) {
            e.preventDefault();
            // 확인 모달창 생성
            conformModal = document.createElement("div");
            conformModal.classList.add("MuiModal-root", "joy-8ijia1");
            conformModal.innerHTML = `
            <div aria-hidden="true" open="" class="MuiModal-backdrop joy-qivq4z"></div>
            <div tabindex="0" data-testid="sentinelStart"></div>
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby=":r27:"
                aria-describedby=":r28:"
                tabindex="-1"
                class="MuiModalDialog-root MuiModalDialog-variantOutlined MuiModalDialog-colorNeutral MuiModalDialog-sizeMd MuiModalDialog-layoutAlert joy-1u2eg80"
            >
                <h2 id=":r27:" data-first-child="" class="MuiDialogTitle-root MuiDialogTitle-title-lg joy-196uakj">
                    확인
                </h2>
                <button
                    aria-label="닫기"
                    class="MuiModalClose-root MuiModalClose-variantPlain MuiModalClose-colorNeutral MuiModalClose-sizeMd joy-18efofp"
                    type="button"
                >
                    <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="CloseIcon"
                        class="MuiSvgIcon-root MuiSvgIcon-sizeMd joy-c6bb0f"
                    >
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                </button>
                <div id=":r28:" class="MuiDialogContent-root joy-1cscwg4">
                    해당 메시지를 삭제할까요? 메시지는 나에게서만 삭제되며 삭제된 메시지는 복구할 수 없어요.
                </div>
                <div data-last-child="" class="MuiDialogActions-root joy-gh62p7">
                    <button
                        class="MuiButton-root MuiButton-variantSolid MuiButton-colorPrimary MuiButton-sizeMd joy-10kto0v"
                        type="button"
                    >
                        네
                    </button>
                    <button
                        class="MuiButton-root MuiButton-variantSoft MuiButton-colorNeutral MuiButton-sizeMd joy-1bxt4bb"
                        type="button"
                    >
                        아니요
                    </button>
                </div>
            </div>
            <div tabindex="0" data-testid="sentinelEnd"></div>`;

            // 확인 모달창 삽입
            document.body.appendChild(conformModal);
        }

        // 신고 버튼 클릭시 이벤트
        if (e.target.closest(".report-button")) {
            e.preventDefault();

            // 확인 모달창 생성
            conformModal = document.createElement("div");
            conformModal.classList.add("MuiModal-root", "joy-8ijia1");
            conformModal.innerHTML = `
            <div aria-hidden="true" open="" class="MuiModal-backdrop joy-qivq4z"></div>
            <div tabindex="0" data-testid="sentinelStart"></div>
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby=":r2b:"
                aria-describedby=":r2c:"
                tabindex="-1"
                class="MuiModalDialog-root MuiModalDialog-variantOutlined MuiModalDialog-colorNeutral MuiModalDialog-sizeMd MuiModalDialog-layoutAlert joy-1u2eg80"
            >
                <h2 id=":r2b:" data-first-child="" class="MuiDialogTitle-root MuiDialogTitle-title-lg joy-196uakj">
                    확인
                </h2>
                <button
                    aria-label="닫기"
                    class="MuiModalClose-root MuiModalClose-variantPlain MuiModalClose-colorNeutral MuiModalClose-sizeMd joy-18efofp"
                    type="button"
                >
                    <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="CloseIcon"
                        class="MuiSvgIcon-root MuiSvgIcon-sizeMd joy-c6bb0f"
                    >
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                </button>
                <div id=":r2c:" class="MuiDialogContent-root joy-1cscwg4">
                    해당 메시지를 신고할까요?
                </div>
                <div data-last-child="" class="MuiDialogActions-root joy-gh62p7">
                    <button
                        class="MuiButton-root MuiButton-variantSolid MuiButton-colorPrimary MuiButton-sizeMd joy-10kto0v"
                        type="button"
                    >
                        네
                    </button>
                    <button
                        class="MuiButton-root MuiButton-variantSoft MuiButton-colorNeutral MuiButton-sizeMd joy-1bxt4bb"
                        type="button"
                    >
                        아니요
                    </button>
                </div>
            </div>
            <div tabindex="0" data-testid="sentinelEnd"></div>`;

            // 확인 모달창 삽입
            document.body.appendChild(conformModal);
        }

        // 케밥 메뉴 클릭 이벤트 :: 메세지 차단, 대화방 삭제
        if (e.target.closest(".joy-14llzfj")) {
            e.preventDefault();

            if (e.target.closest(".joy-14llzfj").classList.contains("expanded")) {
                document.querySelector(".joy-1pphr02").remove();
                e.target.closest(".joy-14llzfj").classList.remove("expanded");
                return;
            }

            // 메세지 차단, 대화방 삭제 모달창 생성// 요소 생성 스크립트
            const menuElement = document.createElement("ul");
            menuElement.setAttribute("role", "menu");
            menuElement.setAttribute("tabindex", "-1");
            menuElement.setAttribute("id", ":r19:");
            menuElement.setAttribute(
                "class",
                "base-Popper-root MuiMenu-root Mui-expanded MuiMenu-variantPlain MuiMenu-colorNeutral MuiMenu-sizeMd joy-1pphr02"
            );
            menuElement.setAttribute(
                "style",
                "position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(-270px, 101px);"
            );
            menuElement.setAttribute("data-popper-placement", "bottom-end");
            menuElement.innerHTML = `
                <li
                    tabindex="0"
                    id=":r79:"
                    role="menuitem"
                    data-first-child=""
                    class="MuiMenuItem-root MuiMenuItem-colorNeutral MuiMenuItem-variantPlain joy-ax57yv"
                >
                    메시지 차단
                </li>
                <li
                    tabindex="-1"
                    id=":r7b:"
                    role="menuitem"
                    data-last-child=""
                    class="MuiMenuItem-root MuiMenuItem-colorNeutral MuiMenuItem-variantPlain joy-16nydwy"
                >
                    대화방 삭제
                </li>`;

            // 메세지 차단, 대화방 삭제 모달창 삽입
            document.body.appendChild(menuElement);
            e.target.closest(".joy-14llzfj").classList.add("expanded");
        }

        // 메세지 차단 클릭 이벤트
        if (e.target.classList.contains("joy-ax57yv")) {
            e.preventDefault();

            // 케밥 메뉴 삭제
            document.querySelector(".joy-1pphr02").remove();
            document.querySelector(".joy-14llzfj").classList.remove("expanded");

            // 확인 모달창 생성
            conformModal = document.createElement("div");
            conformModal.classList.add("MuiModal-root", "joy-8ijia1");
            conformModal.innerHTML = `
                <div aria-hidden="true" open="" class="MuiModal-backdrop joy-qivq4z"></div>
                <div tabindex="0" data-testid="sentinelStart"></div>
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby=":rq:"
                    aria-describedby=":rr:"
                    tabindex="-1"
                    class="MuiModalDialog-root MuiModalDialog-variantOutlined MuiModalDialog-colorNeutral MuiModalDialog-sizeMd MuiModalDialog-layoutAlert joy-1u2eg80"
                >
                    <h2 id=":rq:" data-first-child="" class="MuiDialogTitle-root MuiDialogTitle-title-lg joy-196uakj">
                        확인
                    </h2>
                    <button
                        aria-label="닫기"
                        class="MuiModalClose-root MuiModalClose-variantPlain MuiModalClose-colorNeutral MuiModalClose-sizeMd joy-18efofp"
                        type="button"
                    >
                        <svg
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="CloseIcon"
                            class="MuiSvgIcon-root MuiSvgIcon-sizeMd joy-c6bb0f"
                        >
                            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        </svg>
                    </button>
                    <div id=":rr:" class="MuiDialogContent-root joy-1cscwg4">
                        해당 이용자를 차단할까요?
                    </div>
                    <div data-last-child="" class="MuiDialogActions-root joy-gh62p7">
                        <button
                            class="MuiButton-root MuiButton-variantSolid MuiButton-colorPrimary MuiButton-sizeMd joy-10kto0v"
                            type="button"
                        >
                            네
                        </button>
                        <button
                            class="MuiButton-root MuiButton-variantSoft MuiButton-colorNeutral MuiButton-sizeMd joy-1bxt4bb"
                            type="button"
                        >
                            아니요
                        </button>
                    </div>
                </div>
                <div tabindex="0" data-testid="sentinelEnd"></div>`;

            // 확인 모달창 삽입
            document.body.appendChild(conformModal);
        }

        // 대화방 삭제 클릭 이벤트
        if (e.target.classList.contains("joy-16nydwy")) {
            e.preventDefault();

            // 케밥 메뉴 삭제
            document.querySelector(".joy-1pphr02").remove();
            document.querySelector(".joy-14llzfj").classList.remove("expanded");

            // 확인 모달창 생성
            conformModal = document.createElement("div");
            conformModal.classList.add("MuiModal-root", "joy-8ijia1");
            conformModal.innerHTML = `
                <div aria-hidden="true" open="" class="MuiModal-backdrop joy-qivq4z"></div>
                <div tabindex="0" data-testid="sentinelStart"></div>
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby=":rq:"
                    aria-describedby=":rr:"
                    tabindex="-1"
                    class="MuiModalDialog-root MuiModalDialog-variantOutlined MuiModalDialog-colorNeutral MuiModalDialog-sizeMd MuiModalDialog-layoutAlert joy-1u2eg80"
                >
                    <h2 id=":rq:" data-first-child="" class="MuiDialogTitle-root MuiDialogTitle-title-lg joy-196uakj">
                        확인
                    </h2>
                    <button
                        aria-label="닫기"
                        class="MuiModalClose-root MuiModalClose-variantPlain MuiModalClose-colorNeutral MuiModalClose-sizeMd joy-18efofp"
                        type="button"
                    >
                        <svg
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="CloseIcon"
                            class="MuiSvgIcon-root MuiSvgIcon-sizeMd joy-c6bb0f"
                        >
                            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        </svg>
                    </button>
                    <div id=":r1t:" class="MuiDialogContent-root joy-1cscwg4">
                        대화방을 삭제하시겠어요? 대화 내역은 나에게서만 삭제되며 삭제된 대화방은 복구할 수 없어요.
                    </div>
                    <div data-last-child="" class="MuiDialogActions-root joy-gh62p7">
                        <button
                            class="MuiButton-root MuiButton-variantSolid MuiButton-colorPrimary MuiButton-sizeMd joy-10kto0v"
                            type="button"
                        >
                            네
                        </button>
                        <button
                            class="MuiButton-root MuiButton-variantSoft MuiButton-colorNeutral MuiButton-sizeMd joy-1bxt4bb"
                            type="button"
                        >
                            아니요
                        </button>
                    </div>
                </div>
                <div tabindex="0" data-testid="sentinelEnd"></div>`;

            // 확인 모달창 삽입
            document.body.appendChild(conformModal);
        }

        // 모달창의 네, 아니요, x 버튼 클릭시  이벤트 :: 모달창 삭제
        if (e.target.closest(".joy-c6bb0f") || e.target.closest(".joy-gh62p7")) {
            // 클릭된 모달화면 전체 삭제
            if (e.target.closest(".MuiModal-root.joy-8ijia1").style.display) {
                document.querySelector(".MuiModal-root.joy-8ijia1").style.display = "none";
            } else {
                e.target.closest(".MuiModal-root.joy-8ijia1").remove();
            }
        }

        // 네 버튼 클릭시 :: 서버에 갔다 온 후 메세지를 다르게 변경하고, 동의 한 내용에 따라 다른 액션 실시
        if (e.target.classList.contains("joy-10kto0v")) {
            e.preventDefault();

            // 확인 버튼 클릭시 :: 최종 결과를 보여주는 창에만 뜨는 버튼 명
            if (e.target.textContent.trim() == "확인") {
                e.target.closest(".MuiModal-root.joy-8ijia1").remove();
                return;
            }

            // 서버 결과 보여주는 창 생성
            conformModal = document.createElement("div");
            conformModal.classList.add("MuiModal-root", "joy-8ijia1");
            conformModal.innerHTML = `
                <div aria-hidden="true" open="" class="MuiModal-backdrop joy-qivq4z"></div>
                <div tabindex="0" data-testid="sentinelStart"></div>
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby=":r28:"
                    aria-describedby=":r29:"
                    tabindex="-1"
                    class="MuiModalDialog-root MuiModalDialog-variantOutlined MuiModalDialog-colorNeutral MuiModalDialog-sizeMd MuiModalDialog-layoutAlert joy-1u2eg80"
                >
                    <h2 id=":r28:" data-first-child="" class="MuiDialogTitle-root MuiDialogTitle-title-lg joy-196uakj">
                        알림
                    </h2>
                    <button
                        aria-label="닫기"
                        class="MuiModalClose-root MuiModalClose-variantPlain MuiModalClose-colorNeutral MuiModalClose-sizeMd joy-18efofp"
                        type="button"
                    >
                        <svg
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="CloseIcon"
                            class="MuiSvgIcon-root MuiSvgIcon-sizeMd joy-c6bb0f"
                        >
                            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        </svg>
                    </button>
                    <div id=":r29:" class="MuiDialogContent-root joy-1cscwg4">
                        이미 차단한 이용자예요.
                    </div>
                    <div data-last-child="" class="MuiDialogActions-root joy-gh62p7">
                        <button
                            class="MuiButton-root MuiButton-variantSolid MuiButton-colorPrimary MuiButton-sizeMd joy-10kto0v"
                            type="button"
                        >
                            확인
                        </button>
                    </div>
                </div>
                <div tabindex="0" data-testid="sentinelEnd"></div>`;

            // 확인 모달창 삽입
            document.body.appendChild(conformModal);
        }
    });
});
