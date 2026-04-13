document.addEventListener("DOMContentLoaded", async (e) => {
  const userInfoContainer = document.querySelector(".employee-info");
  const welcomeHeader = document.querySelector(".header h1");

  const API_URL = "http://localhost:5029/api/v1/team/all";
  // const userId = 1

  userInfoContainer.innerHTML = `<p>⏳ Загрузка данных...</p>`;

  try {
    const userResponse = await fetch(`${API_URL}`);
    const userData = await userResponse.json();

    welcomeHeader.innerHTML = `👋 Добро пожаловать, ${userData.name}!`;
    userInfoContainer.innerHTML = `
    <span>Команда:</span>
    <strong>Команда друзей GEMS</strong>
    <span>Грейд:</span>
    <strong>123</strong>
    <span>Телеграм:</span>
    <strong>@${userData.username.toLowerCase()}</strong>
    <span>Почта:</span>
    <strong>${userData.email}</strong>
    `
    
  } catch (error) {
    console.error("Ошибка:", error);
    userInfoContainer.innerHTML=`<p>${error.message}</p>`
    welcomeHeader.innerHTML = `👋 Добро пожаловать, Гость!`
  }
});
