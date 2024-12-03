function showSection(sectionId) {
    // إخفاء كل الأقسام
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
  
    // عرض القسم المطلوب
    document.getElementById(sectionId).classList.add('active');
  
    // تحديث التنقل
    const navLinks = document.querySelectorAll('.nav-bar li a');
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-bar li a[onclick="showSection('${sectionId}')"]`).classList.add('active');
  }
// عند تحميل الصفحة
window.addEventListener("load", function () {
  fetch("http://127.0.0.1:5000/analysis") // تأكد من تشغيل سيرفر Flask
      .then(response => response.json())
      .then(data => {
          const outputDiv = document.getElementById("output");
          data.forEach(item => {
              const resultHtml = `
                  <div class="result-card">
                      <h3>${item.Test}</h3>
                      <p>Result: ${item.Result}</p>
                      <p>Status: ${item.Status}</p>
                      <p>Recommendation: ${item.Recommendation}</p>
                  </div>
              `;
              outputDiv.innerHTML += resultHtml;
          });
      })
      .catch(error => console.error("Error fetching data:", error));
});
