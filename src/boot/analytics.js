export default {
  logEvent(category, action, label, sessionId = null) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      appEventCategory: category,
      appEventAction: action,
      appEventLabel: label,
      sessionId: sessionId
    });
    dataLayer.push({ event: "appEvent" });
  },

  logPage(path, name, sessionId = null) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      screenPath: path,
      screenName: name,
      sessionId: sessionId
    });
    dataLayer.push({ event: "appScreenView" });
  }
};
