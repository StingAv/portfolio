document.addEventListener("DOMContentLoaded", async (e) => {
  const userInfoContainer = document.querySelector(".employee-info");
  const welcomeHeader = document.querySelector(".header h1");

  const API_URL = "http://localhost:5029/api/v2/employee/all";
  // const userId =

  userInfoContainer.innerHTML = `<p>⏳ Загрузка данных...</p>`;

  try {
    const userResponse = await fetch(`${API_URL}`);
    const userData = await userResponse.json();

    welcomeHeader.innerHTML = `👋 Добро пожаловать, ${userData[0].name}!`;
    userInfoContainer.innerHTML = `
    <span>Команда:</span>
    <strong>${userData[0].name}</strong>
    <span>Грейд:</span>
    <strong>${userData[0].grade}</strong>
    <span>Телеграм:</span>
    <strong>${userData[0].tgChatLink}</strong>
    <span>Почта:</span>
    <strong>${userData[0].email}</strong>
    `
    
  } catch (error) {
    console.error("Ошибка:", error);
    userInfoContainer.innerHTML=`<p>${error.message}</p>`
    welcomeHeader.innerHTML = `👋 Добро пожаловать, Гость!`
  }
});
