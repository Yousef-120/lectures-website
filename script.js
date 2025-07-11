document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleMode");

  // استرجاع الوضع المحفوظ
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }

  // تبديل الوضع
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("mode", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

  // تشغيل فورم التسليم
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const toggleFormBtn = card.querySelector(".toggle-form-btn");
    const form = card.querySelector(".task-form");
    const lectureTitle = card.querySelector("h3");
    const lectureInput = card.querySelector(".lecture-input");

    if (toggleFormBtn && form && lectureInput && lectureTitle) {
      toggleFormBtn.addEventListener("click", () => {
        form.classList.toggle("hidden");
        lectureInput.value = lectureTitle.textContent.trim();
        toggleFormBtn.textContent = form.classList.contains("hidden")
          ? "⬇️ Submit Task"
          : "⬆️ Close";
      });
    }
  });
});
