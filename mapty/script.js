

const form = document.querySelector('.form')
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type')
const inputDistance = document.querySelector('.form__input--distance')
const inputDuration = document.querySelector('.form__input--duration')
const inputCadence = document.querySelector('.form__input--cadence')
const inputElevation = document.querySelector('.form__input--elevation')

// let map, mapEvent;
class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance; // in km
        this.duration = duration; // in min
    }
    _setDescription() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', "July", 'August', 'September', 'October', 'November', 'December'];
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
    }
}
class Running extends Workout {
    type = 'running';

    constructor(coord, distance, duration, cadence) {
        super(coord, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();

    }

    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace
    }
}
class Cycling extends Workout {
    type = 'cycling';
    constructor(coord, distance, duration, elevationGain) {
        super(coord, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();

    }
    calcSpeed() {
        this.speed = this.distance / (this.duration / 60)
        return this.speed
    }
}
const run1 = new Running([39, 12], 5.2, 24, 170)
const cycling1 = new Cycling([39, 12], 27, 24, 523)

console.log(run1, cycling1)


// Architeture 
class App {
    #map;
    #mapEvent;
    #workouts = [];

    constructor() {
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this))
        inputType.addEventListener('change', this._toggleElevationField)

    }

    _getPosition() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
                function () {
                    alert('Could not get your position')
                }
            )
    }
    _loadMap(position) {

        console.log(position)
        const { latitude } = position.coords
        const { longitude } = position.coords
        const coords = [latitude, longitude]
        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            attribution:
                `&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
        }).addTo(this.#map);


        //handling click
        this.#map.on('click', this._showForm.bind(this))

    }
    _showForm(mapE) {
        this.#mapEvent = mapE
        form.classList.remove('hidden')
        inputDistance.focus()
    }
    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }
    _newWorkout(e) {
        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0)
        e.preventDefault()
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng
        let workout;

        if (type === 'runnig') {
            const cadence = +inputCadence.value;
            // if data is valid or not
            // if (!Number.isFinite(distance) && !Number.isFinite(duration) && !Number.isFinite(cadence)) return alert(`Inputs have to be positive numbers`)
            if (!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)) return alert('Input have to be positive numbers !')

            workout = new Running([lat, lng], distance, duration, cadence);
        }

        if (type === 'cycling') {
            const elevate = +inputElevation.value;
            if (!validInputs(distance, duration, elevate) || !allPositive(distance, duration)) return alert('Input have to be positive numbers !')
            workout = new Cycling([lat, lng], distance, duration, elevate);

        }
        this.#workouts.push(workout);
        console.log(workout)
        this._renderWorkoutMarker(workout)
        this._renderWorkout(workout)
        //clear
        inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '';
        // console.log(mapEvent)
        // const { lat, lng } = this.#mapEvent.latlng


    }
    _renderWorkoutMarker(workout) {
        console.log(workout)
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workout.type}-popup`,
            }))
            .setPopupContent(workout.distance)
            .openPopup();
    }
    _renderWorkout(workout) {
        let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div >
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
            </div>
        `
        if (workout.type === 'running') {
            html += `
            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">m</span>
          </div>
            `
        }
        if (workout.type === 'cycling') {
            html += `
            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain.toFixed(1)}</span>
            <span class="workout__unit">m</span>
          </div>
            `
            form.insertAdjacentElement(`afterend`, html)
        }
    }
}

const app = new App();
//get the location -- it is inbuilt api function
// if (navigator.geolocation)
//     navigator.geolocation.getCurrentPosition(function (position) {
//         console.log(position)
//         const { latitude } = position.coords
//         const { longitude } = position.coords
//         const coords = [latitude, longitude]
//         map = L.map('map').setView(coords, 13);

//         L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
//             attribution:
//                 `&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
//         }).addTo(map);


//         //handling click
//         map.on('click', function (mapE) {
//             mapEvent = mapE
//             form.classList.remove('hidden')
//             inputDistance.focus()

//         })
//     },
//         function () {
//             alert('Could not get your position')
//         }
//     )
// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     //clear
//     inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '';
//     console.log(mapEvent)
//     const { lat, lng } = mapEvent.latlng

//     L.marker([lat, lng])
//         .addTo(map)
//         .bindPopup(L.popup({
//             maxWidth: 250,
//             minWidth: 100,
//             autoClose: false,
//             closeOnClick: false,
//             className: 'running-popup',
//         }))
//         .setPopupContent('Workout')
//         .openPopup();
// })
// inputType.addEventListener('change', (e) => {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden')

// })