function updateProgressBars() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
  const endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 7));
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  const yearProgress = (now - startOfYear) / (endOfYear - startOfYear);
  const monthProgress = (now - startOfMonth) / (endOfMonth - startOfMonth);
  const weekProgress = (now - startOfWeek) / (endOfWeek - startOfWeek);
  const dayProgress = (now - startOfDay) / (endOfDay - startOfDay);

  document.getElementById('year-progress').style.width = `${(
