document.addEventListener("DOMContentLoaded", function() {
    // 1. Definicja wspólnego nagłówka (Menu)
    const headerHTML = `
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand fs-3" href="index.html">CeraSfera.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Przełącz nawigację">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav align-items-lg-center">
                        <li class="nav-item"><a class="nav-link px-3" href="index.html#o-nas">O nas</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="sklep.html">Sklep</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="blog.html">Blog</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="index.html#kontakt">Kontakt</a></li>
                        <!-- Ikony e-commerce -->
                        <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
                            <a class="nav-link px-2 d-inline-block" href="konto.html" title="Konto użytkownika">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                            </a>
                            <a class="nav-link px-2 d-inline-block position-relative" href="koszyk.html" title="Koszyk">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                                  <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
                                </svg>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark badge-cart">2</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>`;

    // 2. Definicja wspólnej stopki
    const footerHTML = `
    <footer class="bg-dark text-white text-center py-4 mt-5">
        <div class="container">
            <h5 class="mb-3 text-white">CeraSfera.</h5>
            <p class="mb-1 text-secondary small">NIP: 1234567890 | REGON: 123456789</p>
            <p class="mb-0 text-secondary small">&copy; 2026 CeraSfera. Wszelkie prawa zastrzeżone.</p>
        </div>
    </footer>`;

    // 3. Wstrzykiwanie nagłówka i stopki do znaczników w plikach HTML
    const headerPlaceholder = document.getElementById('site-header');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    const footerPlaceholder = document.getElementById('site-footer');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 1. Definicja wspólnego nagłówka (Menu)
    const headerHTML = `
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand fs-3" href="index.html">CeraSfera.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Przełącz nawigację">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav align-items-lg-center">
                        <li class="nav-item"><a class="nav-link px-3" href="index.html#o-nas">O nas</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="sklep.html">Sklep</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="blog.html">Blog</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="kontakt.html">Kontakt</a></li>
                        <!-- Ikony e-commerce -->
                        <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
                            <a class="nav-link px-2 d-inline-block" href="konto.html" title="Konto użytkownika">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                            </a>
                            <a class="nav-link px-2 d-inline-block position-relative" href="koszyk.html" title="Koszyk">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                                  <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
                                </svg>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark badge-cart">2</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>`;

    // 2. Definicja rozbudowanej 4-kolumnowej stopki korporacyjnej
    const footerHTML = `
    <footer class="bg-dark text-white pt-5 pb-3 mt-5">
        <div class="container">
            <div class="row g-4 mb-4">
                <!-- Kolumna 1: O marce -->
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-3">CeraSfera.</h5>
                    <p class="text-secondary small mb-3">Autorska pracownia ceramiki artystycznej i użytkowej. Tworzymy unikalne naczynia formowane ręcznie na kole garncarskim z pasją do naturalnego rzemiosła.</p>
                    <div class="d-flex gap-3">
                        <a href="#" class="text-secondary text-decoration-none"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="text-secondary text-decoration-none"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="text-secondary text-decoration-none"><i class="bi bi-pinterest"></i></a>
                    </div>
                </div>

                <!-- Kolumna 2: Szybka nawigacja -->
                <div class="col-lg-3 col-md-6">
                    <h6 class="text-white mb-3 fw-bold">Szybka nawigacja</h6>
                    <ul class="list-unstyled small">
                        <li class="mb-2"><a href="index.html" class="text-secondary text-decoration-none">Strona główna</a></li>
                        <li class="mb-2"><a href="index.html#o-nas" class="text-secondary text-decoration-none">O nas</a></li>
                        <li class="mb-2"><a href="sklep.html" class="text-secondary text-decoration-none">Oferta / Sklep</a></li>
                        <li class="mb-2"><a href="blog.html" class="text-secondary text-decoration-none">Blog</a></li>
                        <li class="mb-2"><a href="kontakt.html" class="text-secondary text-decoration-none">Kontakt</a></li>
                    </ul>
                </div>

                <!-- Kolumna 3: Strefa klienta / Sklep -->
                <div class="col-lg-3 col-md-6">
                    <h6 class="text-white mb-3 fw-bold">Strefa klienta</h6>
                    <ul class="list-unstyled small">
                        <li class="mb-2"><a href="sklep.html" class="text-secondary text-decoration-none">Katalog produktów</a></li>
                        <li class="mb-2"><a href="koszyk.html" class="text-secondary text-decoration-none">Koszyk zakupowy</a></li>
                        <li class="mb-2"><a href="konto.html" class="text-secondary text-decoration-none">Moje konto / Panel klienta</a></li>
                        <li class="mb-2"><a href="polityka-prywatnosci.html" class="text-secondary text-decoration-none">Polityka prywatności</a></li>
                    </ul>
                </div>

                <!-- Kolumna 4: Newsletter i kontakt -->
                <div class="col-lg-3 col-md-6">
                    <h6 class="text-white mb-3 fw-bold">Newsletter</h6>
                    <p class="text-secondary small mb-2">Zapisz się, aby otrzymywać informacje o nowych kolekcjach i rabatach.</p>
                    <div class="input-group input-group-sm mb-3">
                        <input type="email" class="form-control" placeholder="Twój e-mail">
                        <button class="btn btn-outline-light" type="button">OK</button>
                    </div>
                    <p class="text-secondary small mb-0"><i class="bi bi-envelope me-1"></i> kontakt@cerasfera.pl</p>
                    <p class="text-secondary small mb-0"><i class="bi bi-telephone me-1"></i> +48 22 123 45 67</p>
                </div>
            </div>

            <!-- Dolny pasek prawny -->
            <div class="border-top border-secondary pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary">
                <p class="mb-2 mb-md-0">&copy; 2026 CeraSfera. Wszelkie prawa zastrzeżone.</p>
                <p class="mb-0">Projekt i wykonanie: Zespół CeraSfera &bull; <a href="polityka-prywatnosci.html" class="text-secondary text-decoration-underline">Polityka prywatności</a></p>
            </div>
        </div>
    </footer>`;

    // 3. Wstrzykiwanie nagłówka i stopki do znaczników w plikach HTML
    const headerPlaceholder = document.getElementById('site-header');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    const footerPlaceholder = document.getElementById('site-footer');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});
