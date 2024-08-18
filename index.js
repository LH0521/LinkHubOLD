/*
    This code is the intellectual property of the owner.
    Unauthorized editing, removal, updating, adding, duplicating, selling, or reusing of this code is strictly prohibited.
*/

document.addEventListener('DOMContentLoaded', () => {
    const links = [
        {
            "name": "ExhibBoy",
            "link": "PvblicBoy",
            "pfp": "https://pbs.twimg.com/profile_images/1819821904653365248/LCaWV3wa_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twink", "latino", "exhibition", "public", "risky"],
                "kinks": ["Exhibition"],
                "sexuality": "Gay",
                "body": "Twink",
                "race": "Latino"
            }
        },
        {
            "name": "STRAIGHT BOY 😈🏈",
            "link": "seattle_boi",
            "pfp": "https://pbs.twimg.com/profile_images/1819908552258899969/D-8OZWUf_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "jock", "white", "23yo", "exhibition", "public", "risky"],
                "kinks": ["Exhibition"],
                "sexuality": "Gay",
                "body": "Jock",
                "race": "White"
            }
        },
        {
            "name": "German Gayboy",
            "link": "german1gay",
            "pfp": "https://pbs.twimg.com/profile_images/1809948150116786177/K3fFUp7z_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twunk", "white", "exhibition", "public", "risky"],
                "kinks": ["Exhibition"],
                "sexuality": "Gay",
                "body": "Twunk",
                "race": "White"
            }
        },
        {
            "name": "Luke 🔞 (70K+)",
            "link": "luke_twink",
            "pfp": "https://pbs.twimg.com/profile_images/1528091697162375168/t-7fTndc_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twink", "white", "exhibition", "public", "risky"],
                "kinks": ["Exhibition"],
                "sexuality": "Gay",
                "body": "Twink",
                "race": "White"
            }
        },
        {
            "name": "Noah Bennet",
            "link": "Bennet_Noah2",
            "pfp": "https://pbs.twimg.com/profile_images/1822540267573981184/ob73qmtZ_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twink", "white", "22yo", "exhibition", "public", "risky"],
                "kinks": ["Exhibition"],
                "sexuality": "Gay",
                "body": "Twink",
                "race": "White"
            }
        },
        {
            "name": "MasterDax (28k)",
            "link": "MasterDax69",
            "pfp": "https://pbs.twimg.com/profile_images/1702970385103278080/Sq_rwu8Y_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["straight", "jock", "white", "20yo", "feet"],
                "kinks": ["Feet"],
                "sexuality": "Straight",
                "body": "Jock",
                "race": "White"
            }
        },
        {
            "name": "Master Jock",
            "link": "masterjock7",
            "pfp": "https://pbs.twimg.com/profile_images/1680334229526269953/1yD6F1DY_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twunk", "white", "21yo", "feet"],
                "kinks": ["Feet"],
                "sexuality": "Gay",
                "body": "Twunk",
                "race": "White"
            }
        },
        {
            "name": "CollegeTwunk",
            "link": "TwunkCollege",
            "pfp": "https://pbs.twimg.com/profile_images/1825049569073233921/9gshPZne_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twunk", "asian"],
                "kinks": [],
                "sexuality": "Gay",
                "body": "Twunk",
                "race": "Asian"
            }
        },
        {
            "name": "danny",
            "link": "dannydelanox",
            "pfp": "https://pbs.twimg.com/profile_images/1671963209421537281/oNjhsH07_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twunk", "white", "exhibition", "public", "risky"],
                "kinks": ["Exhibition"],
                "sexuality": "Gay",
                "body": "Twunk",
                "race": "White"
            }
        },
        {
            "name": "Connor Peters",
            "link": "ConnorPeters",
            "pfp": "https://pbs.twimg.com/profile_images/1679187184186974209/D8O4JvS-_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twunk", "white", "aussie"],
                "kinks": [],
                "sexuality": "Gay",
                "body": "Twunk",
                "race": "White"
            }
        },
        {
            "name": "Tate Hoskins",
            "link": "realtatehoskins",
            "pfp": "https://pbs.twimg.com/profile_images/1562600762361921536/kMsRrEmD_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "jock", "white", "24yo", "exhibition", "public", "risky"],
                "kinks": ["Exhibition"],
                "sexuality": "Gay",
                "body": "Jock",
                "race": "White"
            }
        },
        {
            "name": "ChrisWTheStar",
            "link": "ElsaGermaineRiley",
            "pfp": "https://preview.redd.it/really-wanting-to-change-my-style-what-kind-of-clothes-v0-b8xq3ilkewid1.jpeg?auto=webp&s=08f75ab5944ce1c6c0a2d56f1fd473642429cd16",
            "flags": {
                "source": "reddit"
            },
            "search": {
                "tags": ["gay", "twunk", "white", "wrestling", "hairy", "feet"],
                "kinks": ["Feet"],
                "sexuality": "Gay",
                "body": "Twunk",
                "race": "White"
            }
        },
        {
            "name": "Daniel/Dantebigboi",
            "link": "Fantastic-Potato-324",
            "pfp": "https://preview.redd.it/explore-my-musky-scent-its-intoxicating-v0-jiix8w9jfzhd1.jpeg?width=1080&crop=smart&auto=webp&s=7bc8c96c56724e47f2ac98e89634b846269527a8",
            "flags": {
                "source": "reddit"
            },
            "search": {
                "tags": ["gay", "twink", "white"],
                "kinks": [],
                "sexuality": "Gay",
                "body": "Twink",
                "race": "White"
            }
        }
    ];

    const searchInput = document.getElementById('search');
    const filterElements = {
        source: document.querySelectorAll('input[name="filter-version"]'),
        body: document.querySelectorAll('input[name="filter-body"]'),
        race: document.querySelectorAll('input[name="filter-race"]'),
        sexuality: document.querySelectorAll('input[name="sexuality-filter"]'),
    };

    function filterlinks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedSources = Array.from(filterElements.source).filter(el => el.checked).map(el => el.value);
        const selectedBody = Array.from(filterElements.body).filter(el => el.checked).map(el => el.value);
        const selectedRace = Array.from(filterElements.race).filter(el => el.checked).map(el => el.value);
        const selectedSexuality = Array.from(filterElements.sexuality).filter(el => el.checked).map(el => el.value);

        const filteredlinks = links
            .map((link, originalIndex) => ({ link, originalIndex }))
            .filter(({ link }) => {
                const tagsAsString = link.search.tags.join(' ').toLowerCase();
                const matchesSearch =
                    link.name.toLowerCase().includes(searchTerm) ||
                    link.link.toLowerCase().includes(searchTerm) ||
                    tagsAsString.includes(searchTerm);

                const matchesSource = !selectedSources.length || selectedSources.includes(link.flags.source);
                const matchesBody = !selectedBody.length || selectedBody.includes(link.search.body);
                const matchesRace = !selectedRace.length || selectedRace.includes(link.search.race);
                const matchesSexuality = !selectedSexuality.length || selectedSexuality.includes(link.search.sexuality);

                return matchesSearch && matchesSource && matchesBody && matchesRace && matchesSexuality;
            })
            .map(({ link, originalIndex }) => ({
                ...link,
                originalIndex
            }));

        displayResults(filteredlinks);
    }

    function displayResults(filteredlinks) {
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = '';

        if (filteredlinks.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
            return;
        }

        filteredlinks.forEach(({ originalIndex, ...link }) => {
            const linkPrefix = link.flags.source === 'reddit' ? 'u/' : '@';
            const linkElement = document.createElement('div');
            linkElement.classList.add('col-lg-4', 'col-sm-6');

            linkElement.innerHTML = `
                <div class="card shadow-4-hover">
                    <div class="card-body pb-5">
                        <div class="d-flex align-items-center">
                            <div class="me-3">
                                <img alt="Profile Picture" class="avatar rounded-1" src="${link.pfp}">
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
            `;

            resultsContainer.appendChild(linkElement);
        });

        document.querySelectorAll('.view-button').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                openCanvas(links[index]);
            });
        });
    }

    function openCanvas(link) {
        const linkPrefix = link.flags.source === 'reddit' ? 'u/' : '@';
        const urlPrefix = link.flags.source === 'reddit' ? 'https://www.reddit.com/user/' : 'https://x.com/';
        const fullUrl = urlPrefix + link.link;

        document.getElementById('link_canvas_label').textContent = `Profile of ${link.name}`;
        document.querySelector('.offcanvas-body').innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row g-0">
                        <div class="col">
                            <div class="d-flex align-items-center">
                                <div class="me-3">
                                    <img alt="Profile Picture" class="avatar rounded-1" src="${link.pfp}">
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
                                    <span class="d-block h6 text-heading mb-0" id="link-rating">5.0</span>
                                    <span class="d-block text-sm text-muted">Rating</span>
                                </div>
                                <div class="col-4">
                                    <span class="d-block h6 text-heading mb-0" id="link-saves">0</span>
                                    <span class="d-block text-sm text-muted">Saves</span>
                                </div>
                                <div class="col-4">
                                    <span class="d-block h6 text-heading mb-0" id="link-opens">0</span>
                                    <span class="d-block text-sm text-muted">Opens</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-4">
                            <span class="d-block h6 text-heading mb-0">${link.search.sexuality}</span>
                            <span class="d-block text-sm text-muted">Sexuality</span>
                        </div>
                        <div class="col-4">
                            <span class="d-block h6 text-heading mb-0">${link.search.body}</span>
                            <span class="d-block text-sm text-muted">Body</span>
                        </div>
                        <div class="col-4">
                            <span class="d-block h6 text-heading mb-0">${link.search.race}</span>
                            <span class="d-block text-sm text-muted">Race</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <span class="d-block h6 text-heading mb-0">Kinks</span>
                    <span class="d-block text-sm text-muted">${link.search.kinks.join(', ')}</span>
                    <hr class="my-3">
                    <span class="d-block h6 text-heading mb-0">Tags</span>
                    <span class="d-block text-sm text-muted">${link.search.tags.join(', ')}</span>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div>
                            <span class="d-block h6 text-heading mb-0">Give ${link.name} a rating</span>
                            <span class="d-block text-sm text-muted">0 Votes | Your Vote <b>5</b></span>
                        </div>
                        <button class="btn btn-sm btn-neutral ms-auto">Information</button>
                    </div>
                    <hr class="my-3">
                    <div class="rating">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label title="Excellent!" for="star5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                        </label>
                        <input value="4" name="rate" id="star4" type="radio" />
                        <label title="Great!" for="star4">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                        </label>
                        <input value="3" name="rate" id="star3" type="radio" />
                        <label title="Good" for="star3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                        </label>
                        <input value="2" name="rate" id="star2" type="radio" />
                        <label title="Okay" for="star2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                        </label>
                        <input value="1" name="rate" id="star1" type="radio" />
                        <label title="Bad" for="star1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        `;

        const linkCanvas = new bootstrap.Offcanvas(document.getElementById('link_canvas'));
        linkCanvas.show();
    }

    const initialLinks = links.map((link, originalIndex) => ({
        ...link,
        originalIndex
    }));

    displayResults(initialLinks);

    searchInput.addEventListener('input', filterlinks);
    filterElements.source.forEach(el => el.addEventListener('change', filterlinks));
    filterElements.body.forEach(el => el.addEventListener('change', filterlinks));
    filterElements.race.forEach(el => el.addEventListener('change', filterlinks));
    filterElements.sexuality.forEach(el => el.addEventListener('change', filterlinks));
});