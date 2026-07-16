
    const profileModal = document.getElementById("profileModal");
    const modalName = document.getElementById("modalName");
    const modalStrategy = document.getElementById("modalStrategy");
    const modalStats = document.getElementById("modalStats");
    const closeModal = document.getElementById("closeModal");
    const modalActionBtn = document.getElementById("modalActionBtn");

    // Select all buttons inside our roster grid layout
    const triggers = document.querySelectorAll(".profile-trigger");

    if (profileModal && modalName && modalStrategy && modalStats) {
        triggers.forEach(button => {
            button.addEventListener("click", () => {
                // Extract custom information values directly from data properties
                const name = button.getAttribute("data-name");
                const strategy = button.getAttribute("data-strategy");
                const stats = button.getAttribute("data-stat");

                // Inject text values dynamically into the popup window box strings
                modalName.textContent = name;
                modalStrategy.textContent = strategy;
                modalStats.textContent = stats;

                // Make the popup panel appear using flex display properties
                profileModal.style.display = "flex";
            });
        });

        // Hide profile popups helper functions
        const hideModal = () => { profileModal.style.display = "none"; };
        if (closeModal) closeModal.addEventListener("click", hideModal);
        if (modalActionBtn) modalActionBtn.addEventListener("click", hideModal);
        
        // Hide panel automatically if user clicks the backdrop area
        profileModal.addEventListener("click", (e) => {
            if (e.target === profileModal) hideModal();
        });
    }
