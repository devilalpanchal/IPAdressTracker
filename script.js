const btn = document.getElementById('btn')
console.log(btn);
const input = document.getElementById('input')
console.log(input);
const ipadress = document.getElementById('ipadress')
const country = document.querySelector('.country')
const region = document.querySelector('.region')
const timezone = document.getElementById('timezone')
const isp = document.getElementById('isp')


function fetchData(url) {

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
          console.log(data)
            console.log(data.ip);
            ipadress.textContent = data.ip;
            country.textContent = data.location.country;
            region.textContent = data.location.region;
            timezone.textContent = `UTC ${data.location.timezone}`;
            isp.textContent = data.isp;
            console.log(data.isp);
            const latitude = data.location.lat;
            const longitude = data.location.lng;
            document.querySelector('iframe').src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            ipadress.textContent = '';
            country.textContent = '';
            region.textContent = '';
            timezone.textContent = '';
            isp.textContent = '';
        });
}

btn.addEventListener('click', () => {
    const value = input.value.trim();
    if (value !== '') {
        const url = `https://geo.ipify.org/api/v1?apiKey=at_3KG6NmMqaezLciL4z0xSHfIKKrair&ipAddress=${value}`;
        fetchData(url);
    } else {
        ipadress.textContent = '';
        country.textContent = '';
        region.textContent = '';
        timezone.textContent = '';
        isp.textContent = '';
    }
});