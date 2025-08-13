const btAddSkill = document.getElementById("btAddSkill");
const skillContainer = document.getElementById("skill-list");

btAddSkill.addEventListener("click", () => {
    const newSkill = prompt("Nhập kỹ năng mới:");
    if (newSkill && newSkill.trim() !== '') {
        // Kiểm tra kỹ năng đã tồn tại chưa
        const exists = Array.from(skillContainer.children).some(span => span.textContent.toLowerCase() === newSkill.trim().toLowerCase());
        if (exists) {
            alert("Kỹ năng này đã tồn tại");
            return;
        }
        const skillSpan = document.createElement('span');
        skillSpan.classList.add('skill');
        skillSpan.textContent = newSkill.trim();
        skillContainer.appendChild(skillSpan);
    }
});

// Cho phép xóa kỹ năng khi nhấn giữ Ctrl + click
skillContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("skill") && e.ctrlKey) {
        if (confirm(`Bạn có chắc muốn xóa kỹ năng "${e.target.textContent}"?`)) {
            e.target.remove();
        }
    }
});

// Thêm kinh nghiệm
const btAddExperience = document.getElementById("btAddExperience");
const experienceList = document.getElementById("experience-list");

btAddExperience.addEventListener("click", () => {
    const ex = document.getElementById("txtExperience").value;
    const des = document.getElementById("txtDescription").value;
    if (ex.trim() !== "") {
        const dtObj = document.createElement("dt");
        const ddObj = document.createElement("dd");
        dtObj.textContent = ex.trim();
        ddObj.textContent = des.trim();
        experienceList.appendChild(dtObj);
        experienceList.appendChild(ddObj);
        document.getElementById("txtExperience").value = "";
        document.getElementById("txtDescription").value = "";
    }
});
