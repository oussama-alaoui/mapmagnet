async function saveNewsletter() {
    const email = document.getElementById('subscribe_email').value;
    const newsletterData = {
        email: email
    };
    try {
        const response = await fetch('http://localhost:3003/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsletterData)
        });

        if (response.ok) {
            console.log('Newsletter saved successfully!');
        } else {
            console.error('Failed to save newsletter:', response.status);
        }
    } catch (error) {
        console.error('An error occurred while saving the newsletter:', error);
    }
}

console.log('Starting newsletter save...');