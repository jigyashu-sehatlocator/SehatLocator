document.addEventListener('DOMContentLoaded', () => {
  try {
    const emergencyCards = document.querySelectorAll('.emergency-card');

    if (!emergencyCards || emergencyCards.length === 0) {
      throw new Error("Emergency contact cards are missing or not loaded.");
    }

    emergencyCards.forEach(card => {
      card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
      });

      card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      });
    });

  } catch (error) {
    console.error("⚠️ Error loading Emergency Page:", error.message);
    alert("Some error occurred while loading the emergency contacts. Please try again later.");
  }
});
