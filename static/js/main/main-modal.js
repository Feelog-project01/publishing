// // 상단 오른쪽 시작지점 모달 창 ===========================

// const modal = document.getElementById("customModal");
// const openBtn = document.getElementById("openModalBtn");
// const closeBtn = document.querySelector(".feelog-header-mdl-closebtn"); // 닫기 아이콘 버튼
// const backdrop = document.querySelector(".feelog-header-mdl-div01"); // 모달 바깥 영역

// // 열기 버튼 클릭 시
// openBtn.addEventListener("click", () => {
//     modal.style.display = "flex";
// });

// // 닫기 버튼 클릭 시
// closeBtn.addEventListener("click", () => {
//     modal.style.display = "none";
// });

// // 모달 바깥(backdrop) 클릭 시 닫기
// backdrop.addEventListener("click", () => {
//     modal.style.display = "none";
// });

// // 오른쪽 상단 프로필 사진 클릭 + 위치 계산 ===========================

// const avatarBtn = document.getElementById("avatar-button");
// const profileMenu = document.getElementById("profile-menu");

// function toggleProfileMenu(e) {
//     e.stopPropagation(); // 클릭 이벤트 전파 방지

//     const isVisible = !profileMenu.classList.contains("hidden");

//     if (isVisible) {
//         profileMenu.classList.add("hidden");
//     } else {
//         updateMenuPosition(); // 메뉴 위치 업데이트
//         profileMenu.classList.remove("hidden");
//     }
// }

// // 메뉴 위치 계산 및 업데이트 함수
// function updateMenuPosition() {
//     const rect = avatarBtn.getBoundingClientRect(); // 아바타 버튼의 위치
//     const menuWidth = profileMenu.offsetWidth; // 메뉴의 너비
//     const viewportWidth = window.innerWidth; // 화면의 너비

//     // 메뉴의 오른쪽 끝을 아바타 버튼의 오른쪽 끝에 맞추기 위해 계산
//     const left = rect.left - 270;
//     const top = rect.bottom + window.scrollY - 35; // 메뉴를 아바타 버튼보다 5px 위로 올림

//     // 화면의 오른쪽 경계를 넘지 않도록 조정
//     const adjustedLeft = Math.min(left, viewportWidth - menuWidth - 8); // 화면의 오른쪽 끝

//     profileMenu.style.position = "absolute";
//     profileMenu.style.left = `${adjustedLeft}px`; // 메뉴의 왼쪽 끝
//     profileMenu.style.top = `${top}px`; // 메뉴의 상단 끝
// }

// // 닫기 함수
// function closeProfileMenu(e) {
//     if (!profileMenu.contains(e.target) && !avatarBtn.contains(e.target)) {
//         profileMenu.classList.add("hidden");
//     }
// }

// // 윈도우 리사이즈 시에도 메뉴 위치 자동 재계산
// window.addEventListener("resize", () => {
//     if (!profileMenu.classList.contains("hidden")) {
//         updateMenuPosition();
//     }
// });

// // 이벤트 연결
// avatarBtn.addEventListener("click", toggleProfileMenu);
// document.addEventListener("click", closeProfileMenu);

fetch("../../templates/main/header.html")
    .then((res) => res.text())
    .then((html) => {
        const container = document.getElementById("header-container");
        container.innerHTML = html;

        // 여기서부터 header DOM이 생성된 이후에 이벤트 연결
        const modal = document.getElementById("customModal");
        const openBtn = document.getElementById("openModalBtn");
        const closeBtn = document.querySelector(".feelog-header-mdl-closebtn");
        const backdrop = document.querySelector(".feelog-header-mdl-div01");

        if (modal && openBtn && closeBtn && backdrop) {
            openBtn.addEventListener("click", () => {
                modal.style.display = "flex";
            });

            closeBtn.addEventListener("click", () => {
                modal.style.display = "none";
            });

            backdrop.addEventListener("click", () => {
                modal.style.display = "none";
            });
        }

        const avatarBtn = document.getElementById("avatar-button");
        const profileMenu = document.getElementById("profile-menu");

        function toggleProfileMenu(e) {
            e.stopPropagation();

            const isVisible = !profileMenu.classList.contains("hidden");
            if (isVisible) {
                profileMenu.classList.add("hidden");
            } else {
                updateMenuPosition();
                profileMenu.classList.remove("hidden");
            }
        }

        function updateMenuPosition() {
            const rect = avatarBtn.getBoundingClientRect();
            const menuWidth = profileMenu.offsetWidth;
            const viewportWidth = window.innerWidth;

            const left = rect.left - 270;
            const top = rect.bottom - 35;

            const adjustedLeft = Math.min(left, viewportWidth - menuWidth - 8);

            profileMenu.style.position = "absolute";
            profileMenu.style.left = `${adjustedLeft}px`;
            profileMenu.style.top = `${top}px`;
        }

        function closeProfileMenu(e) {
            if (!profileMenu.contains(e.target) && !avatarBtn.contains(e.target)) {
                profileMenu.classList.add("hidden");
            }
        }

        if (avatarBtn && profileMenu) {
            avatarBtn.addEventListener("click", toggleProfileMenu);
            document.addEventListener("click", closeProfileMenu);
            window.addEventListener("resize", () => {
                if (!profileMenu.classList.contains("hidden")) {
                    updateMenuPosition();
                }
            });
        }

        // ======= 추가된 검색 모달 기능 시작 =======

        const searchBtn = document.querySelector(".search-btn");
        const searchMain = document.querySelector(".search-main");
        const searchCloseBtn = document.querySelector(".search-close-btn");
        const searchFilterBtn = document.querySelector(".search-filterBtn");
        const searchFilterModal = document.querySelector(".search-filter");
        const searchFilterCloseBtn = document.querySelector(".search-filterBtn-close");
        const searchFilterCloseBtn2 = document.querySelector(".search-filterBtn-close2");
        const searchBackdrop = document.querySelector(".joy-qivq4z");

        // 검색 메인 모달 열기
        if (searchBtn && searchMain) {
            searchBtn.addEventListener("click", () => {
                searchMain.classList.remove("hidden");
                document.body.style.overflow = "hidden";
            });
        }

        // 검색 메인 모달 닫기
        if (searchCloseBtn && searchMain) {
            searchCloseBtn.addEventListener("click", () => {
                searchMain.classList.add("hidden");
                document.body.style.overflow = "auto";
            });
        }

        // 검색 필터 모달 열기
        if (searchFilterBtn && searchFilterModal && searchBackdrop) {
            searchFilterBtn.addEventListener("click", () => {
                searchFilterModal.classList.remove("hidden");
                searchBackdrop.classList.remove("hidden");
            });
        }

        // 검색 필터 모달 닫기 (닫기 버튼 클릭)
        if (searchFilterCloseBtn && searchFilterModal && searchFilterCloseBtn2 && searchBackdrop) {
            searchFilterCloseBtn.addEventListener("click", () => {
                searchFilterModal.classList.add("hidden");
                searchBackdrop.classList.add("hidden");
            });
            searchFilterCloseBtn2.addEventListener("click", () => {
                searchFilterModal.classList.add("hidden");
                searchBackdrop.classList.add("hidden");
            });
        }

        // 검색 필터 모달 닫기 (회색 배경 클릭)
        if (searchBackdrop && searchFilterModal) {
            searchBackdrop.addEventListener("click", () => {
                searchFilterModal.classList.add("hidden");
                searchBackdrop.classList.add("hidden");
            });
        }

        // ======= 추가된 검색 모달 기능 끝 =======
        const button = document.getElementById("notificationBtn");
        const menu = document.getElementById("notificationMenu");

        if (button && menu) {
            button.addEventListener("click", toggleMenu);
            document.addEventListener("click", function (e) {
                if (!menu.contains(e.target) && !button.contains(e.target)) {
                    closeMenu();
                }
            });
        }

        // 메뉴 열림 상태 체크 변수
        let isOpen = false;

        function toggleProfileMenu(e) {
            e.stopPropagation();

            // 🔒 알림 메뉴가 열려 있으면 닫기
            if (isOpen) {
                closeMenu(); // 메뉴 상태값까지 같이 닫기
            }

            const isVisible = !profileMenu.classList.contains("hidden");
            if (isVisible) {
                profileMenu.classList.add("hidden");
            } else {
                updateMenuPosition();
                profileMenu.classList.remove("hidden");
            }
        }

        // 메뉴 닫기
        function closeMenu() {
            if (isOpen) {
                isOpen = false;
                menu.style.display = "none";
            }
        }

        // 버튼 클릭 시 토글
        button.addEventListener("click", toggleMenu);

        // 메뉴 바깥 클릭 시 닫기
        document.addEventListener("click", function (e) {
            const isClickInside =
                menu.contains(e.target) || button.contains(e.target);
            if (!isClickInside) {
                closeMenu();
            }
        });

        function updateNotificationMenuPosition() {
            const rect = button.getBoundingClientRect();
            const menuWidth = menu.offsetWidth;
            const viewportWidth = window.innerWidth;

            const left = rect.left - 440;
            const top = rect.bottom + 14; // 버튼 아래 8px 정도

            const adjustedLeft = Math.min(left, viewportWidth - menuWidth - 8);

            menu.style.position = "absolute";
            menu.style.left = `${adjustedLeft}px`;
            menu.style.top = `${top}px`;
        }

        function toggleMenu(e) {
            e.stopPropagation();

            // 프로필 메뉴가 열려 있으면 닫기
            if (!profileMenu.classList.contains("hidden")) {
                profileMenu.classList.add("hidden");
            }

            isOpen = !isOpen;
            if (isOpen) {
                updateNotificationMenuPosition();
                menu.style.display = "block";
            } else {
                menu.style.display = "none";
            }
        }

        window.addEventListener("resize", () => {
            if (isOpen) {
                updateNotificationMenuPosition();
            }
        });

        const markAllAsReadBtn = document.querySelector(".joy-fsdjpg");
        const allBadges = document.querySelectorAll(".joy-yhhqut");
        const topCount = document.querySelector(".feelog-header-topSpan01");

        if (markAllAsReadBtn) {
            markAllAsReadBtn.addEventListener("click", () => {
                allBadges.forEach((badge) => (badge.style.display = "none"));
                if (topCount) topCount.style.display = "none";
            });
        }
    });
