    const form = document.querySelector('form');
        const mainState = {};
        const inputs = document.querySelectorAll('input:not([type="submit"]), select');
        inputs.forEach(input => {
            mainState[input.name] = input.value;
            const eventType = input.tagName === 'SELECT' ? 'change' : 'input';

            input.addEventListener(eventType, (e) => {
                mainState[e.target.name] = e.target.value;
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            for (const key in mainState) {
                if (!mainState[key] || mainState[key].trim() === '') {
                    isValid = false;
                    break;
                }
            }

            if (!isValid) {
                alert('All fields must be filled out!');
            } else {
                localStorage.setItem('personalInfo', JSON.stringify(mainState));
                alert('Submitted');
            }
        });