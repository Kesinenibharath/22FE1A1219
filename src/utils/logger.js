export const logEvent = (message, data = {}) => {
    const log = { time: new Date().toISOString(), message, data };
    const logs = JSON.parse(localStorage.getItem("logs") || "[]");
    logs.push(log);
    localStorage.setItem("logs", JSON.stringify(logs));
  };
  