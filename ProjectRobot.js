"use strict"

const roads = [
    "Дом Алисы-Дом Боба", "Дом Алисы-Склад", "Дом Алисы-Почта", "Дом Боба-Ратуша", "Дом Дарии-Дом Эрни",
    "Дом Дарии-Ратуша", "Дом Эрни-Дом Греты", "Дом Греты-Ферма", "Дом Греты-Магазин", "Рынок-Ферма",
    "Рынок-Почта", "Рынок-Магазин", "Рынок-Ратуша", "Магазин-Ратуша"
];

function buildGraph(edges) {

    let graph = Object.create(null)
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;

}

const roadGraph = buildGraph(roads)

console.log(roadGraph)

class VillageState {

    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return { place: destination, addres: p.address };
            }).filter(p => p.place != p.addres);
            return new VillageState(destination, parcels);
        }
    }

}

let first = new VillageState(
    "Почта",
    [{place: "Почта", address: "Дом Алисы"}]
);

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        console.log(`Выполненно за ${turn} ходов`)
        break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Переход в направлении ${action.direction}`);
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Почта", parcels)
}

const mailRoute = [
    "Дом Алисы", "Сарай", "Дом Алисы", "Дом Боба", "Ратуша", "Дом Дарии", "Дом Дарии",
    "Дом Эрни", "Дом Греты", "Магазин", "Дом Греты", "Ферма", "Рынок", "Почта"
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

function findRout(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

