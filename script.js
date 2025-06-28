// --- DATA SOURCES ---

// Property Data
const propertyData = [
    {
        id: 1,
        title: 'Spacious Family House',
        location: 'Miami, FL',
        location_tag: 'miami',
        status: 'sale',
        type: 'house',
        price: 1200000,
        price_formatted: '$1,200,000',
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2800,
        images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'],
        description: 'A beautiful and spacious family house located in a serene Miami neighborhood. Features a large backyard with a pool, a modern kitchen, and a two-car garage. Perfect for families looking for comfort and style.',
        amenities: ['Pool', 'Garage', 'Garden', 'Air Conditioning', 'Patio', 'Security System'],
        agent: { name: 'Maria Rodriguez', phone: '(305) 555-0101', email: 'maria.r@primestay.com' }
    },
    {
        id: 2,
        title: 'Modern Downtown Apartment',
        location: 'New York, NY',
        location_tag: 'new york',
        status: 'rent',
        type: 'apartment',
        price: 3500,
        price_formatted: '$3,500 / month',
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1100,
        images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'],
        description: 'Live in the heart of the city in this sleek and modern apartment. With floor-to-ceiling windows offering stunning views, this unit includes access to a rooftop lounge and a state-of-the-art gym.',
        amenities: ['Gym', 'Rooftop Lounge', 'Doorman', 'Central Heating', 'Dishwasher'],
        agent: { name: 'John Smith', phone: '(212) 555-0102', email: 'john.s@primestay.com' }
    },
    {
        id: 3,
        title: 'Luxury Hilltop Villa',
        location: 'Los Angeles, CA',
        location_tag: 'los angeles',
        status: 'sale',
        type: 'villa',
        price: 3500000,
        price_formatted: '$3,500,000',
        bedrooms: 5,
        bathrooms: 6,
        sqft: 6000,
        images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1593696140826-c58b02198d47?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1613490493667-af9cf2547a46?auto=format&fit=crop&w=1200&q=80'],
        description: 'An architectural masterpiece offering breathtaking panoramic views of Los Angeles. This villa boasts an infinity pool, a private cinema, and exquisite high-end finishes throughout.',
        amenities: ['Infinity Pool', 'Home Cinema', 'Ocean View', 'Smart Home System', 'Garage', 'Fireplace'],
        agent: { name: 'Chloe Taylor', phone: '(310) 555-0103', email: 'chloe.t@primestay.com' }
    },
    {
        id: 4,
        title: 'Cozy Studio Loft',
        location: 'Chicago, IL',
        location_tag: 'chicago',
        status: 'rent',
        type: 'apartment',
        price: 2200,
        price_formatted: '$2,200 / month',
        bedrooms: 1,
        bathrooms: 1,
        sqft: 750,
        images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1604019907075-8b9a04274f01?auto=format&fit=crop&w=1200&q=80'],
        description: 'Charming and bright studio loft in a vibrant Chicago neighborhood, featuring exposed brick walls and high ceilings. Ideal for young professionals or students.',
        amenities: ['Exposed Brick', 'High Ceilings', 'Dishwasher', 'Hardwood Floors'],
        agent: { name: 'John Smith', phone: '(212) 555-0102', email: 'john.s@primestay.com' }
    },
    {
        id: 5,
        title: 'Charming Suburban Home',
        location: 'Austin, TX',
        location_tag: 'austin',
        status: 'sale',
        type: 'house',
        price: 750000,
        price_formatted: '$750,000',
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 2100,
        images: ['https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80'],
        description: 'A beautiful suburban home in a family-friendly area of Austin, with a large yard, updated kitchen, and modern amenities. Close to parks and excellent schools.',
        amenities: ['Garden', 'Patio', 'Garage', 'Updated Kitchen', 'Walk-in Closet'],
        agent: { name: 'Maria Rodriguez', phone: '(305) 555-0101', email: 'maria.r@primestay.com' }
    },
    {
        id: 6,
        title: 'Prime Office Space',
        location: 'San Francisco, CA',
        location_tag: 'san francisco',
        status: 'rent',
        type: 'commercial',
        price: 8000,
        price_formatted: '$8,000 / month',
        bedrooms: 0,
        bathrooms: 2,
        sqft: 3000,
        images: ['https://images.unsplash.com/photo-1596431922402-c20617d75eea?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'],
        description: 'Spacious and modern commercial office space in a prime San Francisco location, perfect for startups and established businesses. Includes meeting rooms and a kitchenette.',
        amenities: ['Conference Rooms', 'High-Speed Internet', 'Kitchenette', 'Reception Area', 'Parking Available'],
        agent: { name: 'David Chen', phone: '(415) 555-0104', email: 'david.c@primestay.com' }
    },
    {
        id: 7,
        title: 'Classic Craftsman Home',
        location: 'Seattle, WA',
        location_tag: 'seattle',
        status: 'sale',
        type: 'house',
        price: 950000,
        price_formatted: '$950,000',
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1900,
        images: ['https://images.unsplash.com/photo-1592595896551-fed138963037?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1560185007-c5ca993536f4?auto=format&fit=crop&w=1200&q=80'],
        description: 'Beautifully preserved Classic Craftsman home in a desirable Seattle neighborhood. Features original woodwork, a cozy fireplace, and a lush garden.',
        amenities: ['Original Woodwork', 'Fireplace', 'Garden', 'Basement', 'Deck'],
        agent: { name: 'Laura Palmer', phone: '(206) 555-0105', email: 'laura.p@primestay.com' }
    },
    {
        id: 8,
        title: 'Historic Brownstone Apt',
        location: 'Boston, MA',
        location_tag: 'boston',
        status: 'rent',
        type: 'apartment',
        price: 2800,
        price_formatted: '$2,800 / month',
        bedrooms: 2,
        bathrooms: 1,
        sqft: 950,
        images: ['https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80'],
        description: 'Charming apartment in a historic Boston brownstone. Offers a unique blend of classic architecture and modern conveniences, located on a picturesque street.',
        amenities: ['Hardwood Floors', 'Bay Windows', 'Updated Bathroom', 'Pet-Friendly'],
        agent: { name: 'Michael Bivins', phone: '(617) 555-0106', email: 'michael.b@primestay.com' }
    },
    {
        id: 9,
        title: 'Modern Desert Villa',
        location: 'Phoenix, AZ',
        location_tag: 'phoenix',
        status: 'sale',
        type: 'villa',
        price: 1750000,
        price_formatted: '$1,750,000',
        bedrooms: 4,
        bathrooms: 4.5,
        sqft: 4200,
        images: ['https://images.unsplash.com/photo-1588012887813-a869a9c09099?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1605000038091-797939df496a?auto=format&fit=crop&w=1200&q=80'],
        description: 'Stunning modern villa in Phoenix with desert landscaping and mountain views. Features an open floor plan, infinity pool, and outdoor entertainment area.',
        amenities: ['Infinity Pool', 'Mountain View', 'Outdoor Kitchen', 'Smart Home System', 'Solar Panels'],
        agent: { name: 'Jessica Stone', phone: '(602) 555-0107', email: 'jessica.s@primestay.com' }
    }
];

// Blog Data
const blogData = [
    {
        id: 1,
        title: '7 Essential Tips for First-Time Home Buyers',
        author: 'Jane Doe',
        date: 'June 4, 2025',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
        summary: 'Navigating the real estate market for the first time can be daunting. From securing financing to making an offer, these seven essential tips will guide you through the process smoothly and with confidence.',
        content: `<p class="lead">Buying your first home is an exciting milestone, but it's also one of the biggest financial decisions you'll ever make. To help you on your journey, we've compiled a list of essential tips to ensure a successful purchase.</p><h4 class="playfair-display mt-4">1. Start Saving Early</h4><p>Your down payment is a significant hurdle. Beyond the down payment, you'll also need to cover closing costs, which can be 2-5% of the home's purchase price. Start a dedicated savings account early and automate your contributions.</p><h4 class="playfair-display mt-4">2. Check Your Credit Score</h4><p>Your credit score is a critical factor in determining the interest rate you'll get on your mortgage. A higher score means a lower interest rate, which can save you tens of thousands of dollars over the life of the loan. Obtain a free copy of your credit report and work on improving your score if necessary.</p><blockquote class="blockquote fst-italic my-4">"A good credit score is your passport to a good mortgage rate. Don't underestimate its importance."</blockquote><h4 class="playfair-display mt-4">3. Get Pre-Approved for a Mortgage</h4><p>Getting pre-approved before you start house hunting shows sellers that you're a serious buyer. It also gives you a clear budget to work with, so you can focus your search on homes you can realistically afford.</p><h4 class="playfair-display mt-4">4. Create a "Must-Have" List</h4><p>It's easy to get distracted by flashy features. Create a list of your non-negotiable "must-haves" (e.g., number of bedrooms, location, school district) and a separate list of "nice-to-haves." This will help you and your real estate agent focus the search and evaluate properties objectively.</p>`
    },
    {
        id: 2,
        title: 'How to Stage Your Home for a Quick Sale',
        author: 'John Smith',
        date: 'May 28, 2025',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrLjzvn19geIcAmnboV9iFg5tTCY-hyPYxg&s',
        summary: 'When selling your home, first impressions are everything. Proper home staging can significantly increase your home\'s appeal to potential buyers and can lead to a faster sale at a higher price. Learn the key strategies to make your home irresistible.',
        content: `<p class="lead">Staging your home correctly can be the difference between a property that languishes on the market and one that sells quickly for a great price. Here are the key areas to focus on.</p><h4 class="playfair-display mt-4">1. Declutter and Depersonalize</h4><p>The most important step is to remove clutter and personal items. Buyers need to be able to envision themselves living in the space. Pack away family photos, personal collections, and excess furniture. A clean, minimalist space looks larger and more appealing.</p><h4 class="playfair-display mt-4">2. Deep Clean Everything</h4><p>From baseboards to ceiling fans, every inch of your home should be spotless. A sparkling clean home signals to buyers that the property has been well-maintained. Consider hiring professional cleaners for a truly deep clean before you start showing the house.</p><h4 class="playfair-display mt-4">3. Focus on Lighting</h4><p>Good lighting makes a home feel warm and inviting. Open all curtains and blinds, clean the windows, and replace any burned-out light bulbs. Add lamps to darker corners to create a bright and cheerful atmosphere.</p>`
    },
    {
        id: 3,
        title: 'The Rise of Smart Homes: What to Look For',
        author: 'Chloe Taylor',
        date: 'May 15, 2025',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
        summary: 'Smart home technology is no longer a futuristic concept—it\'s a sought-after feature in modern real estate. From smart thermostats to automated security systems, discover the technologies that add the most value and convenience to a home.',
        content: `<p class="lead">Smart home features are rapidly becoming a standard expectation for many homebuyers. They offer convenience, security, and energy efficiency. If you're buying or upgrading, here are some of the most valuable smart home technologies to consider.</p><h4 class="playfair-display mt-4">1. Smart Thermostats</h4><p>A smart thermostat, like the Nest or Ecobee, learns your schedule and adjusts the temperature automatically, saving you money on energy bills. Many can be controlled remotely from your smartphone, allowing you to warm up or cool down the house before you arrive home.</p><h4 class="playfair-display mt-4">2. Smart Lighting</h4><p>Smart light bulbs and switches allow you to control your home's lighting from anywhere. You can set schedules, dim lights, and even change their color to create different moods. This is a simple upgrade that adds a major "wow" factor.</p><h4 class="playfair-display mt-4">3. Smart Security Systems</h4><p>Peace of mind is priceless. Modern security systems include smart doorbells (like Ring), smart locks, and connected cameras that you can monitor from your phone. These systems provide a high level of security and are a huge selling point for buyers.</p>`
    },
    {
        id: 4,
        title: 'Renting vs. Buying: A Comprehensive Guide for 2025',
        author: 'David Chen',
        date: 'June 1, 2025',
        image: 'https://gskproperties.ca/wp-content/uploads/2025/02/file_1731615547863.png',
        summary: 'The age-old question: should you rent or buy? This decision depends on your financial situation, lifestyle, and long-term goals. We break down the pros and cons of each to help you make an informed choice in today\'s market.',
        content: `<p class="lead">Deciding whether to rent or buy a home is one of the most significant financial choices you'll make. There's no single right answer, as the best path depends entirely on your personal circumstances. Let's explore the key factors.</p><h4 class="playfair-display mt-4">The Case for Renting</h4><p>Renting offers flexibility and predictable monthly expenses. You're not responsible for maintenance costs, property taxes, or repairs. This is ideal if you're not sure how long you'll be in an area or if you value the freedom to move easily.</p><ul><li><strong>Lower Upfront Costs:</strong> No need for a large down payment.</li><li><strong>Flexibility:</strong> Easier to relocate for a job or other opportunities.</li><li><strong>No Maintenance Worries:</strong> Your landlord is responsible for repairs.</li></ul><h4 class="playfair-display mt-4">The Case for Buying</h4><p>Buying a home is a long-term investment that allows you to build equity. Every mortgage payment increases your ownership stake. You have the freedom to renovate and customize your space to your liking, and you benefit from potential appreciation in property value.</p><ul><li><strong>Building Equity:</strong> Your home is an asset that can grow in value.</li><li><strong>Stability:</strong> Fixed-rate mortgages provide predictable housing costs for years.</li><li><strong>Tax Benefits:</strong> Homeowners can deduct mortgage interest and property taxes.</li></ul>`
    },
    {
        id: 5,
        title: '5 Interior Design Trends That Are Dominating This Year',
        author: 'Chloe Taylor',
        date: 'May 25, 2025',
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
        summary: 'Looking to refresh your living space? From sustainable materials to bold color choices, we\'re diving into the top five interior design trends that are making waves this year. Get inspired to create a home that\'s both stylish and timeless.',
        content: `<p class="lead">This year's interior design trends are all about creating spaces that are personal, comfortable, and connected to nature. Here are five key trends to watch.</p><h4 class="playfair-display mt-4">1. Biophilic Design</h4><p>This trend focuses on bringing the outdoors in. Think large windows, natural materials like wood and stone, and an abundance of indoor plants. It's about creating a calming, natural environment inside your home.</p><h4 class="playfair-display mt-4">2. Sustainable Materials</h4><p>Eco-consciousness is a major driver in design. Homeowners are opting for reclaimed wood, recycled glass countertops, and bamboo flooring. These materials are not only good for the planet but also add unique character to a home.</p><h4 class="playfair-display mt-4">3. Bold Monochromatic Palettes</h4><p>Instead of just white or grey, designers are using deep, rich colors like navy blue, forest green, or terracotta in a monochromatic scheme. Using different shades and textures of a single color creates a sophisticated and cohesive look.</p>`
    },
    {
        id: 6,
        title: 'Understanding Mortgages: A Beginner\'s Glossary',
        author: 'Maria Rodriguez',
        date: 'May 18, 2025',
        image: 'https://www.freedomcapital.com/wp-content/webp-express/webp-images/uploads/2022/07/understand-your-mortgage-document.png.webp',
        summary: 'APR, escrow, fixed-rate, ARM... the world of mortgages is filled with confusing jargon. We\'ve created a simple glossary of the most common mortgage terms to empower you during the home-buying process.',
        content: `<p class="lead">Understanding the language of mortgages is the first step toward financial confidence when buying a home. Here are some key terms explained simply.</p><ol><li><strong>Annual Percentage Rate (APR):</strong> This is the true cost of your loan, expressed as a yearly rate. It includes the interest rate plus other charges like broker fees and closing costs. Always compare APRs, not just interest rates.</li><li><strong>Escrow:</strong> A neutral third-party account that holds funds for property taxes and homeowner's insurance. A portion of your monthly mortgage payment goes into escrow, and the lender pays these bills on your behalf.</li><li><strong>Fixed-Rate Mortgage:</strong> The interest rate on this type of loan remains the same for the entire term, typically 15 or 30 years. This provides predictable monthly payments.</li><li><strong>Adjustable-Rate Mortgage (ARM):</strong> An ARM has an interest rate that can change over time, usually after an initial fixed-rate period. It might start lower than a fixed-rate mortgage but carries the risk of future rate increases.</li></ol>`
    },
    {
        id: 7,
        title: 'The Art of the Open House: A Seller\'s Checklist',
        author: 'John Smith',
        date: 'May 10, 2025',
        image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80',
        summary: 'An open house is your chance to make a stellar first impression on multiple buyers at once. A successful event requires more than just opening your doors. Follow our checklist to ensure your open house is a resounding success.',
        content: `<p class="lead">A well-executed open house can generate buzz and lead to quick offers. Here is your checklist for success.</p><h4 class="playfair-display mt-4">Before the Day:</h4><ul><li><strong>Deep Clean & Declutter:</strong> This is non-negotiable. Every corner should be spotless.</li><li><strong>Stage Key Rooms:</strong> Focus on the living room, kitchen, and master bedroom.</li><li><strong>Boost Curb Appeal:</strong> Mow the lawn, plant flowers, and paint the front door.</li><li><strong>Secure Valuables:</strong> Lock away personal documents, jewelry, and medications.</li></ul><h4 class="playfair-display mt-4">On the Day:</h4><ul><li><strong>Let There Be Light:</strong> Open all curtains and turn on all lights.</li><li><strong>Set a Comfortable Temperature:</strong> Make it welcoming regardless of the weather.</li><li><strong>Play Subtle Music:</strong> Soft, neutral music can create a pleasant atmosphere.</li><li><strong>Leave:</strong> Allow your agent to handle the event. Buyers feel more comfortable exploring without the owner present.</li></ul>`
    },
    {
        id: 8,
        title: 'Investing in Real Estate: Where to Begin?',
        author: 'David Chen',
        date: 'May 2, 2025',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5dt6vU4VZvULGlPUJ3N3P0RkXcaWNqRDuw&s',
        summary: 'Real estate can be a powerful tool for building long-term wealth, but it can be intimidating for beginners. From rental properties to REITs, we explore the different avenues for getting started in real estate investment.',
        content: `<p class="lead">Investing in real estate offers the potential for passive income and appreciation. Here are a few common ways to start.</p><h4 class="playfair-display mt-4">1. Residential Rental Properties</h4><p>This is the classic approach: buying a property and renting it out to tenants. It requires significant capital and hands-on management (or hiring a property manager), but offers direct control over your asset.</p><h4 class="playfair-display mt-4">2. House Flipping</h4><p>Flipping involves buying an undervalued home, renovating it, and selling it for a profit. This strategy is more active and requires market knowledge and renovation expertise, but can offer quick returns.</p><h4 class="playfair-display mt-4">3. Real Estate Investment Trusts (REITs)</h4><p>For those who want to invest without being a landlord, REITs are an excellent option. They are companies that own and operate income-producing real estate. You can buy shares in a REIT on the stock market, making it a highly liquid and accessible investment.</p>`
    },
    {
        id: 9,
        title: 'Maximizing Small Spaces: Tips for Apartment Living',
        author: 'Chloe Taylor',
        date: 'April 26, 2025',
        image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=80',
        summary: 'Living in a smaller space doesn\'t mean you have to sacrifice style or comfort. With smart design choices and clever organization, you can make any apartment feel spacious and luxurious. Here are our top tips.',
        content: `<p class="lead">Making the most of a small apartment is all about smart design and functionality. Here’s how to do it.</p><h4 class="playfair-display mt-4">1. Use Multi-Functional Furniture</h4><p>Invest in pieces that serve more than one purpose. An ottoman with hidden storage, a sofa that converts into a bed, or a dining table that can double as a desk are all great choices for maximizing utility.</p><h4 class="playfair-display mt-4">2. Go Vertical with Storage</h4><p>When floor space is limited, think up! Tall, narrow bookshelves and floating shelves draw the eye upward and provide ample storage without taking up valuable square footage.</p><h4 class="playfair-display mt-4">3. Leverage Mirrors and Light Colors</h4><p>Mirrors are a classic trick for a reason: they create an illusion of depth and reflect light, making a room feel larger and brighter. Painting walls in light, neutral colors like white, beige, or soft gray also helps to create an open, airy feel.</p>`
    }
];

// Agents Data
const agentsData = [
    { id: 1, name: 'Maria Rodriguez', title: 'Lead Sales Agent', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
    { id: 2, name: 'John Smith', title: 'Rental Specialist', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=600&q=80' },
    { id: 3, name: 'Chloe Taylor', title: 'Luxury Villa Expert', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80' },
    { id: 4, name: 'David Chen', title: 'Commercial Properties', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80' }
];

// Testimonials Data
const testimonialsData = [
    { quote: "PrimeStay made finding our dream home in Miami an absolute breeze. Our agent, Maria, was knowledgeable, patient, and truly understood our needs. We couldn't be happier!", author: 'The Johnson Family', location: 'Bought a house in Miami, FL' },
    { quote: "As a first-time renter in a competitive market like New York, I was overwhelmed. John from PrimeStay guided me through every step and found me the perfect apartment within my budget.", author: 'Sarah Lee', location: 'Rented an apartment in New York, NY' },
    { quote: "Selling our luxury villa was a big decision, but Chloe and the PrimeStay team handled it with the utmost professionalism and expertise, securing a fantastic price for us. Highly recommended!", author: 'Mark & Emily Carter', location: 'Sold a villa in Los Angeles, CA' }
];


// --- MAIN SCRIPT ---

document.addEventListener('DOMContentLoaded', function() {

    // --- GLOBAL SCRIPTS (RUN ON ALL PAGES) ---

    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Active class for multi-page navigation
    const navLinksGlobal = document.querySelectorAll("nav .navbar-nav .nav-link");
    if(navLinksGlobal.length > 0) {
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        navLinksGlobal.forEach(link => {
            link.classList.remove("active");
            const linkPath = link.getAttribute("href").split("/").pop();
            if (currentPath === linkPath) {
                link.classList.add("active");
            }
        });
    }

    // Smooth scroll for on-page navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1 && !this.getAttribute('data-bs-toggle')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // General Fade-in animation for elements with .fade-in class
    const fadeInElements = document.querySelectorAll('.fade-in');
    if (fadeInElements.length > 0 && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeInElements.forEach(el => observer.observe(el));
    }

    // Back to Top Button Logic
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        const toggleBackToTop = () => {
            if (window.scrollY > 100) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleBackToTop);
        document.addEventListener('scroll', toggleBackToTop);
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    // --- PAGE-SPECIFIC SCRIPTS ---

    // Helper function for creating property cards (used by listing and detail pages)
    function createPropertyCard(prop, reason = '') {
        const reasonBadge = reason ? `<span class="badge bg-danger reason-badge">${reason}</span>` : '';
        return `
            <div class="col-md-6 col-lg-4 property-item" data-id="${prop.id}">
                <div class="property-card-listing">
                    <div class="property-image-container">
                        <img src="${prop.images[0]}" alt="${prop.title}">
                        <span class="badge ${prop.status === 'sale' ? 'bg-success' : 'bg-info'} property-status-badge">For ${prop.status}</span>
                        ${reasonBadge}
                        <div class="property-card-overlay">
                            <a href="property-detail.html?id=${prop.id}" class="btn btn-light btn-sm">View Details</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title playfair-display">${prop.title}</h5>
                        <p class="card-text text-muted"><i class="bi bi-geo-alt-fill me-1"></i> ${prop.location}</p>
                        <p class="card-text features">${prop.bedrooms}${prop.type === 'commercial' ? '' : ' Beds'} | ${prop.bathrooms} Baths | ${prop.sqft} sqft</p>
                        <p class="price fw-bold">${prop.price_formatted}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // LISTING PAGE
    const propertyItemsContainer = document.getElementById('property-listing-container');
    if (propertyItemsContainer) {
        const filterSidebarElement = document.getElementById('filter-sidebar');
        
        function renderProperties() {
            const locationFilter = document.getElementById('filter-location').value.toLowerCase();
            const typeFilter = document.getElementById('filter-type').value;
            const statusFilter = document.getElementById('filter-status').value;
            const bedroomsFilter = document.getElementById('filter-bedrooms').value;
            const priceFilter = parseFloat(document.getElementById('filter-price').value);
            const sortBy = document.getElementById('sort-properties').value;
            const noResultsMessage = document.getElementById('no-results-message');
            
            let filteredProperties = propertyData.filter(prop => {
                let matches = true;
                if (locationFilter && !prop.location_tag.toLowerCase().includes(locationFilter)) matches = false;
                if (typeFilter && prop.type !== typeFilter) matches = false;
                if (statusFilter && prop.status !== statusFilter) matches = false;
                if (bedroomsFilter && prop.type !== 'commercial') {
                    if (bedroomsFilter === "4" && prop.bedrooms < 4) matches = false;
                    else if (bedroomsFilter !== "4" && prop.bedrooms !== parseInt(bedroomsFilter)) matches = false;
                }
                if (!isNaN(priceFilter) && prop.price > priceFilter) matches = false;
                return matches;
            });

            if (sortBy === 'price-asc') filteredProperties.sort((a, b) => a.price - b.price);
            else if (sortBy === 'price-desc') filteredProperties.sort((a, b) => b.price - a.price);
            else if (sortBy === 'newest') filteredProperties.sort((a, b) => b.id - a.id);

            propertyItemsContainer.innerHTML = '';
            if (filteredProperties.length > 0) {
                propertyItemsContainer.innerHTML = filteredProperties.map(prop => createPropertyCard(prop)).join('');
                noResultsMessage.classList.add('d-none');
            } else {
                noResultsMessage.classList.remove('d-none');
            }
            document.getElementById('load-more-container')?.classList.add('d-none');
        }

        document.querySelector('.filter-apply-btn')?.addEventListener('click', renderProperties);
        document.getElementById('sort-properties')?.addEventListener('change', renderProperties);
        document.querySelector('.filter-reset-btn')?.addEventListener('click', () => {
            document.getElementById('property-filters')?.reset();
            renderProperties();
        });

        // Mobile sidebar toggle
        const toggleFiltersBtn = document.getElementById('toggle-filters-btn');
        const closeFiltersBtn = document.getElementById('close-filters-btn');
        toggleFiltersBtn?.addEventListener('click', () => filterSidebarElement.classList.add('open'));
        closeFiltersBtn?.addEventListener('click', () => filterSidebarElement.classList.remove('open'));

        renderProperties(); // Initial render
    }

    // PROPERTY DETAIL PAGE
    const propertyDetailContainer = document.getElementById('property-detail-container');
    if (propertyDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const propertyId = parseInt(urlParams.get('id'));
        const property = propertyData.find(p => p.id === propertyId);

        if (property) {
            document.title = `${property.title} - PrimeStay`;
            const templateNode = document.getElementById('property-detail-template');
            if (templateNode) {
                const template = templateNode.innerHTML;
                propertyDetailContainer.innerHTML = template
                    .replace(/__TITLE__/g, property.title).replace(/__LOCATION__/g, property.location)
                    .replace(/__PRICE__/g, property.price_formatted).replace(/__SQFT__/g, property.sqft)
                    .replace(/__BEDROOMS__/g, property.type === 'commercial' ? 'N/A' : property.bedrooms)
                    .replace(/__BATHROOMS__/g, property.bathrooms).replace(/__DESCRIPTION__/g, property.description)
                    .replace(/__AGENT_NAME__/g, property.agent.name).replace(/__AGENT_PHONE__/g, property.agent.phone)
                    .replace(/__AGENT_EMAIL__/g, property.agent.email);

                const innerContainer = propertyDetailContainer.querySelector('#carousel-inner-container');
                innerContainer.innerHTML = property.images.map((img, i) => `<div class="carousel-item ${i === 0 ? 'active' : ''}"><img src="${img}" class="d-block w-100" alt="${property.title} - Image ${i+1}"></div>`).join('');
                const amenitiesContainer = propertyDetailContainer.querySelector('.property-amenities-list');
                amenitiesContainer.innerHTML = property.amenities.map(a => `<div class="col-md-4 col-6"><div class="amenity-item"><i class="bi bi-check-circle-fill"></i>${a}</div></div>`).join('');

                // Similar Properties Logic
                const similarPropertiesContainer = document.getElementById('similar-properties-container');
                if (similarPropertiesContainer) {
                    const recommendations = propertyData.map(p => {
                        if (p.id === property.id) return null;
                        let score = 0, reason = '';
                        if (p.location_tag === property.location_tag) { score += 3; reason = 'Same Area'; } 
                        else if (p.type === property.type) { score += 2; reason = `Similar Type`; }
                        if (Math.abs(p.price - property.price) / property.price <= 0.25) score += 1;
                        return score > 0 ? { ...p, score, reason } : null;
                    }).filter(p => p !== null);
                    const similarProps = recommendations.sort((a, b) => b.score - a.score).slice(0, 3);
                    if (similarProps.length > 0) {
                        similarPropertiesContainer.innerHTML = similarProps.map(prop => createPropertyCard(prop, prop.reason)).join('');
                    } else {
                        document.getElementById('similar-properties')?.classList.add('d-none');
                    }
                }
            }
        } else {
            propertyDetailContainer.innerHTML = `<div class="alert alert-danger text-center"><h4 class="alert-heading">Property Not Found</h4><p>The property ID is invalid. Please <a href="listing.html" class="alert-link">return to listings</a>.</p></div>`;
        }
    }

    // BLOG LISTING PAGE
    const blogPostsContainer = document.getElementById('blog-posts-container');
    if (blogPostsContainer) {
        const sortedPosts = blogData.sort((a, b) => b.id - a.id);
        blogPostsContainer.innerHTML = sortedPosts.map(post => `
            <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div class="blog-post-card">
                    <img src="${post.image}" class="card-img-top" alt="${post.title}">
                    <div class="card-body p-4">
                        <p class="card-meta">By ${post.author} on ${post.date}</p>
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.summary}</p>
                        <a href="blog-post.html?id=${post.id}" class="btn btn-outline-primary mt-auto align-self-start">Read More</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // SINGLE BLOG POST PAGE
    const blogPostContentArea = document.getElementById('blog-post-content-area');
    if (blogPostContentArea) {
        const postId = parseInt(new URLSearchParams(window.location.search).get('id'));
        const post = blogData.find(p => p.id === postId);
        if (post) {
            document.title = `${post.title} - PrimeStay`;
            blogPostContentArea.innerHTML = `<h1 class="post-title">${post.title}</h1><p class="post-meta">By ${post.author} on ${post.date}</p><img src="${post.image}" alt="${post.title}" class="post-feature-image"><div class="article-content">${post.content}</div>`;
        } else {
            blogPostContentArea.innerHTML = `<div class="alert alert-danger text-center"><h4 class="alert-heading">Post Not Found</h4><p>Please <a href="blog.html" class="alert-link">return to the blog</a>.</p></div>`;
        }
    }

    // LIST YOUR PROPERTY PAGE
    const listingForm = document.getElementById('property-listing-form');
    if (listingForm) {
        listingForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (listingForm.checkValidity()) {
                document.getElementById('listing-form-container')?.classList.add('d-none');
                document.getElementById('form-success-message')?.classList.remove('d-none');
                window.scrollTo(0, 0);
            }
            listingForm.classList.add('was-validated');
        });
        document.getElementById('list-another-btn')?.addEventListener('click', () => {
            document.getElementById('form-success-message')?.classList.add('d-none');
            document.getElementById('listing-form-container')?.classList.remove('d-none');
            listingForm.reset();
            listingForm.classList.remove('was-validated');
        });
    }

    // COMMUNITY PAGE
    const testimonialsContainer = document.querySelector('#testimonials-carousel .carousel-inner');
    const agentsContainer = document.getElementById('agents-container');
    if (testimonialsContainer && agentsContainer) {
        testimonialsContainer.innerHTML = testimonialsData.map((testimonial, i) => `<div class="carousel-item ${i === 0 ? 'active' : ''}"><div class="testimonial-item text-center"><i class="bi bi-quote quote-icon"></i><blockquote>${testimonial.quote}</blockquote><p class="author mt-4 mb-0">${testimonial.author}</p><p class="author-location">${testimonial.location}</p></div></div>`).join('');
        agentsContainer.innerHTML = agentsData.map(agent => `<div class="col-md-6 col-lg-3"><div class="agent-card"><img src="${agent.image}" alt="${agent.name}"><h5 class="agent-name">${agent.name}</h5><p class="agent-title">${agent.title}</p></div></div>`).join('');
    }

    // HOMEPAGE DYNAMIC SECTIONS
    const homeBlogContainer = document.getElementById('home-blog-posts');
    const homeTestimonialsContainer = document.getElementById('home-testimonials');
    if (homeBlogContainer) {
        homeBlogContainer.innerHTML = blogData.sort((a, b) => b.id - a.id).slice(0, 3).map(post => `
            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="blog-post-card">
                    <img src="${post.image}" class="card-img-top" alt="${post.title}">
                    <div class="card-body p-4">
                        <p class="card-meta">By ${post.author} on ${post.date}</p>
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.summary.substring(0, 100)}...</p>
                        <a href="blog-post.html?id=${post.id}" class="btn btn-outline-primary mt-auto align-self-start">Read More</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
    if (homeTestimonialsContainer) {
        homeTestimonialsContainer.innerHTML = testimonialsData.slice(0, 2).map(testimonial => `
            <div class="col-md-6"><div class="testimonial-item text-center" style="min-height:auto;"><i class="bi bi-quote quote-icon"></i><blockquote>${testimonial.quote}</blockquote><p class="author mt-4 mb-0">${testimonial.author}</p></div></div>
        `).join('');
    }

}); // End of DOMContentLoaded