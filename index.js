/*
    This code is the intellectual property of the owner.
    Unauthorized editing, removal, updating, adding, duplicating, selling, or reusing of this code is strictly prohibited.
*/

document.addEventListener('DOMContentLoaded', () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBov3gDF7515z2rnsBoREsZEOfQOBUuLnQ",
        authDomain: "linkhub-3dc70.firebaseapp.com",
        projectId: "linkhub-3dc70",
        storageBucket: "linkhub-3dc70.appspot.com",
        messagingSenderId: "191484102424",
        appId: "1:191484102424:web:a87e50e509574c0d9f406d"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();

    function signInWithGoogle() {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    document.getElementById('login-button').addEventListener('click', signInWithGoogle);

    function saveLink(linkId) {
        const user = auth.currentUser;
        if (user) {
            const userDocRef = db.collection('users').doc(user.uid);
            userDocRef.set({
                savedLinks: firebase.firestore.FieldValue.arrayUnion(linkId)
            }, { merge: true });
            alert('Link saved successfully!');
        } else {
            alert("Please sign in to save links.");
        }
    }

    document.querySelectorAll('.save-button').forEach(button => {
        button.addEventListener('click', function () {
            const linkId = this.getAttribute('data-link-id');
            saveLink(linkId);
        });
    });

    function rateLink(linkId, rating) {
        const user = auth.currentUser;
        if (user) {
            const ratingDocRef = db.collection('links').doc(linkId).collection('ratings').doc(user.uid);
            ratingDocRef.set({
                rating: rating
            }).then(() => {
                alert('Rating saved successfully!');
            }).catch(error => {
                console.error("Error saving rating: ", error);
            });
        } else {
            alert("Please sign in to rate links.");
        }
    }

    document.querySelectorAll('.rating input').forEach(input => {
        input.addEventListener('change', function () {
            const linkId = document.getElementById('link_canvas').getAttribute('data-link-id');
            rateLink(linkId, this.value);
        });
    });

    function incrementOpenCount(linkId) {
        const linkDocRef = db.collection('links').doc(linkId);
        linkDocRef.update({
            openCount: firebase.firestore.FieldValue.increment(1)
        }).then(() => {
            console.log('Open count incremented');
        }).catch(error => {
            console.error("Error incrementing open count: ", error);
        });
    }

    document.querySelectorAll('.view-button').forEach(button => {
        button.addEventListener('click', function () {
            const linkId = this.getAttribute('data-index');
            incrementOpenCount(linkId);
            openCanvas(links[linkId]);
        });
    });

    function displaySavedLinks() {
        const user = auth.currentUser;
        if (user) {
            const userDocRef = db.collection('users').doc(user.uid);
            userDocRef.get().then(doc => {
                if (doc.exists) {
                    const savedLinks = doc.data().savedLinks || [];
                    console.log('Saved Links:', savedLinks);
                }
            }).catch(error => {
                console.error("Error fetching saved links: ", error);
            });
        }
    }

    auth.onAuthStateChanged(user => {
        if (user) {
            document.querySelectorAll('.user-name').forEach(element => {
                element.textContent = user.displayName || 'Anonymous';
            });
            document.querySelectorAll('.user-profile-pic').forEach(element => {
                element.src = user.photoURL || 'default-profile-pic.png';
            });

            displaySavedLinks();
        } else {
            document.querySelectorAll('.user-name').forEach(element => {
                element.textContent = 'Anonymous';
            });
            document.querySelectorAll('.user-profile-pic').forEach(element => {
                element.src = 'default-profile-pic.png';
            });
        }
    });

    function displayRating(linkId) {
        const linkDocRef = db.collection('links').doc(linkId);
        linkDocRef.collection('ratings').get().then(snapshot => {
            let totalRating = 0;
            snapshot.forEach(doc => {
                totalRating += doc.data().rating;
            });
            const averageRating = totalRating / snapshot.size;
            document.getElementById('link-rating').textContent = averageRating.toFixed(1);
        }).catch(error => {
            console.error("Error fetching rating: ", error);
        });
    }

    function displayOpenCount(linkId) {
        const linkDocRef = db.collection('links').doc(linkId);
        linkDocRef.get().then(doc => {
            if (doc.exists) {
                document.getElementById('link-opens').textContent = doc.data().openCount || 0;
            }
        }).catch(error => {
            console.error("Error fetching open count: ", error);
        });
    }

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
            "name": "Vinc",
            "link": "vinc_twink",
            "pfp": "https://pbs.twimg.com/profile_images/1824561426897289217/itlb2Q-Y_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twink", "white", "18yo"],
                "kinks": [],
                "sexuality": "Gay",
                "body": "Twink",
                "race": "White"
            }
        },
        {
            "name": "char 🐸",
            "link": "CharTwinkk",
            "pfp": "https://pbs.twimg.com/profile_images/1759498677964406784/FPeLLQ2I_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twink", "white", "18yo"],
                "kinks": [],
                "sexuality": "Gay",
                "body": "Twink",
                "race": "White"
            }
        },
        {
            "name": "𝘼𝙡𝙤Twink💫",
            "link": "alo_twink",
            "pfp": "https://pbs.twimg.com/profile_images/1782229619283795968/9UoicTNR_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twink", "white", "irish"],
                "kinks": [],
                "sexuality": "Gay",
                "body": "Twink",
                "race": "White"
            }
        },
        {
            "name": "Jayden Taylor",
            "link": "JaydenTaylorXXX",
            "pfp": "https://pbs.twimg.com/profile_images/1795555398637817856/qEEOBbWd_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twink", "white"],
                "kinks": [],
                "sexuality": "Gay",
                "body": "Twink",
                "race": "White"
            }
        },
        {
            "name": "Vinc :)",
            "link": "_VincTwink",
            "pfp": "https://pbs.twimg.com/profile_images/1818308259469557760/EhFTMPIv_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twink", "white"],
                "kinks": [],
                "sexuality": "Gay",
                "body": "Twink",
                "race": "White"
            }
        },
        {
            "name": "Manu",
            "link": "manutwinkx",
            "pfp": "https://pbs.twimg.com/profile_images/1620896802294702091/uyBqkGH4_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twunk", "white", "19yo"],
                "kinks": [],
                "sexuality": "Gay",
                "body": "Twunk",
                "race": "White"
            }
        },
        {
            "name": "Darth",
            "link": "DarthBeFit",
            "pfp": "https://pbs.twimg.com/profile_images/1819372712067743744/8PQL4vt4_400x400.jpg",
            "flags": {
                "source": "twitter"
            },
            "search": {
                "tags": ["gay", "twunk", "white", "18yo"],
                "kinks": [],
                "sexuality": "Gay",
                "body": "Twink",
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

        filteredlinks.forEach(({ link, originalIndex }) => {
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
                                <div class="text-xs text-muted line-clamp-1">@${link.link}</div>
                            </div>
                            <div class="text-end">
                                <button type="button" class="btn btn-sm btn-neutral rounded-pill view-button" data-link-id="${link.link}">
                                    <i class="bi bi-folder2-open me-1"></i>
                                    <span>View</span>
                                </button>
                                <button type="button" class="btn btn-sm btn-neutral rounded-pill save-button" data-link-id="${link.link}">
                                    <i class="bi bi-save2 me-1"></i>
                                    <span>Save</span>
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
                const linkId = this.getAttribute('data-link-id');
                openCanvas(linkId);
            });
        });
    }

    function openCanvas(linkId) {
        const link = links.find(l => l.id === linkId);
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
            <!-- Other content for the canvas -->
        `;
    
        document.getElementById('link_canvas').setAttribute('data-link-id', linkId);
        displayRating(linkId);
        displayOpenCount(linkId);
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