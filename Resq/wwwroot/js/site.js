// Denne filen inneholder felles interaksjon for layouten.
// Kartet opprettes på Home-siden, mens menyene kontrolleres her slik at
// strukturen i Razor-filen og funksjonaliteten i JavaScript holdes adskilt.

// Vi initierer bindings etter DOMContentLoaded for å sikre at alle elementer
// eksisterer (spesielt viktig for mobil der script kan kjøre før layouten rendres).
function initSiteBindings() {
    if (window.__resq_site_initialized) return;
    window.__resq_site_initialized = true;

    const mainLayout = document.querySelector('.main-layout');
    const sidePanel = document.querySelector('#side-panel');
    const panelButtons = Array.from(document.querySelectorAll('[data-panel-toggle], .panel-close'));

    // Åpner eller lukker sidepanelet og holder knappene oppdatert med samme tilstand.
    function setPanelOpen(isOpen) {
        if (!mainLayout || !sidePanel) {
            return;
        }

        mainLayout.classList.toggle('panel-open', isOpen);
        panelButtons.forEach((button) => {
            button.setAttribute('aria-expanded', String(isOpen));
        });

        const closeButton = sidePanel.querySelector('.panel-close');
        const hiddenLabel = closeButton?.querySelector('.visually-hidden');
        if (hiddenLabel) {
            hiddenLabel.textContent = isOpen ? 'Close side panel' : 'Open side panel';
        }

        // Leaflet må beregne størrelsen på nytt etter at nettleseren har tegnet layouten.
        window.requestAnimationFrame(() => window.resqMap?.invalidateSize());
    }

    // Hver knapp får samme logikk, slik at New incident og lukkeknappen oppfører seg likt.
    panelButtons.forEach((panelButton) => {
        // Direkte lydhørhet på hver knapp gjør funksjonen mer forutsigbar på mobiler.
        panelButton.addEventListener('click', (e) => {
            // På undersidene går knappen først til kartet, der sidepanelet kan åpnes.
            if (!mainLayout || !sidePanel) {
                const homeUrl = panelButton.dataset.homeUrl;
                if (homeUrl) {
                    window.location.href = `${homeUrl}?openIncident=true`;
                }
                return;
            }

            // For å unngå at ikon eller child-elementer stjeler klikket, bruk closest.
            const btn = e.target.closest('[data-panel-toggle], .panel-close');
            if (!btn) return;

            const isOpen = mainLayout.classList.contains('panel-open');
            setPanelOpen(!isOpen);
        });
    });

    // Direkte listener for New Incident (ekstra pålitelighet på mobil)
    const newIncidentBtn = document.getElementById('new-incident-button');
    if (newIncidentBtn) {
        newIncidentBtn.addEventListener('click', (e) => {
            // Hvis vi er på andre sider, la data-home-url håndtere navigering
            if (!mainLayout || !sidePanel) {
                const homeUrl = newIncidentBtn.dataset.homeUrl;
                if (homeUrl) {
                    window.location.href = `${homeUrl}?openIncident=true`;
                }
                return;
            }

            const isOpen = mainLayout.classList.contains('panel-open');
            setPanelOpen(!isOpen);
        });
    }

    // Åpner panelet automatisk når vi kommer fra New incident på en underside.
    if (mainLayout && sidePanel && new URLSearchParams(window.location.search).get('openIncident') === 'true') {
        window.requestAnimationFrame(() => setPanelOpen(true));
    }

    // Escape skal lukke åpne områder slik at tastaturbrukere enkelt kommer videre.
    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') {
            return;
        }

        if (mainLayout?.classList.contains('panel-open')) {
            setPanelOpen(false);
            document.querySelector('.incident-menu-button')?.focus();
        }
    });

    // Kartet må tegnes på nytt dersom vinduet endrer størrelse, for eksempel ved rotasjon.
    window.addEventListener('resize', () => {
        window.resqMap?.invalidateSize();
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteBindings);
} else {
    // Hvis dokumentet allerede er lastet (f.eks. script inkludert nederst i body), init umiddelbart.
    initSiteBindings();
}
