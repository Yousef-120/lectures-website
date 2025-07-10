document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleMode");

  // 🧠 استرجع الوضع المحفوظ (لو موجود)
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }

  // 🌓 تبديل الوضع وتحديث localStorage
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("mode", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

  // 📩 تشغيل فورم التسليم داخل كل كارت
  document.querySelectorAll(".card").forEach((card) => {
    const toggleFormBtn = card.querySelector(".toggle-form-btn");
    const form = card.querySelector(".task-form");
    const lectureTitle = card.querySelector("h3");
    const lectureInput = card.querySelector(".lecture-input");

    if (toggleFormBtn && form && lectureInput && lectureTitle) {
      toggleFormBtn.addEventListener("click", () => {
        form.classList.toggle("hidden");
        lectureInput.value = lectureTitle.textContent.trim();

        // تحديث شكل الزر حسب الحالة
        toggleFormBtn.textContent = form.classList.contains("hidden")
          ? "⬇️ Submit Task"
          : "⬆️ Close";
      });
    }
  });

  // 📺 تشغيل عرض الفيديو عند الضغط على View Lecture
  document.querySelectorAll(".view-lecture-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const videoUrl = this.dataset.video;
      const videoSection = document.getElementById("video-section");
      const iframe = document.getElementById("lecture-video");

      if (videoUrl && iframe && videoSection) {
        iframe.src = videoUrl;
        videoSection.classList.remove("hidden");
        videoSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
