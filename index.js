/*
    This code is the intellectual property of the owner.
    Unauthorized editing, removal, updating, adding, duplicating, selling, or reusing of this code is strictly prohibited.
*/

const { links } = dataModule;

document.addEventListener('DOMContentLoaded', () => {
    function getFilterOptions(category) {
        const options = {
            "source": [
                { label: "Twitter", icon: "x-logo", value: "twitter" },
                { label: "Reddit", icon: "reddit-logo", value: "reddit" }
            ],
            "body": [
                { label: "Twink", icon: "number-square-one", value: "twink" },
                { label: "Twunk", icon: "number-square-two", value: "twunk" },
                { label: "Jock", icon: "number-square-three", value: "jock" }
            ],
            "race": [
                { label: "White", icon: "number-circle-one", value: "white" },
                { label: "Latino", icon: "number-circle-two", value: "latino" },
                { label: "Black", icon: "number-circle-three", value: "black" },
                { label: "Asian", icon: "number-circle-four", value: "asian" }
            ],
            "kinks / fetishes": [
                { label: "Exhibition", icon: "mountains", value: "exhibition" },
                { label: "Feet", icon: "hand", value: "feet" },
                { label: "Pups", icon: "paw-print", value: "pups" },
                { label: "Furries", icon: "dog", value: "furries" },
                { label: "Watersports", icon: "drop", value: "watersports" },
                { label: "Bondage", icon: "lasso", value: "bondage" }
            ],
            "sexuality": [
                { label: "Straight", icon: "number-square-one", value: "straight" },
                { label: "Gay", icon: "number-square-two", value: "gay" },
                { label: "Lesbian", icon: "number-square-three", value: "lesbian" }
            ]
        };
        return options[category] || [];
    }

    const searchInput = document.getElementById('search');
    const filters = {
        source: 'filter-version',
        body: 'filter-body',
        race: 'filter-race',
        kink: 'filter-kink',
        sexuality: 'sexuality-filter'
    };

    const filterElements = Object.fromEntries(
        Object.entries(filters).map(([key, name]) => [key, document.querySelectorAll(`input[name="${name}"]`)])
    );

    const getSelectedValues = (elements) =>
        Array.from(elements).filter(el => el.checked).map(el => el.value);

    function filterlinks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedFilters = Object.fromEntries(
            Object.entries(filterElements).map(([key, elements]) => [key, getSelectedValues(elements)])
        );

        const filteredlinks = links
            .map((link, originalIndex) => ({ link, originalIndex }))
            .filter(({ link }) => {
                const tagsAsString = link.info.tags.join(' ').toLowerCase();
                const matchesSearch = [link.name, link.link, tagsAsString].some(term => term.toLowerCase().includes(searchTerm));
                const matchesFilters = Object.entries(selectedFilters).every(([key, selectedValues]) =>
                    !selectedValues.length ||
                    (Array.isArray(link.info[key]) ? selectedValues.some(val => link.info[key].includes(val)) : selectedValues.includes(link.info[key]))
                );

                return matchesSearch && matchesFilters;
            })
            .map(({ link, originalIndex }) => ({ ...link, originalIndex }));

        displayResults(filteredlinks);
    }

    function displayResults(filteredlinks) {
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = filteredlinks.length ? filteredlinks.map(({ originalIndex, ...link }) => {
            const iconPrefix = link.info.source === 'reddit' ? 'https://preview.redd.it/' : 'https://pbs.twimg.com/profile_images/';
            const fullicon = iconPrefix + link.icon;
            const linkPrefix = link.info.source === 'reddit' ? 'u/' : '@';

            return `
                <div class="col-lg-4 col-sm-6">
                    <div class="card shadow-4-hover">
                        <div class="card-body pb-5">
                            <div class="d-flex align-items-center">
                                <div class="me-3">
                                    <img alt="Profile Picture" class="avatar rounded-1" src="${fullicon}">
                                </div>
                                <div class="flex-1">
                                    <a href="#" class="d-block font-semibold text-sm text-heading text-primary-hover">${link.name}</a>
                                    <div class="text-xs text-muted line-clamp-1">${linkPrefix}${link.link}</div>
                                </div>
                                <div class="text-end">
                                    <button type="button" class="btn btn-sm btn-neutral rounded-pill view-button" data-index="${originalIndex}">
                                        <i class="bi bi-folder2-open me-1"></i>
                                        <span>View</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('') : '<p>No results found.</p>';

        document.querySelectorAll('.view-button').forEach(button =>
            button.addEventListener('click', () => openCanvas(links[button.getAttribute('data-index')])));
    }

    function openCanvas(link) {
        const linkPrefix = link.info.source === 'reddit' ? 'u/' : '@';
        const urlPrefix = link.info.source === 'reddit' ? 'https://www.reddit.com/user/' : 'https://x.com/';
        const iconPrefix = link.info.source === 'reddit' ? 'https://preview.redd.it/' : 'https://pbs.twimg.com/profile_images/';
        const fullUrl = urlPrefix + link.link;
        const fullicon = iconPrefix + link.icon;

        document.getElementById('link_canvas_label').textContent = `Profile of ${link.name}`;
        document.querySelector('.offcanvas-body').innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row g-0">
                        <div class="col">
                            <div class="d-flex align-items-center">
                                <div class="me-3">
                                    <img alt="Profile Picture" class="avatar rounded-1" src="${fullicon}">
                                </div>
                                <div class="flex-1">
                                    <a href="#" class="d-block font-semibold text-sm text-heading text-primary-hover">${link.name}</a>
                                    <div class="text-xs text-muted line-clamp-1">${linkPrefix}${link.link}</div>
                                </div>
                                <div class="text-end">
                                    <a href="${fullUrl}" target="_blank" class="btn btn-sm btn-neutral rounded-pill">
                                        <i class="bi bi-caret-right me-1"></i>
                                        <span>Open</span>
                                    </a>
                                </div>
                            </div>
                            <hr class="my-7">
                            <div class="row justify-content-between align-items-center">
                                <div class="col-4">
                                    <span class="d-block h6 text-heading mb-0">${link.info.sexuality}</span>
                                    <span class="d-block text-sm text-muted">Sexuality</span>
                                </div>
                                <div class="col-4">
                                    <span class="d-block h6 text-heading mb-0">${link.info.body}</span>
                                    <span class="d-block text-sm text-muted">Body</span>
                                </div>
                                <div class="col-4">
                                    <span class="d-block h6 text-heading mb-0">${link.info.race}</span>
                                    <span class="d-block text-sm text-muted">Race</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <span class="d-block h6 text-heading mb-0">Kinks</span>
                    <span class="d-block text-sm text-muted">${link.info.kinks.length ? link.info.kinks.join(', ') : 'N/A'}</span>
                    <hr class="my-3">
                    <span class="d-block h6 text-heading mb-0">Tags</span>
                    <span class="d-block text-sm text-muted">${link.info.tags.length ? link.info.tags.join(', ') : 'N/A'}</span>
                </div>
            </div>
        `;

        new bootstrap.Offcanvas(document.getElementById('link_canvas')).show();
    }

    displayResults(links.map((link, originalIndex) => ({ ...link, originalIndex })));

    searchInput.addEventListener('input', filterlinks);
    Object.values(filterElements).forEach(elements => elements.forEach(el => el.addEventListener('change', filterlinks)));
});
