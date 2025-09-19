// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.navbar form');
    const searchInput = searchForm.querySelector('input[type="search"]');
    const container = document.querySelector('.container');

    // Recommendations data
    const recommendations = {
        beach: [
            {
                name: "Shirahama Beach",
                description: "A stunning white sand beach in Wakayama Prefecture, known for its clear waters and vibrant sunsets.",
                image: "images/shirahama-beach.jpg"
            },
            {
                name: "Miyako Island",
                description: "A tropical paradise in Okinawa with pristine coral reefs and turquoise waters.",
                image: "images/miyako-island.jpg"
            }
        ],
        temple: [
            {
                name: "Kinkaku-ji (Golden Pavilion)",
                description: "A Zen Buddhist temple in Kyoto, famous for its golden exterior and serene pond.",
                image: "images/Kinkaku-ji.png"
            },
            {
                name: "Todai-ji",
                description: "A historic temple in Nara, home to the Great Buddha and a UNESCO World Heritage site.",
                image: "images/todai-ji.jpg"
            }
        ],
        country: [
            {
                name: "Japan",
                description: "A unique blend of ancient traditions and modern innovation, from Kyoto's temples to Tokyo's skyscrapers.",
                image: "images/kyoto1.jpg"
            },
            {
                name: "South Korea",
                description: "A vibrant country with rich cultural heritage, bustling cities like Seoul, and scenic Jeju Island.",
                image: "images/south-korea.jpg"
            }
        ]
    };

    // Function to display recommendations
    function displayRecommendations(category) {
        // Remove any existing recommendations
        const existingRecommendations = document.querySelector('.recommendations');
        if (existingRecommendations) {
            existingRecommendations.remove();
        }

        // Create recommendations section
        const recSection = document.createElement('section');
        recSection.className = 'recommendations py-4';
        recSection.innerHTML = `<h3 class="text-center mb-4">Recommended ${category.charAt(0).toUpperCase() + category.slice(1)} Destinations</h3>`;

        const row = document.createElement('div');
        row.className = 'row';

        recommendations[category].forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-6 mb-4';
            col.innerHTML = `
                <div class="card h-100">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            `;
            row.appendChild(col);
        });

        recSection.appendChild(row);
        container.prepend(recSection);
    }

    // Search input event listener
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Check for beach, temple, or country-related terms
        if (searchTerm.includes('beach')) {
            displayRecommendations('beach');
        } else if (searchTerm.includes('temple')) {
            displayRecommendations('temple');
        } else if (searchTerm.includes('country') || searchTerm.includes('countries')) {
            displayRecommendations('country');
        } else {
            // Clear recommendations if no match
            const existingRecommendations = document.querySelector('.recommendations');
            if (existingRecommendations) {
                existingRecommendations.remove();
            }
        }
    });

    // Optional: Real-time search as user types
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm.includes('beach')) {
            displayRecommendations('beach');
        } else if (searchTerm.includes('temple')) {
            displayRecommendations('temple');
        } else if (searchTerm.includes('country') || searchTerm.includes('countries')) {
            displayRecommendations('country');
        } else {
            // Clear recommendations if no match
            const existingRecommendations = document.querySelector('.recommendations');
            if (existingRecommendations) {
                existingRecommendations.remove();
            }
        }
    });
});